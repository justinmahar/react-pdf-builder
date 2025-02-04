import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';

export interface TemplateProps extends ViewProps {
  children?: any;
  theme?: Theme;
}

export const Template = ({ children, theme = Themes.default.create(), style, ...props }: TemplateProps) => {
  const mergedProps = {
    ...theme?.cardProps,
    ...props,
  };
  return (
    <View {...mergedProps} style={{ ...mergedProps?.style, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
