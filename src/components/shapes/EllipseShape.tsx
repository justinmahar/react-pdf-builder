import { Defs, Ellipse, EllipseProps, LinearGradient, RadialGradient, Stop, Svg } from '@react-pdf/renderer';
import React from 'react';
import { randomUuid } from '../util';
import { Gradients, GradientType } from './Gradients';
import { ShapeProps } from './ShapeProps';

export interface EllipseShapeProps extends ShapeProps {
  ellipseProps?: EllipseProps;
}

export const EllipseShape = ({
  width = 100,
  height = 100,
  fill,
  ellipseProps,
  linearGradientProps,
  radialGradientProps,
  gradient,
  gradientType = GradientType.topToBottom,
  ...svgProps
}: EllipseShapeProps) => {
  const uuidRef = React.useRef(randomUuid());
  const linearId = `linear-${uuidRef.current}`;
  const radialId = `radial-${uuidRef.current}`;
  const gradientStops = Gradients.normalizeGradientStops(gradient);
  const gradientCoords = Gradients.toGradientCoords(gradientType);
  const widthNum = parseInt(`${width}`);
  const heightNum = parseInt(`${height}`);
  const ellipseFill =
    ellipseProps?.fill ??
    fill ??
    (!gradient ? 'black' : gradientType === GradientType.radial ? `url('#${radialId}')` : `url('#${linearId}')`);
  return (
    <Svg
      viewBox={`0 0 ${widthNum} ${heightNum}`}
      {...svgProps}
      style={{ width: widthNum, height: heightNum, ...svgProps.style }}
    >
      <Defs>
        <LinearGradient id={linearId} {...gradientCoords} {...linearGradientProps}>
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
      <Ellipse
        cx={widthNum / 2}
        cy={heightNum / 2}
        rx={widthNum / 2}
        ry={heightNum / 2}
        {...ellipseProps}
        fill={ellipseFill}
      />
    </Svg>
  );
};
