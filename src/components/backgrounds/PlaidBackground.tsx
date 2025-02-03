import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { GradientStop, GradientType } from '../shapes/Gradients';
import { RectangleShape } from '../shapes/RectangleShape';

export interface PlaidBackgroundProps extends BoxProps {
  gradient?: string[] | GradientStop[];
}

//TODO: You can make this fix the area it's in, but you need to give it the right proportions.
//TODO: Maybe add a page size prop to make this easy. Just give it A4 and it just works. Etc.
export const PlaidBackground = ({ gradient = ['#192D76', '#325788'], ...props }: PlaidBackgroundProps) => {
  const width = 595.28;
  const height = 841.89;
  return (
    <Box
      {...props}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        ...props.style,
      }}
    >
      <Box style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
        <RectangleShape
          style={{ position: 'absolute', width: '100%', height: '100%', left: 0 }}
          width={width}
          height={height}
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
