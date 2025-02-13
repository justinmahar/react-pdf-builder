import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { PageSizeString } from '../pages/PageSizes';
import { GradientStop, GradientType } from '../shapes/Gradients';
import { RectangleShape } from '../shapes/RectangleShape';
import { Backdrops } from './Backdrops';
import { Theme } from '../../themes/Theme';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import Color from 'color';

export interface GradientBackdropProps extends BoxProps {
  children?: any;
  className?: string;
  size: PageSizeString | { width: number; height: number };
  orientation?: 'portrait' | 'landscape';
  gradient?: string[] | GradientStop[];
  gradientType?: GradientType;
  swatch?: SwatchColor;
  darken?: boolean;
  /** How much to darken each gradient color from 0 to 1, as an array. */
  darkenAmounts?: number[];
  lighten?: boolean;
  /** How much to lighten each gradient color from 0 to 1, as an array. */
  lightenAmounts?: number[];
  whiten?: boolean;
  /** How much to whiten each gradient color from 0 to 1, as an array. */
  whitenAmounts?: number[];
  blacken?: boolean;
  /** How much to blacken each gradient color from 0 to 1, as an array. */
  blackenAmounts?: number[];
  saturate?: boolean;
  /** How much to saturate each gradient color from 0 to 1, as an array. */
  saturateAmounts?: number[];
  desaturate?: boolean;
  /** How much to desaturate each gradient color from 0 to 1, as an array. */
  desaturateAmounts?: number[];
  theme?: Theme;
}

export const GradientBackdrop = ({
  children,
  size,
  orientation,
  gradient,
  gradientType = GradientType.topLeftToBottomRight,
  swatch = 'primary',
  darken = false,
  darkenAmounts = [0, 0.5],
  lighten = false,
  lightenAmounts = [0, 0.5],
  saturate = false,
  saturateAmounts = [0, 1],
  desaturate = false,
  desaturateAmounts = [0, 1],
  theme,
  className,
  style,
  ...props
}: GradientBackdropProps) => {
  theme = theme ?? Themes.default.build();
  const d = Backdrops.getDimensions(size, orientation);
  const width = d.width;
  const height = d.height;
  if (!gradient) {
    const swatchColor = ThemeBuilder.getSwatchColor(swatch, theme.colorScheme);
    gradient = [`${swatchColor}`, `${swatchColor}`];
  }

  const transformGradient = (
    g: string[] | GradientStop[],
    transform: (color: string, i: number) => string,
  ): string[] | GradientStop[] => {
    if (g.length > 0) {
      if (typeof g[0] === 'string') {
        return g.map((c: string | GradientStop, i): string => transform(`${c}`, i));
      } else {
        return g.map((s: string | GradientStop, i): GradientStop => {
          const gs = s as GradientStop;
          return {
            ...gs,
            stopColor: transform(gs.stopColor, i),
          };
        });
      }
    } else {
      return g;
    }
  };
  if (darken) {
    gradient = transformGradient(gradient, (c, i) => new Color(c).darken(darkenAmounts[i] ?? 0).hex());
  }
  if (lighten) {
    gradient = transformGradient(gradient, (c, i) => new Color(c).lighten(lightenAmounts[i] ?? 0).hex());
  }
  if (saturate) {
    gradient = transformGradient(gradient, (c, i) => new Color(c).saturate(saturateAmounts[i] ?? 0).hex());
  }
  if (desaturate) {
    gradient = transformGradient(gradient, (c, i) => new Color(c).desaturate(desaturateAmounts[i] ?? 0).hex());
  }

  // Inject rows with props from Table, as well as the row index and count
  const originalChildArray = Array.isArray(children) ? children : typeof children !== 'undefined' ? [children] : [];
  const injectedChildArray = originalChildArray.map((c, i, arr) => {
    return React.cloneElement(c, {
      key: `gradient-child-` + i,
      theme,
      width,
      height,
      ...c.props,
      style: { position: 'absolute', ...c.props?.style },
    });
  });

  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Box
      theme={theme}
      fixed
      {...props}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, ...classNameStyles, ...style }}
    >
      <RectangleShape theme={theme} width={width} height={height} gradient={gradient} gradientType={gradientType} />
      {injectedChildArray}
    </Box>
  );
};
