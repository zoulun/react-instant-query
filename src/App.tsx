import React from 'react';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { PersonalDetail } from 'components/personalDetail';
import './App.css';

function App() {
  const title = 'QQ号查询';
  const labelVal = 'QQ';
  const data = {
    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mamecn.com%2Fuploadfile%2F2019%2F1130%2F20191130022643462.png&refer=http%3A%2F%2Fimg.mamecn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655545927&t=c1aa4a66cbd8ce3716110d880e05ce4e',
    name: '哈哈',
    number: 123123,
  };
  const presonalStyle = {
    marginTop: '20px',
  };
  return (
    <div className="app">
      <Header title={title}></Header>
      <Search label={labelVal}></Search>
      <PersonalDetail data={data} style={presonalStyle}></PersonalDetail>
    </div>
  );
}

export default App;
