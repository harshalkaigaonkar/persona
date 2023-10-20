import { CardFrame } from 'components/frame/card-frame';
import Image from 'next/image';
import React, { useState } from 'react';
import { ListTileProps } from './types';

const ListTile: React.FC<ListTileProps> = (props) => {
  const { key, header, desc, cta, list } = props;
  const { url, content } = cta;
  const onButtonClickHandler = (
    e: React.SyntheticEvent<HTMLButtonElement>,
    url: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank');
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
    <CardFrame key={key} cta={cta}>
      <div className="h-full w-full p-5">
        <h1 className="my-1 font-semibold text-md md:text-xl text-high">
          {header}
        </h1>
        {!!desc && (
          <p className="w-[75%] my-5 text-xs md:text-sm text-medium">
            {getDescComponent(desc)}
          </p>
        )}
        <div className="flex flex-col items-center gap-4">
          {!!list &&
            list.map((listItem: any, index: number) => (
              <React.Fragment>
                <div
                  key={index}
                  className="w-full h-auto flex flex-row flex-nowrap justify-between gap-4"
                >
                  <div className="w-10 h-10 flex justify-center items-center rounded-md">
                    <Image
                      src={listItem.icon_media_link}
                      alt={`${listItem.header}_icon`}
                      width={30}
                      height={30}
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                  <div className="w-full">
                    <span className="flex flex-row flex-wrap items-center">
                      <p className="font-semibold text-sm md:text-md text-high">
                        {listItem.header}
                        <span className="font-light text-md md:text-lg text-primary">
                          {' '}
                          @{' '}
                          <span>
                            <button
                              className="hover:underline"
                              onClick={(e: any) =>
                                onButtonClickHandler(
                                  e,
                                  listItem.company.companyWebsiteUrl,
                                )
                              }
                            >
                              <span></span>
                              {listItem.company.name}
                            </button>
                          </span>
                        </span>
                      </p>
                    </span>
                    <p className="font-normal text-xs md:text-sm text-medium">
                      {listItem.duration.from} - {listItem.duration.to}
                    </p>
                  </div>
                </div>
                <ul className="pl-5 list-disc text-xs font-light text-medium opacity-50">
                  {listItem.desc.split('\n').map((descItem: string) => (
                    <li className="my-1">
                      {descItem}
                      <br />
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
        </div>
      </div>
    </CardFrame>
  );
};

export default ListTile;
