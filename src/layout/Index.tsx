import { Outlet } from 'react-router-dom';
import { Btn } from './Btn';

export const Index = () => {
  return (
    <>
      <Btn />
      <main>
        <Outlet />
      </main>
    </>
  );
};
