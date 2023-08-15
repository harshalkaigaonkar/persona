'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { TagsProps } from '../Tags/types';
import TileContainer from '../TileContainer';
import { CTA, Link, MainTileProps } from './types';

const MainTile: React.FC<MainTileProps> = ({
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
  return (
    <TileContainer onClick={onRedirectHandler}>
      <>
        {/* Button Abs Content  */}
        <div className="absolute top-10 right-10 w-12">
          <button
            name={typeof content === 'string' ? content : `icon`}
            onClick={() => {}}
          >
            {content}
          </button>
        </div>
        {/* Main Content Relative  */}
        <div className="relative bg-white">
          <h1>{header}</h1>
          {!!desc && <p>{desc}</p>}
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
      </>
    </TileContainer>
  );
};

export default MainTile;
