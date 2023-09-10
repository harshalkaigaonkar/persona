import DarkModeSvg from 'components/svgs/dark-mode';
import LightModeSvg from 'components/svgs/light-mode';
import useIsDarkMode from 'hooks/useIsDarkMode';
import React, { useEffect, useState } from 'react';
import { IHeaderProps, UThemeType } from './types';

// not using rn
const Header = () => {
  const { isDark, setInvertTheme } = useIsDarkMode();
  return (
    <div className="flex my-2 mx-4 items-center justify-end">
      <button
        className={`${isDark ? 'bg-teal-900 ' : 'bg-teal-700 '}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        onClick={setInvertTheme}
      >
        <span
          className={`${isDark ? 'translate-x-9 ' : 'translate-x-0 '}
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {isDark ? <LightModeSvg /> : <DarkModeSvg />}
        </span>
      </button>
    </div>
  );
};

export default Header;
