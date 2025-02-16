import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { Div, DivProps } from '../basics/Div';
import { ThemedChildren } from '../children/ThemedChildren';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';
import { ListItemContainer, ListItemContainerProps } from './ListItemContainer';
import { romanize } from 'romans';
import { NumberToAlphabet } from 'number-to-alphabet';

const toRoman = (num: number) => {
  try {
    return romanize(num);
  } catch (e) {}
  return `${num}`;
};

const toAlpha = (num: number) => {
  try {
    const numToAlpha = new NumberToAlphabet();
    return numToAlpha.numberToString(num);
  } catch (e) {}
  return `${num}`;
};

const romanUpperNumberRenderer = (num: number) => {
  return toRoman(num).toUpperCase() + '.';
};

const romanLowerNumberRenderer = (num: number) => {
  return toRoman(num).toLowerCase() + '.';
};

const alphaUpperNumberRenderer = (num: number) => {
  return toAlpha(num).toUpperCase() + '.';
};

const alphaLowerNumberRenderer = (num: number) => {
  return toAlpha(num).toLowerCase() + '.';
};

export interface OrderedListProps extends DivProps {
  wrapItems?: boolean;
  markerStyle?: Style;
  markerSwatch?: SwatchColor;
  containerProps?: ListItemContainerProps;
  romanUpper?: boolean;
  romanLower?: boolean;
  alphaUpper?: boolean;
  alphaLower?: boolean;
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

  if (mergedProps.romanUpper) {
    mergedProps.numberRenderer = romanUpperNumberRenderer;
  } else if (mergedProps.romanLower) {
    mergedProps.numberRenderer = romanLowerNumberRenderer;
  } else if (mergedProps.alphaUpper) {
    mergedProps.numberRenderer = alphaUpperNumberRenderer;
  } else if (mergedProps.alphaLower) {
    mergedProps.numberRenderer = alphaLowerNumberRenderer;
  }

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
