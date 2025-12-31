const VIBRATION_PATTERN = [200, 100, 200];

export const playNotificationSound = async (): Promise<void> => {
  try {
    const audio = new Audio('/sounds/sound.wav');
    await audio.play();
  } catch (error) {
    console.warn('알림 소리를 재생하지 못했어요: ', error);
  }
};

// 안드로이드 모바일에서만 작동됩니다.
export const triggerVibration = (): void => {
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(VIBRATION_PATTERN);
    } catch (error) {
      console.warn('진동을 유발하지 못했어요: ', error);
    }
  }
};

export const sendNotification = async (
  enableSound: boolean,
  enableVibration: boolean
): Promise<void> => {
  if (enableSound) {
    await playNotificationSound();
  }

  if (enableVibration) {
    triggerVibration();
  }
};
