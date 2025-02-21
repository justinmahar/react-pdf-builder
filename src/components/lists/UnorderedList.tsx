import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Style } from '../Style';
import { Div, DivProps } from '../basics/Div';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';
import { ListItemContainer, ListItemContainerProps } from './ListItemContainer';
import { childrenAsArray } from './OrderedList';

export interface UnorderedListProps extends DivProps {
  /** Optional. Styles to apply to the marker (container for bullets). */
  markerStyle?: Style;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  markerSwatch?: SwatchColor;
  /** Optional. Props for the list item container. This contains both the marker and the list item, and provides default spacing via the `columnGap` and `marginBottom` styles. Specify a `columnGap` style here to change the distance between the bullets and list items. */
  containerProps?: ListItemContainerProps;
  /** Optional. Custom bullet character. Default is `•`. You may need to [register a custom font](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs#using-custom-fonts) that supports your desired character. */
  bullet?: string;
  /** Optional. When `true`, react-pdf may break up your list item and wrap it to the next page. Not recommended. */
  wrapItems?: boolean;
  /** Optional. When `true`, markers are not rendered, so only the list items themselves are shown. */
  unstyled?: boolean;
  /** Optional. One of the [swatch color names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors) from the theme, as a string. */
  swatch?: SwatchColor;
}

/**
 * Read the [full documentation for UnorderedList](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-lists-unorderedlist--docs)
 */
export const UnorderedList = ({ children, className, style, ...props }: UnorderedListProps) => {
  const theme = usePDFThemeContext();
  const themeProps = theme.unorderedListProps;
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

  const childArray = childrenAsArray(children);

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemContainer
      key={'ul-li-' + i}
      wrap={!!mergedProps.wrapItems}
      markerStyle={mergedProps.markerStyle}
      markerSwatch={mergedProps.markerSwatch}
      bullet={mergedProps.bullet}
      unstyled={mergedProps.unstyled}
      {...mergedWrapperProps}
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
