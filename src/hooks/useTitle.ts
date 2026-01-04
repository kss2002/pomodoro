import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titleMap: Record<string, string> = {
  '/': '뽀모도로 타이머',
  '/desc': '뽀모도로 기법이란',
};

export const useTitle = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = titleMap[location.pathname] || '앗, 문제가 생겼어요';
  }, [location.pathname]);
};
