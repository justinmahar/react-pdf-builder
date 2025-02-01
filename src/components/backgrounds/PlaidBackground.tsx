import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { GradientStop, GradientType } from '../shapes/Gradients';
import { RectangleShape } from '../shapes/RectangleShape';

export interface PlaidBackgroundProps extends BoxProps {
  gradient?: string[] | GradientStop[];
  scale?: number;
}

export const PlaidBackground = ({ gradient = ['#192D76', '#325788'], scale = 1, ...props }: PlaidBackgroundProps) => {
  return (
    <Box
      {...props}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `scale(${scale})`,
        ...props.style,
      }}
    >
      <Box style={{ position: 'absolute', width: 600, height: 845, overflow: 'hidden' }}>
        <RectangleShape
          style={{ position: 'absolute', left: 0 }}
          width={600}
          height={845}
          gradient={gradient}
          gradientType={GradientType.topLeftToBottomRight}
        />
        <RectangleShape
          style={{
            position: 'absolute',
            transform: 'rotate(45deg)',
          }}
          width={400}
          height={2000}
          fill="#000000"
          opacity={0.1}
        />
        <RectangleShape
          style={{
            position: 'absolute',
            transform: 'translate(0, -500), rotate(45deg)',
          }}
          width={300}
          height={2000}
          fill="#000000"
          opacity={0.1}
        />
        <RectangleShape
          style={{
            position: 'absolute',
            transform: 'translate(0, -300), rotate(-45deg)',
          }}
          width={400}
          height={2000}
          fill="#000000"
          opacity={0.1}
        />
        <RectangleShape
          style={{
            position: 'absolute',
            transform: 'translate(0, -850), rotate(-45deg)',
          }}
          width={50}
          height={2000}
          fill="#000000"
          opacity={0.1}
        />
      </Box>
    </Box>
  );
};
