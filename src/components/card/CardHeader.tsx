import React from 'react';
import { Box, BoxProps } from '../layout/Box';
import { Style } from '../Style';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { Heading5 } from '../typography/Heading5';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import Color from 'color';

export interface CardHeaderProps extends BoxProps {
  children?: any;
  className?: string;
  as?: any;
  noBody?: boolean;
  withHeader?: boolean;
  swatch?: SwatchColor;
  swatchOpacity?: number;
  theme?: Theme;
}

export const CardHeader = ({
  children,
  theme = Themes.default.build(),
  className,
  style,
  ...props
}: CardHeaderProps) => {
  const themeProps = theme?.cardHeaderProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const AsComponent = mergedProps.as ?? Heading5;
  let child = children;
  if (typeof child === 'string') {
    child = (
      <AsComponent theme={theme} style={{ marginBottom: 0 }}>
        {child}
      </AsComponent>
    );
  }

  const styleInnate: Style = {
    overflow: 'hidden',
  };

  const styleOverride: Style = {};
  if (!mergedProps.noBody) {
    styleOverride.borderBottomLeftRadius = 0;
    styleOverride.borderBottomRightRadius = 0;
  }
  if (mergedProps.withHeader) {
    styleOverride.borderTopLeftRadius = 0;
    styleOverride.borderTopRightRadius = 0;
  }
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    const contrastColor = ThemeBuilder.getContrastColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.color = contrastColor;
    styleOverride.borderColor = swatchColor;
    const swatchOpacity = mergedProps.swatchOpacity ?? 1;
    const swatchOpacityHex = ThemeBuilder.decimalToHex(swatchOpacity);
    styleOverride.backgroundColor = `${new Color(swatchColor ?? '#888').hex()}${swatchOpacityHex}`; // Add opacity to the end
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Box
      wrap={false}
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...themeProps?.style,
        ...styleOverride,
        ...classNameStyles,
        ...style,
      }}
    >
      {child}
    </Box>
  );
};
