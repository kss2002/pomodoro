import { useEffect, useRef } from 'react';
import { usePomodoroStore } from '../stores/pomodoroStore';
import { sendNotification } from '../utils/notification';

const TICK_INTERVAL_MS = 1000;

export const usePomodoro = () => {
  const store = usePomodoroStore();
  const isRunning = usePomodoroStore((state) => state.isRunning);
  const tick = usePomodoroStore((state) => state.tick);
  const previousModeRef = useRef(store.mode);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      tick();
    }, TICK_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [isRunning, tick]);

  useEffect(() => {
    const hasModeChanged = previousModeRef.current !== store.mode;
    const isPreviousModeValid = previousModeRef.current !== undefined;

    if (hasModeChanged && isPreviousModeValid) {
      sendNotification(
        store.settings.enableSound,
        store.settings.enableVibration
      );
    }

    previousModeRef.current = store.mode;
  }, [store.mode, store.settings.enableSound, store.settings.enableVibration]);

  return store;
};
