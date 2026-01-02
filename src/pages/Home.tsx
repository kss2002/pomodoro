import { Timer } from '../components/Timer';
import { ControlButtons } from '../components/ControlButtons';
import { SettingsPanel } from '../components/SettingsPanel';
import { usePomodoro } from '../hooks/usePomodoro';
import { useSettings } from '../hooks/useSettings';

export const Home = () => {
  const { mode, timeLeft, isRunning, start, pause, reset } = usePomodoro();
  const { settings, toggleSound, toggleVibration } = useSettings();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 p-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
        뽀모도로 타이머
      </h1>
      <Timer mode={mode} timeLeft={timeLeft} />
      <ControlButtons
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
      <SettingsPanel
        settings={settings}
        onToggleSound={toggleSound}
        onToggleVibration={toggleVibration}
      />
    </div>
  );
};
