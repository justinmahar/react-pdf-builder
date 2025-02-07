import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { PageSizeString } from '../pages/PageSizes';
import { GradientBackdrop } from './GradientBackdrop';
import { GradientType } from '../shapes/Gradients';

export interface TestBackdropProps extends BoxProps {
  size: PageSizeString | { width: number; height: number };
  orientation?: 'portrait' | 'landscape';
}

export const TestBackdrop = ({ size: size, orientation, ...props }: TestBackdropProps) => {
  return (
    <Box {...props} style={{ position: 'absolute', ...props.style }}>
      <GradientBackdrop size={size} orientation={orientation} gradient={['#192D76', '#325788']} />

      <GradientBackdrop
        size={size}
        orientation={orientation}
        gradientType={GradientType.topLeftToBottomRight}
        gradient={[
          { offset: '0%', stopColor: '#000000', stopOpacity: 0 },
          { offset: '10%', stopColor: '#000000', stopOpacity: 0 },
          { offset: '10%', stopColor: '#000000', stopOpacity: 0.2 },
          { offset: '50%', stopColor: '#000000', stopOpacity: 0.2 },
          { offset: '50%', stopColor: '#000000', stopOpacity: 0 },
        ]}
      />
      <GradientBackdrop
        size={size}
        orientation={orientation}
        gradientType={GradientType.bottomLeftToTopRight}
        gradient={[
          { offset: '0%', stopColor: '#000000', stopOpacity: 0 },
          { offset: '10%', stopColor: '#000000', stopOpacity: 0 },
          { offset: '10%', stopColor: '#000000', stopOpacity: 0.2 },
          { offset: '50%', stopColor: '#000000', stopOpacity: 0.2 },
          { offset: '50%', stopColor: '#000000', stopOpacity: 0 },
        ]}
      />
    </Box>
  );
};
