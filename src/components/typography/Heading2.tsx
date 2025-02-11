import { Text } from '@react-pdf/renderer';
import React from 'react';
import { Themes } from '../../themes/Themes';
import { HeadingProps } from './Heading';
import { Style } from '../Style';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export const Heading2 = ({ children, theme = Themes.default.build(), style, ...props }: HeadingProps) => {
  const mergedProps = {
    ...theme?.headingProps,
    ...theme?.heading2Props,
    ...props,
  };

  const mergedThemeStyles = {
    ...theme?.headingProps?.style,
    ...theme?.heading2Props?.style,
  };

  const styleOverride: Style = {};
  if (!mergedProps.rule) {
    styleOverride.borderBottom = 0;
  }
  if (mergedProps.swatch) {
    const swatchColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    styleOverride.color = swatchColor;
    styleOverride.borderColor = swatchColor;
  }

  return (
    <Text {...mergedProps} style={{ ...mergedThemeStyles, ...styleOverride, ...style }}>
      {children}
    </Text>
  );
};
