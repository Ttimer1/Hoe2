chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "RECORDING_START") {
    // Notify all tabs to start listening
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, { type: "START_LISTENING" }).catch(() => {
            // Tab might not have content script loaded
          });
        }
      });
    });
    sendResponse({ success: true });
  }

  if (message.type === "RECORDING_STOP") {
    // Notify all tabs to stop listening
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, { type: "STOP_LISTENING" }).catch(() => {
            // Tab might not have content script loaded
          });
        }
      });
    });
    sendResponse({ success: true });
  }

  if (message.type === "STEP_CAPTURED") {
    // Increment step count
    chrome.storage.local.get(["stepCount"], (result) => {
      const newCount = (result.stepCount ?? 0) + 1;
      chrome.storage.local.set({ stepCount: newCount });
    });

    // TODO: Upload to Supabase
    console.log("Step captured:", message.payload);
    sendResponse({ success: true });
  }

  return true; // Keep message channel open for async response
});

// Initialize storage on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    isRecording: false,
    stepCount: 0,
  });
});
