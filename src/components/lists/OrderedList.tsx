import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { Div } from '../basics/Div';
import { ThemedChildren } from '../children/ThemedChildren';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';
import { ListItemContainer, ListItemContainerProps } from './ListItemContainer';

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
}

export const OrderedList = ({ children, className, style, ...props }: OrderedListProps) => {
  const theme = usePDFThemeContext();
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
      wrap={!!mergedProps.wrapItems}
      markerStyle={mergedProps.markerStyle}
      markerSwatch={mergedProps.markerSwatch}
      numberRenderer={mergedProps.numberRenderer}
      unstyled={mergedProps.unstyled}
      {...mergedWrapperProps}
      num={i + 1}
    >
      <ThemedChildren>{c}</ThemedChildren>
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
    <Div
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
    </Div>
  );
};
