import { Clock } from 'lucide-react';
import { formatTime } from '../utils/timer';
import type { TimerMode } from '../types/pomodoro';

interface TimerProps {
  mode: TimerMode;
  timeLeft: number;
}

export const Timer = ({ mode, timeLeft }: TimerProps) => {
  const getModeConfig = () => {
    switch (mode) {
      case 'work':
        return {
          label: '집중 시간',
          colorClass: 'text-red-500',
          bgClass: 'bg-white',
          borderClass: 'border-red-500',
        };
      case 'shortBreak':
        return {
          label: '짧은 휴식',
          colorClass: 'text-green-500',
          bgClass: 'bg-white',
          borderClass: 'border-green-500',
        };
      case 'longBreak':
        return {
          label: '긴 휴식',
          colorClass: 'text-blue-500',
          bgClass: 'bg-white',
          borderClass: 'border-blue-500',
        };
    }
  };

  const config = getModeConfig();

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`relative flex flex-col items-center justify-center w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 ${config.borderClass} ${config.bgClass} transition-all duration-500`}
      >
        <Clock className={`w-12 h-12 ${config.colorClass} mb-4`} />
        <div className={`text-5xl sm:text-6xl font-bold ${config.colorClass}`}>
          {formatTime(timeLeft)}
        </div>
      </div>
      <div className={`text-lg sm:text-2xl font-semibold ${config.colorClass}`}>
        {config.label}
      </div>
    </div>
  );
};
