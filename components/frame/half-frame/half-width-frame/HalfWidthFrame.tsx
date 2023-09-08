import React from 'react';
import { IHalfWidthFrameProps } from './types';

const HalfWidthFrame: React.FC<IHalfWidthFrameProps> = (props) => {
  const { children, flex } = props;
  return (
    <div className={`w-full md:w-[50%] h-auto  flex flex-${flex} gap-6`}>
      {children}
    </div>
  );
};

export default HalfWidthFrame;
