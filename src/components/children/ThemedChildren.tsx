import React from 'react';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { ThemedText } from '../basics/ThemedText';
import { Style } from '../Style';

export interface ThemedChildrenProps {
  children?: any;
  theme?: Theme;
  textStyle?: Style;
  allowStrings?: boolean;
}

/**
 * Injects children with the theme prop, and ensures that strings are wrapped in a ThemedText component.
 */
export const ThemedChildren = ({ children, theme, textStyle, allowStrings }: ThemedChildrenProps) => {
  theme = theme ?? Themes.default.build();
  return getThemedChildren(children, theme, textStyle, allowStrings);
};

export const getThemedChildren = (children?: any, theme?: Theme, textStyle?: Style, allowStrings?: boolean) => {
  const originalChildArray = Array.isArray(children) ? children : typeof children !== 'undefined' ? [children] : [];
  const injectedChildArray = originalChildArray.map((c, i, arr) => {
    if (typeof c === 'string') {
      if (!allowStrings) {
        return (
          <ThemedText theme={theme} key={`child-ThemedText-${i}`} style={textStyle}>
            {c}
          </ThemedText>
        );
      } else {
        return c;
      }
    } else if (Array.isArray(c)) {
      return (
        <ThemedChildren key={`child-array-${i}`} theme={theme}>
          {c}
        </ThemedChildren>
      );
    } else if (c && typeof c === 'object' && c !== null && c?.hasOwnProperty('type')) {
      if (c.type === React.Fragment) {
        return <ThemedChildren key={`child-fragment-${i}`}>{c.props.children}</ThemedChildren>;
      } else {
        const name = c.type?.displayName || c.type?.name || (typeof c.type === 'string' && c.type ? c.type : 'Unknown');
        return React.cloneElement(c, {
          key: `child-${name}-${i}`,
          theme,
          ...c.props,
        });
      }
    } else {
      return c;
    }
  });
  return injectedChildArray;
};
