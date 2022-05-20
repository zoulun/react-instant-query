import React from 'react';
import { personalDetailInterface } from 'interface/personal-detail-interface';
import './index.css';

/**
 * 个人信息
 * @param props
 * @returns
 */
export default function PersonalDetail(props: personalDetailInterface) {
  const { data = {}, style = {} } = props;
  const { qlogo, name, qq } = data as any;

  return (
    <div className="personal-detail-container" style={style}>
      {!!qlogo ? (
        <div className="detail-box">
          <div className="detail-left">
            <img src={qlogo} alt={''} />
          </div>
          <div className="detail-right">
            <div className="name">{name}</div>
            <div className="number">{qq}</div>
          </div>
        </div>
      ) : (
        <p className="nodata">暂无数据</p>
      )}
    </div>
  );
}
