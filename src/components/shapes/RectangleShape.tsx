import { Defs, LinearGradient, RadialGradient, Rect, RectProps, Stop, Svg } from '@react-pdf/renderer';
import React from 'react';
import { randomUuid } from '../util';
import { Gradients, GradientType } from './Gradients';
import { ShapeProps } from './ShapeProps';

export interface RectangleShapeProps extends ShapeProps {
  rectProps?: Partial<RectProps>;
}

export const RectangleShape = ({
  width = 100,
  height = 100,
  fill,
  rectProps,
  linearGradientProps,
  radialGradientProps,
  gradient,
  gradientType = GradientType.topToBottom,
  linearGradientCoords: linearGradientCoordsProps,
  radialGradientCoords: radialGradientCoordsProps,
  ...svgProps
}: RectangleShapeProps) => {
  const uuidRef = React.useRef(randomUuid());
  const linearId = `linear-${uuidRef.current}`;
  const radialId = `radial-${uuidRef.current}`;
  const gradientStops = Gradients.normalizeGradientStops(gradient);
  const linearGradientCoords = linearGradientCoordsProps
    ? Gradients.safeLinearCoords(linearGradientCoordsProps)
    : Gradients.toGradientCoords(gradientType);
  const radialGradientCoords = radialGradientCoordsProps
    ? Gradients.safeRadialCoords(radialGradientCoordsProps)
    : undefined;
  const widthNum = parseFloat(`${width}`);
  const heightNum = parseFloat(`${height}`);
  const rectFill =
    rectProps?.fill ??
    fill ??
    (!gradient ? 'black' : gradientType === GradientType.radial ? `url('#${radialId}')` : `url('#${linearId}')`);

  return (
    <Svg
      viewBox={`0 0 ${widthNum} ${heightNum}`}
      {...svgProps}
      style={{ width: widthNum, height: heightNum, ...svgProps.style }}
    >
      <Defs>
        <LinearGradient id={linearId} {...linearGradientCoords} {...linearGradientProps}>
          {gradientStops.map((s, i) => (
            <Stop key={`linear-stop-` + i} {...s} />
          ))}
        </LinearGradient>
        <RadialGradient id={radialId} {...radialGradientCoords} {...radialGradientProps}>
          {gradientStops.map((s, i) => (
            <Stop key={`radial-stop-` + i} {...s} />
          ))}
        </RadialGradient>
      </Defs>
      <Rect width={widthNum} height={heightNum} {...rectProps} fill={rectFill} />
    </Svg>
  );
};
