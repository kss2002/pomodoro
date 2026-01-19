import { Volume2, VolumeX, Vibrate } from 'lucide-react';
import type { PomodoroSettings } from '../types/pomodoro';

interface SettingsPanelProps {
  settings: PomodoroSettings;
  onToggleSound: () => void;
  onToggleVibration: () => void;
}

export const SettingsPanel = ({
  settings,
  onToggleSound,
  onToggleVibration,
}: SettingsPanelProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <button
        onClick={onToggleSound}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          settings.enableSound
            ? 'bg-black hover:bg-sky-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
        }`}
        aria-label={settings.enableSound ? '소리 끄기' : '소리 켜기'}
      >
        {settings.enableSound ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
        <span className="font-medium">소리</span>
      </button>

      <button
        onClick={onToggleVibration}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          settings.enableVibration
            ? 'bg-black hover:bg-sky-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
        }`}
        aria-label={settings.enableVibration ? '진동 끄기' : '진동 켜기'}
      >
        <Vibrate className="w-5 h-5" />
        <span className="font-medium">진동</span>
      </button>
    </div>
  );
};
