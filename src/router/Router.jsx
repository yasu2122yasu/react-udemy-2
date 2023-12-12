import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Page1Routes } from './Page1Routes';
import { Page2 } from '../Page2';

export const Router = () => {
  const url = '/page1';
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {Page1Routes.map((route, index) => (
        <Route key={route.path} path={`${url}${route.path}`} element={route.children} />
      ))}
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
};
