let isListening = false;

function getSelector(element: Element): string {
  // Try ID first
  if (element.id) {
    return `#${element.id}`;
  }

  // Try unique class combination
  if (element.className && typeof element.className === "string") {
    const classes = element.className.trim().split(/\s+/).filter(Boolean);
    if (classes.length > 0) {
      const selector = `.${classes.join(".")}`;
      if (document.querySelectorAll(selector).length === 1) {
        return selector;
      }
    }
  }

  // Build path from parent
  const path: string[] = [];
  let current: Element | null = element;

  while (current && current !== document.body) {
    let selector = current.tagName.toLowerCase();

    if (current.id) {
      selector = `#${current.id}`;
      path.unshift(selector);
      break;
    }

    const parent = current.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter(
        (child) => child.tagName === current!.tagName
      );
      if (siblings.length > 1) {
        const index = siblings.indexOf(current) + 1;
        selector += `:nth-of-type(${index})`;
      }
    }

    path.unshift(selector);
    current = parent;
  }

  return path.join(" > ");
}

async function captureScreenshot(): Promise<string> {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: "CAPTURE_SCREENSHOT" }, (response) => {
      resolve(response?.screenshot ?? "");
    });
  });
}

function handleClick(event: MouseEvent) {
  if (!isListening) return;

  const target = event.target as Element;
  if (!target) return;

  const selector = getSelector(target);
  const text = target.textContent?.trim().slice(0, 100) ?? null;

  chrome.runtime.sendMessage({
    type: "STEP_CAPTURED",
    payload: {
      actionType: "click",
      targetSelector: selector,
      targetText: text,
      inputValue: null,
      url: window.location.href,
      screenshot: "", // TODO: Implement screenshot capture
    },
  });
}

function handleInput(event: Event) {
  if (!isListening) return;

  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  if (!target) return;

  const selector = getSelector(target);

  chrome.runtime.sendMessage({
    type: "STEP_CAPTURED",
    payload: {
      actionType: "input",
      targetSelector: selector,
      targetText: target.placeholder ?? null,
      inputValue: target.value,
      url: window.location.href,
      screenshot: "",
    },
  });
}

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "START_LISTENING") {
    isListening = true;
    document.addEventListener("click", handleClick, true);
    document.addEventListener("change", handleInput, true);
  }

  if (message.type === "STOP_LISTENING") {
    isListening = false;
    document.removeEventListener("click", handleClick, true);
    document.removeEventListener("change", handleInput, true);
  }
});

// Check if already recording on load
chrome.storage.local.get(["isRecording"], (result) => {
  if (result.isRecording) {
    isListening = true;
    document.addEventListener("click", handleClick, true);
    document.addEventListener("change", handleInput, true);
  }
});
