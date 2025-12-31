import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PomodoroStore, TimerMode } from '../types/pomodoro';

// 타이머의 숫자를 정의함.
const WORK_TIME = 25 * 60;
const SHORT_BREAK_TIME = 5 * 60;
const LONG_BREAK_TIME = 20 * 60;
const CYCLES_BEFORE_LONG_BREAK = 4;

const getInitialTime = (mode: TimerMode): number => {
  switch (mode) {
    case 'work':
      return WORK_TIME;
    case 'shortBreak':
      return SHORT_BREAK_TIME;
    case 'longBreak':
      return LONG_BREAK_TIME;
  }
};

export const usePomodoroStore = create<PomodoroStore>()(
  persist(
    (set, get) => ({
      mode: 'work',
      timeLeft: WORK_TIME,
      isRunning: false,
      completedCycles: 0,
      settings: {
        enableSound: true,
        enableVibration: true,
      },

      start: () => {
        set({ isRunning: true });
      },

      pause: () => {
        set({ isRunning: false });
      },

      reset: () => {
        set({
          mode: 'work',
          timeLeft: WORK_TIME,
          isRunning: false,
          completedCycles: 0,
        });
      },

      tick: () => {
        const state = get();
        if (!state.isRunning || state.timeLeft <= 0) return;

        const newTimeLeft = state.timeLeft - 1;

        if (newTimeLeft <= 0) {
          const nextMode = (() => {
            if (state.mode === 'work') {
              const nextCycle = state.completedCycles + 1;
              if (nextCycle >= CYCLES_BEFORE_LONG_BREAK) {
                return 'longBreak';
              }
              return 'shortBreak';
            }
            return 'work';
          })();

          const nextCompletedCycles = (() => {
            if (state.mode === 'work') {
              return state.completedCycles + 1;
            }
            if (state.mode === 'longBreak') {
              return 0;
            }
            return state.completedCycles;
          })();

          set({
            mode: nextMode,
            timeLeft: getInitialTime(nextMode),
            completedCycles: nextCompletedCycles,
            isRunning: true,
          });
        } else {
          set({ timeLeft: newTimeLeft });
        }
      },

      toggleSound: () => {
        set((state) => ({
          settings: {
            ...state.settings,
            enableSound: !state.settings.enableSound,
          },
        }));
      },

      toggleVibration: () => {
        set((state) => ({
          settings: {
            ...state.settings,
            enableVibration: !state.settings.enableVibration,
          },
        }));
      },
    }),
    {
      name: 'pomodoro-storage',
      partialize: (state) => ({
        mode: state.mode,
        timeLeft: state.timeLeft,
        completedCycles: state.completedCycles,
        settings: state.settings,
      }),
    }
  )
);
