import React from 'react';
import { BaseData } from '../../interface/base';
import './index.css';

export function Header(props: BaseData) {
  const { title } = props;
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}
