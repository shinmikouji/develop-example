import React from 'react';
import s from './index.module.scss';

export type ImageProps = {
  src: string;
  spSrc?: string;
  tabSrc?: string;
  alt?: string;
  quality?: number;
};

export const Image: React.FC<ImageProps> = ({
  src,
  spSrc,
  tabSrc,
  alt,
  quality = 80,
}) => {
  return (
    <picture className={s['a-image']}>
      <source
        srcSet={`${src}?fm=webp&q=${quality}, ${
          spSrc ? `${spSrc}?fm=webp&q=${quality} 641w` : ''
        }, ${tabSrc ? `${tabSrc}?fm=webp&q=${quality} 1281w` : ''}`}
        type="image/webp"
      />
      <img
        srcSet={`${src}?q=${quality}, ${
          spSrc ? `${spSrc}?q=${quality} 641w` : ''
        }, ${tabSrc ? `${tabSrc}?q=${quality} 1281w` : ''} `}
        src={src}
        alt={alt}
      />
    </picture>
  );
};
