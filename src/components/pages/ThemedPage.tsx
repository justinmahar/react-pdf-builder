import { Page, PageProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { SwatchColor } from '../theme/themes/ColorScheme';
import { Style } from '../Style';
import { ThemeBuilder } from '../theme/ThemeBuilder';

export interface ThemedPageProps extends PageProps {
  children?: any;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const ThemedPage = ({ children, theme = Themes.default.build(), style, ...props }: ThemedPageProps) => {
  const mergedProps = {
    ...theme.pageProps,
    ...props,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.backgroundColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
    // styleOverride.color = ThemeBuilder.getContrastColor(mergedProps.swatch, theme.colorScheme);
  }

  return (
    <Page {...mergedProps} style={{ ...mergedProps.style, ...styleOverride, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Page>
  );
};
