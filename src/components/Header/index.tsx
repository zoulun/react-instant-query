import React from 'react';
import { HeaderInterface } from 'interface/header-interface';
import './index.css';

export default function Header(props: HeaderInterface) {
  const { title } = props;
  return (
    <header className="header-container">
      <h1>{title}</h1>
    </header>
  );
}
