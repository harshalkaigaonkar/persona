import React from 'react';
import { TileContainerProps } from './types';

const TileContainer: React.FC<TileContainerProps> = ({
  children,
  className,
}) => {
  return <div className={'relative ' + className}>{children}</div>;
};

export default TileContainer;
