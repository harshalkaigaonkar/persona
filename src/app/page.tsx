'use client';
import { MainTile } from 'components/main-tile';
import { SocialTile } from 'components/social-tile';
import data from 'config.js';
import Image from 'next/image';
import { UTileType } from './types';

export default function Home() {
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
          <h3 className="w-[50%] text-center my-2 text-sm font-medium text-high">
            {data.about}
          </h3>
          <div className="p-1 md:p-10 w-full max-w-[80%] h-full flex flex-col md:flex-row flex-wrap justify-evenly items-start">
            {data.sections.map(({ type, data }: any, index: number) => {
              if (type === UTileType.MAINTILE) {
                return (
                  <MainTile
                    key={index}
                    header={data.header}
                    cta={data.cta}
                    desc={data.desc}
                    tags={data.tags}
                    links={data.links}
                    media_link={data.media_link}
                  />
                );
              } else if (type === UTileType.SOCIALTILE) {
                return (
                  <SocialTile
                    key={index}
                    header={data.header}
                    cta={data.cta}
                    desc={data.desc}
                    links={data.links}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </div>
      </main>
    </>
  );
}
