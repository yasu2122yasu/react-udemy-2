import { Page2 } from '../Page2';
import { UrlParameter } from '../UrlParameter';

// URLパラメーターを扱うために、Page2Routesを作成
export const Page2Routes = [
  {
    path: '/',
    children: <Page2 />,
  },
  {
    path: '/:id',
    children: <UrlParameter />,
  },
];
