'use client';
import { CardFrame } from 'components/frame/card-frame';
import Links from 'components/links/Links';
import { CTA, Link } from 'components/main-tile/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { getTwitterInfo } from './config';
import { SocialTileProps } from './types';

const SocialTile: React.FC<SocialTileProps> = ({
  key,
  header,
  cta,
  desc,
  links,
}) => {
  // not working, will try later

  // const [twitterInfo, setTwitterInfo] = useState();
  // useEffect(() => {
  //   (async () => {
  //     await getTwitterInfo()
  //       .then((res) => {
  //         setTwitterInfo(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err, 'err');
  //         return err;
  //       });
  //   })();
  // }, [twitterInfo]);

  // console.log(twitterInfo, 'twitterInfo');

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
      </div>
    </CardFrame>
  );
};

export default SocialTile;
