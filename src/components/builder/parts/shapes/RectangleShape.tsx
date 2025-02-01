import {
  Defs,
  LinearGradient,
  LinearGradientProps,
  RadialGradient,
  RadialGradientProps,
  Rect,
  RectProps,
  Stop,
  Svg,
  SVGProps,
} from '@react-pdf/renderer';
import React from 'react';
import { randomUuid } from '../../../util';

export interface GradientStop {
  offset: string | number;
  stopColor: string;
  stopOpacity?: string | number;
}

export interface RectangleShapeProps extends SVGProps {
  rectProps?: RectProps;
  linearGradientProps?: LinearGradientProps;
  radialGradientProps?: RadialGradientProps;
  gradient?: GradientStop[] | string[];
  gradientType?: 'linear' | 'radial';
}

export const RectangleShape = ({
  width = 100,
  height = 100,
  fill,
  rectProps,
  linearGradientProps,
  radialGradientProps,
  gradient,
  gradientType = 'linear',
  ...svgProps
}: RectangleShapeProps) => {
  const uuidRef = React.useRef(randomUuid());
  const linearId = `linear-${uuidRef.current}`;
  const radialId = `radial-${uuidRef.current}`;
  const gradientStops = (gradient ?? []).map((g, i, arr): GradientStop => {
    if (typeof g === 'string') {
      return {
        offset: `${Math.round((i / arr.length) * 100)}%`,
        stopColor: g,
      };
    }
    return g;
  });
  if (gradientStops.length === 1) {
    gradientStops.push({ offset: '100%', stopColor: gradientStops[0].stopColor });
  }
  return (
    <Svg viewBox={`0 0 ${width} ${height}`} {...svgProps} style={{ width, height, ...svgProps.style }}>
      <Defs>
        <LinearGradient id={linearId} x1={0} x2={1} y1={0} y2={1} {...linearGradientProps}>
          {gradientStops.map((s, i) => (
            <Stop key={`linear-stop-` + i} {...s} />
          ))}
        </LinearGradient>
        <RadialGradient id={radialId} {...radialGradientProps}>
          {gradientStops.map((s, i) => (
            <Stop key={`radial-stop-` + i} {...s} />
          ))}
        </RadialGradient>
      </Defs>
      <Rect
        width={width}
        height={height}
        {...rectProps}
        fill={
          rectProps?.fill ??
          fill ??
          (!gradient ? 'black' : gradientType === 'radial' ? `url('#${radialId}')` : `url('#${linearId}')`)
        }
      />
    </Svg>
  );
};
