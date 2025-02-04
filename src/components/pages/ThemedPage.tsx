import { Page, PageProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface ThemedPageProps extends PageProps {
  children?: any;
  theme?: Theme;
}

export const ThemedPage = ({ children, theme = Themes.default.create(), style, ...props }: ThemedPageProps) => {
  const mergedProps = {
    ...theme.pageProps,
    ...props,
  };
  return (
    <Page {...mergedProps} style={{ ...mergedProps.style, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </Page>
  );
};
