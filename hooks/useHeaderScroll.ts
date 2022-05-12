import { useEffect, useState } from 'react';

const useHeaderScroll = (activePoint: number) => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const scrollWindow = () => {
      let scroll = 0;
      scroll = window.scrollY;
      if (activePoint >= scroll) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, [activePoint]);

  return { isHeaderActive };
};

export default useHeaderScroll;
