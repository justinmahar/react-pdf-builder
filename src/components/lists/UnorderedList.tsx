import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ListItemWrapper, ListItemWrapperProps } from './ListItemWrapper';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';

export interface UnorderedListProps extends ViewProps {
  children?: any;
  wrapItems?: boolean;
  markerStyle?: Style;
  wrapperProps?: ListItemWrapperProps;
  bullet?: string;
  theme?: Theme;
}

export const UnorderedList = ({
  theme = Themes.default.create(),
  children,
  wrapItems = false,
  markerStyle,
  wrapperProps,
  bullet,
  ...props
}: UnorderedListProps) => {
  const themeProps = theme.unorderedListProps;
  const childArray = Array.isArray(children) ? children : [children];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemWrapper bullet={bullet} markerStyle={markerStyle} wrap={wrapItems} key={'ul-li-' + i} {...wrapperProps}>
      <PDFSafeChildren>{c}</PDFSafeChildren>
    </ListItemWrapper>
  ));

  const styleInnate: Style = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <View {...themeProps} {...props} style={{ ...styleInnate, ...themeProps?.style, ...props.style }}>
      {liElements}
    </View>
  );
};
