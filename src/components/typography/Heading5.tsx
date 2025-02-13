import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { ThemedText } from '../basics/ThemedText';
import { Style } from '../Style';
import { HeadingProps } from './Heading';
import { ThemedChildren } from '../children/ThemedChildren';

export const Heading5 = ({ children, theme, className, style, ...props }: HeadingProps) => {
  theme = theme ?? Themes.default.build();
  const mergedProps = {
    ...theme?.headingProps,
    ...theme?.heading5Props,
    ...props,
  };

  const mergedThemeStyles = {
    ...theme?.headingProps?.style,
    ...theme?.heading5Props?.style,
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

  const themeClassName = `${theme?.headingProps.className ?? ''} ${theme?.heading5Props.className ?? ''}`.trim();
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <ThemedText
      theme={theme}
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...mergedThemeStyles, ...styleOverride, ...classNameStyles, ...style }}
    >
      <ThemedChildren theme={theme} allowStrings>
        {children}
      </ThemedChildren>
    </ThemedText>
  );
};
