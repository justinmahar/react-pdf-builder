import React from 'react';
import { Theme } from '../../themes/Theme';
import { Themes } from '../../themes/Themes';
import { ThemedText } from '../basics/ThemedText';
import { Style } from '../Style';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedChildrenProps {
  children?: any;
  textStyle?: Style;
  allowStrings?: boolean;
}

/**
 * Ensures that raw strings are wrapped in a ThemedText component so they can be rendered by React-PDF.
 */
export const ThemedChildren = ({ children, textStyle, allowStrings }: ThemedChildrenProps) => {
  return getThemedChildren(children, textStyle, allowStrings);
};

export const getThemedChildren = (children?: any, textStyle?: Style, allowStrings?: boolean) => {
  const originalChildArray = Array.isArray(children) ? children : typeof children !== 'undefined' ? [children] : [];
  const modifiedChildArray = originalChildArray.map((c, i) => {
    if (typeof c === 'string') {
      if (!allowStrings) {
        return (
          <ThemedText key={`child-ThemedText-${i}`} style={textStyle}>
            {c}
          </ThemedText>
        );
      } else {
        return c;
      }
    } else if (Array.isArray(c)) {
      return <ThemedChildren key={`child-array-${i}`}>{c}</ThemedChildren>;
    } else if (c && typeof c === 'object' && c !== null && c?.hasOwnProperty('type')) {
      if (c.type === React.Fragment) {
        return <ThemedChildren key={`child-fragment-${i}`}>{c.props.children}</ThemedChildren>;
      }
      return c;
    } else {
      return c;
    }
  });
  return modifiedChildArray;
};
