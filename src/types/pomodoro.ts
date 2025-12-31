export type TimerMode = 'work' | 'shortBreak' | 'longBreak';

export interface PomodoroSettings {
  enableSound: boolean;
  enableVibration: boolean;
}

export interface PomodoroState {
  mode: TimerMode;
  timeLeft: number;
  isRunning: boolean;
  completedCycles: number;
  settings: PomodoroSettings;
}

export interface PomodoroActions {
  start: () => void;
  pause: () => void;
  reset: () => void;
  tick: () => void;
  toggleSound: () => void;
  toggleVibration: () => void;
}

export type PomodoroStore = PomodoroState & PomodoroActions;
