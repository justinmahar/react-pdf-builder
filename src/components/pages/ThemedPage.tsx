import { Page, PageProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface ThemedPageProps extends PageProps {
  children?: any;
  theme?: Theme;
}

export const ThemedPage = ({ theme = Themes.default.create(), ...props }: ThemedPageProps) => {
  const themeProps = theme.pageProps ?? {};
  return (
    <Page {...themeProps} {...props} style={{ ...themeProps.style, ...props.style }}>
      <PDFSafeChildren>{props.children}</PDFSafeChildren>
    </Page>
  );
};
