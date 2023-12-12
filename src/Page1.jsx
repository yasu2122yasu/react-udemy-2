import { Link, Outlet } from 'react-router-dom';

export const Page1 = () => {
  //   100件の配列をstateとして渡す
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: '/page1/detailA', state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <Outlet />
    </div>
  );
};
