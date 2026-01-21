// Workflow types
export interface Workflow {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface Step {
  id: string;
  workflow_id: string;
  order_index: number;
  action_type: "click" | "input" | "navigate" | "scroll";
  target_selector: string | null;
  target_text: string | null;
  input_value: string | null;
  url: string;
  description: string | null;
  ai_generated: boolean;
  created_at: string;
}

export interface Screenshot {
  id: string;
  step_id: string;
  storage_path: string;
  width: number;
  height: number;
  created_at: string;
}

export interface ShareLink {
  id: string;
  workflow_id: string;
  short_id: string;
  password_hash: string | null;
  expires_at: string | null;
  view_count: number;
  created_at: string;
}

// Extension message types
export interface RecordingStartMessage {
  type: "RECORDING_START";
}

export interface RecordingStopMessage {
  type: "RECORDING_STOP";
}

export interface StepCapturedMessage {
  type: "STEP_CAPTURED";
  payload: {
    actionType: Step["action_type"];
    targetSelector: string | null;
    targetText: string | null;
    inputValue: string | null;
    url: string;
    screenshot: string; // base64
  };
}

export type ExtensionMessage =
  | RecordingStartMessage
  | RecordingStopMessage
  | StepCapturedMessage;
