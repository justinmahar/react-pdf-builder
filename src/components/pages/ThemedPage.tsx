import { Page, PageProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { SwatchColor } from '../../themes/ColorScheme';
import { Style } from '../Style';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export interface ThemedPageProps extends PageProps {
  children?: any;
  className?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const ThemedPage = ({
  children,
  theme = Themes.default.build(),
  className,
  style,
  ...props
}: ThemedPageProps) => {
  const themeProps = theme.pageProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.backgroundColor = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Page
      {...mergedProps}
      style={{ ...themeClassNameStyles, ...themeProps?.style, ...styleOverride, ...classNameStyles, ...style }}
    >
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Page>
  );
};
