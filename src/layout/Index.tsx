import { Outlet } from 'react-router-dom';
import { Btn } from './Btn';
import { useTitle } from '@/hooks/useTitle';

export const Index = () => {
  useTitle();

  return (
    <>
      <Btn />
      <main>
        <Outlet />
      </main>
    </>
  );
};
