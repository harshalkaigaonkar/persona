import { Link } from 'components/links/types';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ICardFrameProps } from './types';

const CardFrame: React.FC<ICardFrameProps> = (props) => {
  const { children, key, cta } = props;
  const router = useRouter();
  const onRedirectHandler = (
    e: React.SyntheticEvent<HTMLButtonElement>,
    redirect_link: Link | undefined = cta?.url,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (!!redirect_link?.external) {
      window.open(redirect_link.link, '_blank');
    } else if (!!redirect_link?.link) {
      router.push(redirect_link?.link);
    }
  };
  return (
    <div
      key={key}
      className="group relative overflow-hidden my-2 w-full h-auto bg-base-1 border border-base-3 rounded-md cursor-pointer transition duration-200 hover:-translate-y-2"
      onClick={(e: any) => {
        if (!!onRedirectHandler) onRedirectHandler(e);
      }}
    >
      {/* Button Abs Content  */}
      {!!cta && (
        <div className="absolute top-3.5 right-4">
          <button
            name={typeof cta?.content === 'string' ? cta?.content : `icon`}
            onClick={() => {}}
            className="inline-flex justify-center items-center gap-1 bg-primary px-4 py-2 text-high rounded-md"
          >
            <p className="text-sm font-medium text-black">{cta?.content}</p>
            {typeof cta?.content === 'string' && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className={`w-4 h-4 text-black ${
                    !!cta?.url?.external &&
                    'group-hover:-translate-y-[0.125rem]'
                  } group-hover:translate-x-[0.125rem] transition duration-100`}
                >
                  {cta?.url?.external ? (
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
      )}
      {children}
    </div>
  );
};

export default CardFrame;
