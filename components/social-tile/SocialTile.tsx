'use client';
import Links from 'components/links/Links';
import { CTA, Link } from 'components/main-tile/types';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SocialTileProps } from './types';

const SocialTile: React.FC<SocialTileProps> = ({
  key,
  header,
  cta,
  desc,
  links,
}) => {
  const { url, content } = cta;
  const router = useRouter();
  const onRedirectHandler = (redirect_link: Link = url) => {
    const { external, link } = redirect_link;
    if (external) {
      window.open(link, '_blank');
    } else {
      router.push(link);
    }
  };
  const getDescComponent = (desc: string) => (
    <>
      {desc.split('\n').map((item: string, index: number) => (
        <span key={index}>
          {item}
          <br />
        </span>
      ))}
    </>
  );
  return (
    <div
      key={key}
      className="group relative overflow-hidden my-2 p-5 w-full md:w-[46%]  h-auto bg-base-1 border border-base-3 rounded-md cursor-pointer transition duration-200 hover:-translate-y-2"
      onClick={() => {
        onRedirectHandler();
      }}
    >
      {/* Button Abs Content  */}
      <div className="absolute top-3.5 right-4">
        <button
          name={typeof content === 'string' ? content : `icon`}
          onClick={() => {}}
          className="inline-flex justify-center items-center gap-1 bg-primary px-4 py-2 text-high rounded-md"
        >
          <p className="text-sm font-medium">{content}</p>
          {typeof content === 'string' && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                strokeWidth={2.5}
                stroke="currentColor"
                className={`w-4 h-4 ${
                  !!url?.external && 'group-hover:-translate-y-[0.125rem]'
                } group-hover:translate-x-[0.125rem] transition duration-100`}
              >
                {url?.external ? (
                  // top-right-arrow svg
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                ) : (
                  // right-arrow svg
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                )}
              </svg>
            </>
          )}
        </button>
      </div>
      {/* Main Content Relative  */}
      <div className="h-full">
        <h1 className="my-1 font-semibold text-lg">{header}</h1>
        {!!desc && (
          <p className="w-[70%] my-5 text-sm text-base-2">
            {getDescComponent(desc)}
          </p>
        )}
        {!!links && (
          <div className="my-4 flex flex-wrap items-center gap-3">
            {links.map(
              (
                { url: attached_url, content: attached_content }: CTA,
                index: number,
              ) => (
                <Links
                  {...{
                    attached_url,
                    attached_content,
                    key: index,
                    onRedirectHandler,
                  }}
                />
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialTile;
