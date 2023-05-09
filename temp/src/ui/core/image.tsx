import * as React from 'react';
import { Image as NImage, ImageProps } from 'react-native';
import { styled } from 'nativewind';
const SImage = styled(NImage);
export type ImgProps = ImageProps & {
  className?: string;
};

export const Image = ({ style, className, ...props }: ImgProps) => {
  return <SImage className={className} style={style} {...props} />;
};

export const preloadImages = (sources: string) => {
  NImage.prefetch(sources);
};
