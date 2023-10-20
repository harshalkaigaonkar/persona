import React from 'react';
import { IHalfHeightFrameProps } from './types';

const HalfHeightFrame: React.FC<IHalfHeightFrameProps> = (props) => {
  const { children, flex } = props;
  return (
    <div className={`w-full h-full md:h-[50%] flex flex-${flex} gap-6`}>
      {children}
    </div>
  );
};

export default HalfHeightFrame;
