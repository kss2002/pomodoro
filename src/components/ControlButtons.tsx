import { Play, Pause, RotateCcw } from 'lucide-react';

interface ControlButtonsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export const ControlButtons = ({
  isRunning,
  onStart,
  onPause,
  onReset,
}: ControlButtonsProps) => {
  return (
    <div className="flex gap-4 items-center justify-center">
      {isRunning ? (
        <button
          onClick={onPause}
          className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white transition-colors shadow-lg"
          aria-label="일시정지"
        >
          <Pause className="w-8 h-8 sm:w-10 sm:h-10" />
        </button>
      ) : (
        <button
          onClick={onStart}
          className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors shadow-lg"
          aria-label="시작"
        >
          <Play className="w-8 h-8 sm:w-10 sm:h-10" />
        </button>
      )}
      <button
        onClick={onReset}
        className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-500 hover:bg-gray-600 text-white transition-colors shadow-lg"
        aria-label="리셋"
      >
        <RotateCcw className="w-8 h-8 sm:w-10 sm:h-10" />
      </button>
    </div>
  );
};
