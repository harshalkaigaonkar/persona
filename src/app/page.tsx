'use client';
import { FullFrame, HalfHeightFrame, HalfWidthFrame } from 'components/frame';
import { MainTile } from 'components/main-tile';
import { SocialTile } from 'components/social-tile';
import data from 'config';
import Image from 'next/image';
import { UFrameType, UTileType } from './types';
import { uuid } from 'uuidv4';
import React from 'react';
import Header from 'components/header';
import { ListTile } from 'components/list-tile';

export default function Home() {
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
        <div className="mt-20 w-auto flex flex-col items-center ">
          <div className="flex">
            <Image
              src={data.profile_img}
              alt={data.name}
              objectFit={'cover'}
              width={120}
              height={120}
              className="rounded-xl border border-whitesmoke"
            />
          </div>
          <h1 className="my-4 text-3xl font-bold text-high">{data.name}</h1>
          <h3 className="w-[50%] text-center my-2 text-sm font-medium text-medium">
            {data.about}
          </h3>
          <div className="p-1 lg:p-10 md:p-8 w-full max-w-[90%] md:max-w-[80%] h-full flex flex-col md:flex-row flex-wrap justify-evenly items-start gap-4">
            {data.frames.map(({ frameType, data }: any, index: number) => (
              <React.Fragment key={index}>
                <FullFrame wrap>
                  <>{frameDistribution(frameType, data)}</>
                </FullFrame>
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
