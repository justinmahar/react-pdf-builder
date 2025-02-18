import { Defs, LinearGradient, RadialGradient, Rect, RectProps, Stop, Svg } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { randomUuid } from '../../util/util';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';
import { Gradients, GradientType } from './Gradients';
import { ShapeProps } from './ShapeProps';

export interface RectangleShapeProps extends ShapeProps {
  /** Optional. Props for the underlying SVG [Rect](https://react-pdf.org/svg#rect). Specify a stroke here, such as `{ stroke: 'darkblue', strokeWidth: 10 }`. */
  rectProps?: Partial<RectProps>;
}

/**
 * Read the [full documentation for RectangleShape](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-shapes-rectangleshape--docs)
 */
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
  className,
  ...svgProps
}: RectangleShapeProps) => {
  const theme = usePDFThemeContext();
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
      <Rect width={widthNum} height={heightNum} {...rectProps} fill={rectFill} />
    </Svg>
  );
};
