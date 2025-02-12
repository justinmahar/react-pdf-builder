import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ListItemContainer, ListItemContainerProps } from './ListItemContainer';
import { Style } from '../Style';
import { PDFSafeChildren } from '../builder/PDFSafeChildren';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';

export interface OrderedListProps extends ViewProps {
  children?: any;
  className?: string;
  wrapItems?: boolean;
  markerStyle?: Style;
  markerSwatch?: SwatchColor;
  containerProps?: ListItemContainerProps;
  numberRenderer?: (num: number) => string;
  unstyled?: boolean;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const OrderedList = ({
  children,
  theme = Themes.default.build(),
  className,
  style,
  ...props
}: OrderedListProps) => {
  const themeProps = theme.orderedListProps;
  const mergedProps = {
    ...themeProps,
    ...props,
  };

  const mergedWrapperProps = {
    ...theme.listItemContainerProps,
    ...props.containerProps,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  const childArray = Array.isArray(children) ? children : typeof children !== 'undefined' ? [children] : [];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemContainer
      key={'ol-li-' + i}
      theme={theme}
      wrap={!!mergedProps.wrapItems}
      markerStyle={mergedProps.markerStyle}
      markerSwatch={mergedProps.markerSwatch}
      numberRenderer={mergedProps.numberRenderer}
      unstyled={mergedProps.unstyled}
      {...mergedWrapperProps}
      num={i + 1}
    >
      <PDFSafeChildren>{c}</PDFSafeChildren>
    </ListItemContainer>
  ));

  const styleInnate: Style = {
    display: 'flex',
    flexDirection: 'column',
  };

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <View
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...themeProps?.style,
        ...styleOverride,
        ...classNameStyles,
        ...style,
      }}
    >
      {liElements}
    </View>
  );
};
