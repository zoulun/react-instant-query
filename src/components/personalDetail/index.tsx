import React from 'react';
import { personalDetailInterface } from 'interface/personal-detail-interface';
import './index.css';

/**
 * 个人信息
 * @param props
 * @returns
 */
export function PersonalDetail(props: personalDetailInterface) {
  const { data = {}, style = {} } = props;
  const { src, name, number } = data as any;
  return (
    <div className="personal-detail-container" style={style}>
      <div className="detail-left">
        <img src={src} alt={''} />
      </div>
      <div className="detail-right">
        <div className="name">{name}</div>
        <div className="number">{number}</div>
      </div>
    </div>
  );
}
