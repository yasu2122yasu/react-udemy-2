import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Page1Routes } from './Page1Routes';
import { Page2Routes } from './Page2Routes';
import { Page404 } from '../Page404';

export const Router = () => {
  const url1 = '/page1';
  const url2 = '/page2';
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {Page1Routes.map((route, index) => (
        <Route key={route.path} path={`${url1}${route.path}`} element={route.children} />
      ))}
      {Page2Routes.map((route, index) => (
        <Route key={route.path} path={`${url2}${route.path}`} element={route.children} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
