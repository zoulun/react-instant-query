import React from 'react';
import { LoadingInterface } from 'interface/loadingInterface';
import './index.css';

/**
 * 全局loading
 * @param props
 * @returns
 */
export default function loading(props: LoadingInterface) {
  const { isShow = false, text = '查询中，请稍等！' } = props;
  const style = {
    display: isShow ? 'block' : 'none',
  };

  return (
    <div className="loading-container" style={style}>
      <div className="loading-box">
        <div className="loading"></div>
        <p className="loading-desc">{text}</p>
      </div>
    </div>
  );
}
