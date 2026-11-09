import { useEffect, useState } from 'react';

const BASE_WIDTH = 394;
const BASE_HEIGHT = 852;
const PADDING = 0;

export default function useResponsiveScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const availableWidth = window.innerWidth - PADDING * 2;
      const availableHeight = window.innerHeight - PADDING * 2;

      const scaleX = availableWidth / BASE_WIDTH;
      const scaleY = availableHeight / BASE_HEIGHT;

      // Pilih skala terkecil agar seluruh iPhone muat
      const newScale = Math.min(scaleX, scaleY, 1);

      setScale(newScale);
    };

    calculateScale();

    window.addEventListener('resize', calculateScale);

    return () => {
      window.removeEventListener('resize', calculateScale);
    };
  }, []);

  return scale;
}