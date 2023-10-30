'use client';
import { FullFrame, HalfHeightFrame, HalfWidthFrame } from 'components/frame';
import { MainTile } from 'components/main-tile';
import { SocialTile } from 'components/social-tile';
import data from 'config';
import Image from 'next/image';
import { UFrameType, UTileType } from './types';
import { uuid } from 'uuidv4';
import React, { useEffect, useRef } from 'react';
import { ListTile } from 'components/list-tile';
import ProfileImage from '../../public/Harshal.jpg';
import { Transition } from '@headlessui/react';

export default function Home() {
  const tilesRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll: EventListener = (event: Event) => {
      const scrollOffset = tilesRef && tilesRef.current.getBoundingClientRect();
      if (!!headerRef.current) {
        const opacityValue = scrollOffset.top / tilesRef.current.offsetTop;
        headerRef.current.style.opacity = (
          opacityValue > 0 ? opacityValue : 0
        ).toString();
      }
    };

    const win: Window = window;
    win.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function tileDistribution(tileType: any, data: any) {
    return tileType === UTileType.MAINTILE ? (
      <>
        <MainTile
          key={uuid()}
          header={data.header}
          cta={data.cta}
          desc={data.desc}
          tags={data.tags}
          links={data.links}
          media_link={data.media_link}
        />
      </>
    ) : tileType === UTileType.SOCIALTILE ? (
      <>
        <SocialTile
          key={uuid()}
          header={data.header}
          cta={data.cta}
          desc={data.desc}
          links={data.links}
        />
      </>
    ) : (
      tileType === UTileType.LISTTILE && (
        <>
          <ListTile
            key={uuid()}
            header={data.header}
            desc={data.desc}
            cta={data.cta}
            list={data.list_array}
          />
        </>
      )
    );
  }

  function frameDistribution(frameType: any, data: any) {
    return frameType === UFrameType.FULLFRAME ? (
      <FullFrame wrap>
        {!data.tileType ? (
          <>
            {data.map(({ frameType, data }: any, index: number) => (
              <React.Fragment key={index}>
                {frameDistribution(frameType, data)}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>{tileDistribution(data.tileType, data.data)}</>
        )}
      </FullFrame>
    ) : frameType === UFrameType.HALFHEIGHTFRAMEWITHCOL ? (
      <HalfHeightFrame flex="col">
        {!data.tileType ? (
          <>
            {data.map(({ frameType, data }: any, index: number) => (
              <React.Fragment key={index}>
                {frameDistribution(frameType, data)}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>{tileDistribution(data.tileType, data.data)}</>
        )}
      </HalfHeightFrame>
    ) : frameType === UFrameType.HALFHEIGHTFRAMEWITHROW ? (
      <HalfHeightFrame flex="row">
        {!data.tileType ? (
          <>
            {data.map(({ frameType, data }: any, index: number) => (
              <React.Fragment key={index}>
                {frameDistribution(frameType, data)}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>{tileDistribution(data.tileType, data.data)}</>
        )}
      </HalfHeightFrame>
    ) : frameType === UFrameType.HALFWIDTHFRAMEWITHCOL ? (
      <HalfWidthFrame flex="col">
        {!data.tileType ? (
          <>
            {data.map(({ frameType, data }: any, index: number) => (
              <React.Fragment key={index}>
                {frameDistribution(frameType, data)}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>{tileDistribution(data.tileType, data.data)}</>
        )}
      </HalfWidthFrame>
    ) : (
      frameType === UFrameType.HALFWIDTHFRAMEWITHROW && (
        <HalfWidthFrame flex="row">
          {!data.tileType ? (
            <>
              {data.map(({ frameType, data }: any, index: number) => (
                <React.Fragment key={index}>
                  {frameDistribution(frameType, data)}
                </React.Fragment>
              ))}
            </>
          ) : (
            <>{tileDistribution(data.tileType, data.data)}</>
          )}
        </HalfWidthFrame>
      )
    );
  }
  return (
    <>
      <main className="w-full h-full">
        <div className="w-auto flex flex-col items-center justify-center">
          <Transition appear show={true}>
            <Transition.Child
              appear
              as={React.Fragment}
              enter="transition-all ease-linear duration-300 transform"
              enterFrom="opacity-0 top-8"
              enterTo="opacity-100 top-0"
            >
              <div
                ref={headerRef}
                className="pt-10 sticky top-0 w-full h-30 flex justify-center items-center"
              >
                <div className=" w-full h-full flex flex-col justify-center items-center ">
                  <div className="flex justify-center items-center w-28 h-28 rounded-xl">
                    <Image
                      src={ProfileImage}
                      alt={data.name}
                      objectFit={'contain'}
                      placeholder="blur"
                      width={120}
                      height={120}
                      className="rounded-xl border border-high/50"
                      priority
                    />
                  </div>
                  <h1 className="my-4 text-2xl md:text-3xl font-bold text-high">
                    {data.name}
                  </h1>
                  <h3 className="w-[90%] md:w-[50%] text-center my-2 text-xs md:text-sm font-medium text-medium">
                    {data.about}
                  </h3>
                </div>
              </div>
            </Transition.Child>
            <Transition.Child
              appear
              enter="transition-all ease-linear duration-300 delay-300 transform"
              enterFrom="opacity-0 mt-10"
              enterTo="opacity-100 mt-2"
            >
              <div
                ref={tilesRef}
                className="w-full h-full flex justify-center items-center"
              >
                <div className="mt-2 p-1 lg:p-10 md:p-8 w-full max-w-[90%] md:max-w-[80%] h-full flex flex-col md:flex-row flex-wrap justify-evenly items-start gap-4 scroll-smooth">
                  {data.frames.map(
                    ({ frameType, data }: any, index: number) => (
                      <React.Fragment key={index}>
                        <FullFrame wrap>
                          <>{frameDistribution(frameType, data)}</>
                        </FullFrame>
                      </React.Fragment>
                    ),
                  )}
                </div>
              </div>
            </Transition.Child>
          </Transition>
        </div>
      </main>
    </>
  );
}
