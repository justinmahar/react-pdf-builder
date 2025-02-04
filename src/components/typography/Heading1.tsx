import { Text } from '@react-pdf/renderer';
import React from 'react';
import { Style } from '../Style';
import { Themes } from '../theme/themes/Themes';
import { HeadingProps } from './Heading';

export const Heading1 = ({ children, theme = Themes.default.create(), ...props }: HeadingProps) => {
  const mergedProps = {
    ...theme?.heading1Props,
    ...props,
  };

  const styleOverride: Style = {};
  if (!mergedProps.rule) {
    styleOverride.borderBottom = 0;
  }

  return (
    <Text {...mergedProps} style={{ ...mergedProps?.style, ...styleOverride, ...props.style }}>
      {children}
    </Text>
  );
};
