import { LinkProps } from './types';
import React from 'react';
import FigmaSvg from 'components/svgs/figma';
import GithubSvg from 'components/svgs/github';
import MailSvgIcon from 'components/svgs/mail';
import LiveSvgIcon from 'components/svgs/live';

const Links = ({
  attached_url,
  attached_content,
  onRedirectHandler,
}: LinkProps) => {
  return (
    <button
      name={typeof attached_content === 'string' ? attached_content : `icon_`}
      onClick={(e) => onRedirectHandler(e, attached_url)}
      className="px-2 py-1 md:px-3 md:py-2 flex items-center gap-2 text-xs md:text-sm text-high border border-base-3 hover:border-primary rounded-md"
    >
      <div className="w-6 h-6">
        {attached_url?.icon === 'figma' ? (
          <FigmaSvg />
        ) : attached_url?.icon === 'github' ? (
          <GithubSvg />
        ) : attached_url?.icon === 'twitter' ? (
          <img className="rounded-md" src="/companies/x.png" alt="twitter_x" />
        ) : attached_url?.icon === 'mail' ? (
          <MailSvgIcon />
        ) : attached_url?.icon === 'live' ? (
          <LiveSvgIcon />
        ) : (
          <></>
        )}
      </div>
      {attached_content}
    </button>
  );
};

export default Links;
