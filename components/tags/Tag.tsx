import React from 'react';
import { Tags } from './types';

const Tag = ({ tag_content }: Tags) => {
  return (
    <div className="my-1 md:my-2 px-2 py-1 md:px-3 md:py-2 border border-base-3 rounded-full transition duration-75 hover:border-primary">
      <p className="text-contrast-1 hover:text-white text-[0.75rem] md:text-xs">
        {tag_content}
      </p>
    </div>
  );
};

export default Tag;
