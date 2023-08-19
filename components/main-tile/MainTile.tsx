'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { TagsProps } from './Tags/types';
import { CTA, Link, MainTileProps } from './types';

const MainTile: React.FC<MainTileProps> = ({
  key,
  header,
  cta,
  desc,
  tags,
  links,
  media_link,
}) => {
  const { url, content } = cta;
  const router = useRouter();
  const onRedirectHandler = (redirect_link: Link = url) => {
    const { external, link } = redirect_link;
    if (external) {
      window.location.href = link;
    } else {
      router.push(link);
    }
  };
  const getDescComponent = (desc: string) => (
    <>
      {desc.split('\n').map((item: string, index: number) => (
        <span>
          {item}
          <br />
        </span>
      ))}
    </>
  );
  return (
    <div
      key={key}
      className="group relative my-2 p-5 w-[46%] h-auto bg-base-1 border border-base-2 rounded-md cursor-pointer transition duration-200 hover:-translate-y-2"
      onClick={() => onRedirectHandler}
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
            // top-right-arrow svg
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                ) : (
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
        {!!tags && (
          <div>
            {tags.map(({ tag_content }: TagsProps, index: number) => (
              <>
                <button
                  name={
                    typeof tag_content === 'string'
                      ? tag_content
                      : `icon_${index}`
                  }
                  key={index}
                >
                  {tag_content}
                </button>
              </>
            ))}
          </div>
        )}
        {!!links && (
          <div>
            {links.map(
              (
                { url: attachedUrl, content: attachedContent }: CTA,
                index: number,
              ) => (
                <>
                  <button
                    name={
                      typeof attachedContent === 'string'
                        ? attachedContent
                        : `icon_${index}`
                    }
                    key={index}
                    onClick={() => onRedirectHandler(attachedUrl)}
                  >
                    {attachedContent}
                  </button>
                </>
              ),
            )}
          </div>
        )}
        {!!media_link && (
          <Image
            src={media_link}
            alt={`${header}_media`}
            width={100}
            height={200}
          />
        )}
      </div>
    </div>
  );
};

export default MainTile;
