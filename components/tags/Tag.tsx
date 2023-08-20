import React from 'react';
import { Tags } from './types';

const Tag = ({ tag_content, key }: Tags) => {
  return (
    <span
      key={key}
      className="my-2 px-3 py-2 border border-base-3 rounded-full transition duration-75 hover:border-primary"
    >
      <p className="text-contrast-1 hover:text-white text-xs">{tag_content}</p>
    </span>
  );
};

export default Tag;
