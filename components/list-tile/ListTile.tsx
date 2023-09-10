import { CardFrame } from 'components/frame/card-frame';
import Image from 'next/image';
import React from 'react';
import { ListTileProps } from './types';

const ListTile: React.FC<ListTileProps> = (props) => {
  const { key, header, desc, cta, list } = props;
  const { url, content } = cta;
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
    <CardFrame key={key} cta={cta}>
      <div className="h-full w-full">
        <h1 className="my-1 font-semibold text-xl text-high">{header}</h1>
        {!!desc && (
          <p className="w-[75%] my-5 text-sm text-medium">
            {getDescComponent(desc)}
          </p>
        )}
        {!!list &&
          list.map((listItem: any, index: number) => (
            <div
              key={index}
              className="w-full h-auto mt-4 flex flex-row flex-nowrap gap-2"
            >
              <div className="w-10 h-10 flex justify-center items-center">
                <Image
                  src={listItem.icon_media_link}
                  alt={`${listItem.header}_icon`}
                  width={30}
                  height={30}
                  objectFit="cover"
                />
              </div>
              <div>
                <p className="font-semibold text-md text-high">
                  {listItem.header}
                  <span> @ {listItem.company.name}</span>
                </p>
                <p className="font-normal text-sm text-medium">
                  {listItem.duration.from} - {listItem.duration.to}
                </p>
              </div>
            </div>
          ))}
      </div>
    </CardFrame>
  );
};

export default ListTile;
