import { Index } from '../layout/Index';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export const routeConfig = [
  {
    element: <Index />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
