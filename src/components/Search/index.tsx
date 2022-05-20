import React, { useRef, useState } from 'react';
import { SearchInterface } from 'interface/search-interface';
import { debounce, checkNumber } from 'src/utils/utils';
import { getRequest } from 'src/request';
import './index.css';

/**
 * 搜索模块
 * @param props
 * @returns
 */
export function Search(props: SearchInterface) {
  const { label } = props;
  const [errorText, setErrorText] = useState('');
  const iptRef = useRef<HTMLInputElement>(null);

  // 输入
  const handlerEntryonChange = (e: any) => {
    const val = e.target.value;
    const isPass = checkNumber(val);
    // 校验输入的是数字后进行防抖处理
    if (isPass) {
      debounce(handlerSearch, 2000);
      setErrorText('');
    } else {
      setErrorText('请输入合法的内容');
    }
  };

  // 输入后查询
  const handlerSearch = () => {
    const iptVal = iptRef.current?.value;
    console.log(`输入的：${iptVal}`);
    const params = {
      url: 'https://api.uomg.com/api/qq.info',
      data: {
        qq: iptVal,
      },
    };
    getRequest(params);
  };

  return (
    <div className="search-container">
      <label htmlFor="enterqq">{label}</label>
      <div>
        <input
          ref={iptRef}
          id="enterqq"
          type="text"
          className="enterqq"
          onChange={handlerEntryonChange}
          maxLength={20}
          placeholder={'请输入QQ号进行查询'}
        />
        <p className="err">{errorText}</p>
      </div>
    </div>
  );
}
