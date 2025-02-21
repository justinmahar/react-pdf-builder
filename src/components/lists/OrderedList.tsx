import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { Div, DivProps } from '../basics/Div';
import { sanitizeChildren } from '../children/sanitizeChildren';
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
  /** Optional. Styles to apply to the marker (container for numbers). For example, you may want to specify a `minWidth` to align list items vertically. */
  markerStyle?: Style;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  markerSwatch?: SwatchColor;
  /** Optional. Props for the list item container. This contains both the marker and the list item, and provides default spacing via the `columnGap` and `marginBottom` styles. Specify a `columnGap` style here to change the distance between the numbers and list items. */
  containerProps?: ListItemContainerProps;
  /** Optional. When `true`, numbers are displayed as uppercase Roman numerals, such as `I.` `II.` `III.` `IV.` */
  romanUpper?: boolean;
  /** Optional. When `true`, numbers are displayed as lowercase Roman numerals, such as `i.` `ii.` `iii.` `iv.` */
  romanLower?: boolean;
  /** Optional. When `true`, numbers are displayed as uppercase alphabet letters, such as `A.` `B.` `C.` `D.` */
  alphaUpper?: boolean;
  /** Optional. When `true`, numbers are displayed as lowercase alphabet letters, such as `a.` `b.` `c.` `d.` */
  alphaLower?: boolean;
  /** Optional. A function that renders numbers in a custom way. */
  numberRenderer?: (num: number) => string;
  /** Optional. When `true`, react-pdf may break up your list item and wrap it to the next page. Not recommended. */
  wrapItems?: boolean;
  /** Optional. When `true`, markers are not rendered, so only the list items themselves are shown. */
  unstyled?: boolean;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
}

/**
 * Read the [full documentation for OrderedList](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-lists-orderedlist--docs)
 */
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

  const childArray = childrenAsArray(children);

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
      {sanitizeChildren(c)}
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

export const childrenAsArray = (children: any): any[] => {
  if (Array.isArray(children)) {
    return children;
  } else if (
    children &&
    typeof children === 'object' &&
    children !== null &&
    children?.hasOwnProperty('type') &&
    children.type === React.Fragment
  ) {
    return childrenAsArray(children.props.children);
  } else if (typeof children === 'undefined') {
    return [];
  } else {
    return [children];
  }
};
