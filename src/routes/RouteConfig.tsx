import { Index } from '../layout/Index';
import { Home } from '../pages/Home';
import { Desc } from '../pages/Desc';
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
        path: '/desc',
        element: <Desc />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
