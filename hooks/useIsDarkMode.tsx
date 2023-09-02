import { useEffect } from 'react';

const useIsDarkMode = () => {
  let isDark: boolean = false;
  useEffect(() => {
    if (!window.matchMedia) {
      console.log('OS Theme Not Supported!!');
      return;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark = true;
    }
  }, []);
  return isDark;
};

export default useIsDarkMode;
