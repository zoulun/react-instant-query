import React from 'react';
import Header from 'components/Header';
import Search from 'components/Search';
import Loading from 'components/loading';
import PersonalDetail from 'components/personalDetail';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const title = 'QQ号查询';
  const labelVal = 'QQ';
  const presonalStyle = {
    marginTop: '20px',
  };

  const reducers: any = useSelector((state) => {
    return state;
  });

  const { personal, global } = reducers;

  return (
    <div className="app">
      <Header title={title} />
      <Search label={labelVal} />
      <PersonalDetail data={personal} style={presonalStyle} />
      <Loading isShow={global.isLoading} />
    </div>
  );
}

export default App;
