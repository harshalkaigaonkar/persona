import { LinkProps } from './types';
import React from 'react';
import FigmaSvg from 'components/svgs/figma';
import GithubSvg from 'components/svgs/github';

const Links = ({
  attached_url,
  attached_content,
  key,
  onRedirectHandler,
}: LinkProps) => {
  return (
    <button
      name={
        typeof attached_content === 'string' ? attached_content : `icon_${key}`
      }
      key={key}
      onClick={() => onRedirectHandler(attached_url)}
      className="flex gap-2 text-sm border border-base-3 hover:border-primary rounded-md px-3 py-2"
    >
      {attached_url?.icon === 'figma' ? (
        <FigmaSvg />
      ) : attached_url?.icon === 'github' ? (
        <GithubSvg />
      ) : (
        <></>
      )}
      {attached_content}
    </button>
  );
};

export default Links;
