import DarkModeSvg from 'components/svgs/dark-mode';
import LightModeSvg from 'components/svgs/light-mode';
import React, { useEffect, useState } from 'react';
import { IHeaderProps, UThemeType } from './types';

// Not used RN, becoz it's just for dark mode toggle but it's controlled by OS Mode.
const Header = () => {
  const [theme, setTheme] = useState<UThemeType>(
    localStorage.getItem('theme') as UThemeType,
  );
  useEffect(() => {
    function switchTheme(theme: UThemeType) {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
    switchTheme(theme);
  }, [theme]);
  const onThemeChangeHandler = () => {
    setTheme((theme) =>
      theme === UThemeType.LIGHT ? UThemeType.DARK : UThemeType.LIGHT,
    );
  };
  return (
    <div>
      <button onClick={onThemeChangeHandler}>
        {theme === UThemeType.LIGHT ? <LightModeSvg /> : <DarkModeSvg />}
      </button>
    </div>
  );
};

export default Header;
