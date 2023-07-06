import { useState, useEffect } from 'react';

const useScrollAndResize = () => {
  const [scroll, setScroll] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };    

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize(); 

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scroll, isLargeScreen };
};

export default useScrollAndResize;