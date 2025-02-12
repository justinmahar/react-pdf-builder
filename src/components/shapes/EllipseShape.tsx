import { Defs, Ellipse, EllipseProps, LinearGradient, RadialGradient, Stop, Svg } from '@react-pdf/renderer';
import React from 'react';
import { randomUuid } from '../../util/util';
import { Gradients, GradientType } from './Gradients';
import { ShapeProps } from './ShapeProps';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';

export interface EllipseShapeProps extends ShapeProps {
  ellipseProps?: Partial<EllipseProps>;
  className?: string;
  theme?: Theme;
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
  linearGradientCoords: linearGradientCoordsProps,
  radialGradientCoords: radialGradientCoordsProps,
  theme = Themes.default.build(),
  className,
  ...svgProps
}: EllipseShapeProps) => {
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
  const strokeWidthNum = parseFloat(`${ellipseProps?.strokeWidth ?? 0}`);
  const ellipseFill =
    ellipseProps?.fill ??
    fill ??
    (!gradient ? 'black' : gradientType === GradientType.radial ? `url('#${radialId}')` : `url('#${linearId}')`);

  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Svg
      viewBox={`0 0 ${widthNum} ${heightNum}`}
      {...svgProps}
      style={{ width: widthNum, height: heightNum, ...classNameStyles, ...svgProps.style }}
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
      <Ellipse
        cx={widthNum / 2}
        cy={heightNum / 2}
        rx={(widthNum - strokeWidthNum) / 2}
        ry={(heightNum - strokeWidthNum) / 2}
        {...ellipseProps}
        fill={ellipseFill}
      />
    </Svg>
  );
};
