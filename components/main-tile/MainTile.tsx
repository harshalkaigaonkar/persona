'use client';
import { CardFrame } from 'components/frame/card-frame';
import Links from 'components/links/Links';
import Tag from 'components/tags/Tag';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Tags } from '../tags/types';
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
  const onRedirectHandler = (
    e: React.SyntheticEvent<HTMLButtonElement>,
    redirect_link: Link = url,
  ) => {
    e.preventDefault();
    e.stopPropagation();
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
    <CardFrame
      key={key}
      content={content}
      onRedirectHandler={onRedirectHandler}
      url={url}
    >
      {/* Main Content Relative  */}
      <div className="h-full">
        <h1 className="my-1 font-semibold text-xl text-high">{header}</h1>
        {!!desc && (
          <p className="w-[75%] my-5 text-sm text-base-2">
            {getDescComponent(desc)}
          </p>
        )}
        {!!tags && (
          <div className="flex flex-wrap items-center gap-2">
            {tags.map(({ tag_content }: Tags, index: number) => (
              <div key={index}>
                <Tag {...{ tag_content }} />
              </div>
            ))}
          </div>
        )}
        {!!links && (
          <div className="my-4 flex flex-wrap items-center gap-3">
            {links.map(
              (
                { url: attached_url, content: attached_content }: CTA,
                index: number,
              ) => (
                <div key={index}>
                  <Links
                    {...{
                      attached_url,
                      attached_content,
                      onRedirectHandler,
                    }}
                  />
                </div>
              ),
            )}
          </div>
        )}
        {!!media_link && (
          <div className="w-full h-full mt-4 overflow-l-hidden">
            <Image
              src={media_link}
              alt={`${header}_media`}
              width={500}
              height={600}
              objectFit="cover"
            />
          </div>
        )}
      </div>
    </CardFrame>
  );
};

export default MainTile;
