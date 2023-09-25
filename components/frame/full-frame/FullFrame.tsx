import React from 'react';
import { IFullFrameProps } from './types';

const FullFrame: React.FC<IFullFrameProps> = (props) => {
  const { children, wrap } = props;
  return (
    <div
      className={`w-full h-auto flex flex-row flex-${
        !!wrap ? 'wrap' : 'nowrap'
      } md:flex-nowrap gap-6 min-h-[565px]`}
    >
      {children}
    </div>
  );
};

export default FullFrame;
