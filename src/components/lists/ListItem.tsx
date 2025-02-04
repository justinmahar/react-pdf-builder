import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Style } from '../Style';

export interface ListItemProps extends ViewProps {
  children?: any;
  theme?: Theme;
}

export const ListItem = ({ children, theme = Themes.default.create(), style, ...props }: ListItemProps) => {
  const mergedProps = {
    ...theme?.listItemProps,
    ...props,
  };

  const styleInnate: Style = {
    width: '100%',
  };

  return (
    <View {...mergedProps} style={{ ...styleInnate, ...mergedProps?.style, ...style }}>
      <PDFSafeChildren>{children}</PDFSafeChildren>
    </View>
  );
};
