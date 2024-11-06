'use client';

import Image from 'next/image';
import { memo, useState } from 'react';
import Loader from './Loader';

const AppAvatar = ({
  alt,
  className = '',
  height = 500,
  path,
  src,
  rotate,
  width = 500,
  defaultImageName = '',
  textSize = 'text-16',
  isPrivate = true,
  isShowThreeDot = false
}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [notFound, setNotFound] = useState(false);


  return (
    <div>
      {(() => {
        if (imageUrl || src) {
          return (
            <Image
              alt={alt}
              className={`${className} avatar_image_class`}
              height={height}
              loading="lazy"
              placeholder="blur"
              blurDataURL="Loading..."
              onError={() => {
                setNotFound(true);
              }}
              src={imageUrl || src}
              width={width}
            />
          );
        }
        if (!isShowThreeDot) {
          return (
            <div
              className={`${className} rounded-full bg-blue-light-800 flex items-center justify-center ring-2 ring-border-light ring-offset-1`}
            >
              <p className={`text-brand font-medium ${textSize}`}>{defaultImageName}</p>
            </div>
          );
        }
        return (
          <div>
            <Loader hW="35px" />
          </div>
        );
      })()}
    </div>
  );
};

export default memo(AppAvatar);
