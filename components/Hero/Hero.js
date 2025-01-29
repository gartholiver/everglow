import React from 'react';
import { Heading } from '../../components';

export default function Hero({ title, level = 'h2', children, className }) {
  return (
    <div className={className}>
      <Heading level={level}>
        <span>{title}</span>
      </Heading>
      {children}
    </div>
  );
}
