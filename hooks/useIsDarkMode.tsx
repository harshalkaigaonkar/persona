'use client';
import { useEffect, useState } from 'react';

const useIsDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  let lsTheme: 'light' | 'dark';

  useEffect(() => {
    if (!window.matchMedia) {
      console.log('OS Theme Not Supported!!');
      return;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      return;
    }
    if (document.documentElement && !!lsTheme) {
      document.documentElement?.setAttribute(
        'data-theme',
        lsTheme === 'light' ? 'dark' : 'light',
      );
      setIsDark(lsTheme === 'dark');
      return;
    }
  }, [isDark]);
  function setInvertTheme() {
    const invertedTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('data-theme', invertedTheme);
    document.documentElement?.setAttribute('data-theme', invertedTheme);
    setIsDark(invertedTheme === 'dark');
  }
  console.log(isDark, 'isDark');
  return {
    isDark,
    setInvertTheme,
  };
};

export default useIsDarkMode;
