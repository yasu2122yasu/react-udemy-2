import { Link, useNavigate } from 'react-router-dom';

export const Page1 = () => {
  //   100件の配列をstateとして渡す
  const arr = [...Array(100).keys()];
  console.log(arr);

  const navigate = useNavigate();

  const onClickDetailA = () => {
    //   100件の配列をstateとして渡す
    // react-router-domのver5の書き方
    // history.push('/page1/detailA'); * useHistoryを使用
    navigate('/page1/detailA', { state: arr });
  };

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: '/page1/detailA', state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
