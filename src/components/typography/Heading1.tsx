import { Text } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { Themes } from '../theme/themes/Themes';
import { HeadingProps } from './Heading';

export const Heading1 = ({ children, theme = Themes.default.create(), style, ...props }: HeadingProps) => {
  const mergedProps = {
    ...theme?.headingProps,
    ...theme?.heading1Props,
    ...props,
  };

  const mergedThemeStyles = {
    ...theme?.headingProps?.style,
    ...theme?.heading1Props?.style,
  };

  const styleOverride: Style = {};
  if (!mergedProps.rule) {
    styleOverride.borderBottom = 0;
  }

  return (
    <Text {...mergedProps} style={{ ...mergedThemeStyles, ...styleOverride, ...style }}>
      {children}
    </Text>
  );
};
