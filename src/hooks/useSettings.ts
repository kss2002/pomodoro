import { usePomodoroStore } from '../stores/pomodoroStore';

export const useSettings = () => {
  const settings = usePomodoroStore((state) => state.settings);
  const toggleSound = usePomodoroStore((state) => state.toggleSound);
  const toggleVibration = usePomodoroStore((state) => state.toggleVibration);

  return {
    settings,
    toggleSound,
    toggleVibration,
  };
};
