import { useParams, useLocation } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは {id} です</p>
      {/* urlにあるname=**** を取得できる */}
      <p>クエリパラメーターは {query.get('name')} です</p>
    </div>
  );
};
