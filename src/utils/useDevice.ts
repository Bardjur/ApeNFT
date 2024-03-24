'use client';

import { useEffect, useState } from "react";

export function useDevice() {

  const [device, setDevice] = useState<'mobile' | 'desktop' | 'tablet'>('mobile');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const device = screenWidth < 768 ? 'mobile' : screenWidth >= 1280 ? 'desktop' : 'tablet';
      setDevice(device);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return device;
}