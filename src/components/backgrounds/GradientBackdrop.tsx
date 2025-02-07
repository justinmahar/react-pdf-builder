import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { PageSizeString } from '../pages/PageSizes';
import { GradientStop, GradientType } from '../shapes/Gradients';
import { RectangleShape } from '../shapes/RectangleShape';
import { Backdrops } from './Backdrops';

export interface GradientBackdropProps extends BoxProps {
  size: PageSizeString | { width: number; height: number };
  orientation?: 'portrait' | 'landscape';
  gradient: string[] | GradientStop[];
  gradientType?: GradientType;
}

export const GradientBackdrop = ({ size, orientation, gradient, gradientType, ...props }: GradientBackdropProps) => {
  const d = Backdrops.getDimensions(size, orientation);
  const width = d.width;
  const height = d.height;

  return (
    <Box {...props} style={{ position: 'absolute', ...props.style }}>
      <RectangleShape width={width} height={height} gradient={gradient} gradientType={gradientType} />
    </Box>
  );
};
