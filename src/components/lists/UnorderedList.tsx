import { ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { SwatchColor } from '../../themes/ColorScheme';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';
import { Style } from '../Style';
import { Div } from '../basics/ThemedView';
import { ThemedChildren } from '../children/ThemedChildren';
import { ListItemContainer, ListItemContainerProps } from './ListItemContainer';

export interface UnorderedListProps extends ViewProps {
  children?: any;
  className?: string;
  wrapItems?: boolean;
  markerStyle?: Style;
  markerSwatch?: SwatchColor;
  containerProps?: ListItemContainerProps;
  bullet?: string;
  unstyled?: boolean;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const UnorderedList = ({ theme, children, className, style, ...props }: UnorderedListProps) => {
  theme = theme ?? Themes.default.build();
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

  const childArray = Array.isArray(children) ? children : typeof children !== 'undefined' ? [children] : [];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemContainer
      key={'ul-li-' + i}
      theme={theme}
      wrap={!!mergedProps.wrapItems}
      markerStyle={mergedProps.markerStyle}
      markerSwatch={mergedProps.markerSwatch}
      bullet={mergedProps.bullet}
      unstyled={mergedProps.unstyled}
      {...mergedWrapperProps}
    >
      <ThemedChildren theme={theme}>{c}</ThemedChildren>
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
