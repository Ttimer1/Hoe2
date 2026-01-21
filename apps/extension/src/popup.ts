interface RecordingState {
  isRecording: boolean;
  stepCount: number;
}

const statusEl = document.getElementById("status")!;
const toggleBtn = document.getElementById("toggleBtn")!;
const stepCountEl = document.getElementById("stepCount")!;

async function getState(): Promise<RecordingState> {
  const result = await chrome.storage.local.get(["isRecording", "stepCount"]);
  return {
    isRecording: result.isRecording ?? false,
    stepCount: result.stepCount ?? 0,
  };
}

function updateUI(state: RecordingState) {
  if (state.isRecording) {
    statusEl.textContent = "Recording...";
    statusEl.className = "status recording";
    toggleBtn.textContent = "Stop Recording";
    toggleBtn.className = "stop";
    stepCountEl.style.display = "block";
    stepCountEl.textContent = `${state.stepCount} step${state.stepCount !== 1 ? "s" : ""} captured`;
  } else {
    statusEl.textContent = "Ready to record";
    statusEl.className = "status idle";
    toggleBtn.textContent = "Start Recording";
    toggleBtn.className = "start";
    stepCountEl.style.display = "none";
  }
}

toggleBtn.addEventListener("click", async () => {
  const state = await getState();

  if (state.isRecording) {
    // Stop recording
    await chrome.storage.local.set({ isRecording: false });
    chrome.runtime.sendMessage({ type: "RECORDING_STOP" });
  } else {
    // Start recording
    await chrome.storage.local.set({ isRecording: true, stepCount: 0 });
    chrome.runtime.sendMessage({ type: "RECORDING_START" });
  }

  updateUI(await getState());
});

// Initialize UI
getState().then(updateUI);

// Listen for storage changes
chrome.storage.onChanged.addListener((changes) => {
  if (changes.isRecording || changes.stepCount) {
    getState().then(updateUI);
  }
});
