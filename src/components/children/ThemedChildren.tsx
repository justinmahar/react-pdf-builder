import React from 'react';
import { ThemedText } from '../basics/ThemedText';
import { Style } from '../Style';

export interface ThemedChildrenProps {
  children?: any;
  /** Styles used for themed text component when wrapping strings.  */
  textStyle?: Style;
  /** When `true`, strings will not be wrapped in a `ThemedText`. */
  allowStrings?: boolean;
}

/**
 * Ensures that raw strings are wrapped in a ThemedText component so they can be rendered by [react-pdf](https://react-pdf.org/).
 *
 * Recurses on arrays and React fragments.
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
