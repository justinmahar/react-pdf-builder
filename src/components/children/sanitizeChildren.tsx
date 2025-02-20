import React from 'react';
import { ThemedText } from '../basics/ThemedText';
import { Style } from '../Style';

/**
 * Ensures that raw strings are wrapped in a ThemedText component so they can be rendered by [react-pdf](https://react-pdf.org/).
 *
 * Recurses on arrays and React fragments. Returns all other elements as-is.
 *
 * @param children Children to check/return.
 * @param textStyle Styles used for themed text component when wrapping strings.
 * @param allowStrings When `true`, strings will not be wrapped in a `ThemedText`.
 * @returns Sanitized children. Strings will be wrapped in ThemedText (if strings are not allowed).
 */
export const sanitizeChildren = (children?: any, textStyle?: Style, allowStrings?: boolean): any => {
  if (typeof children === 'string') {
    if (!allowStrings) {
      return (
        <ThemedText key={`child-ThemedText`} style={textStyle}>
          {children}
        </ThemedText>
      );
    } else {
      return children;
    }
  } else if (children && typeof children === 'object' && children !== null && children?.hasOwnProperty('type')) {
    if (children.type === React.Fragment) {
      return <React.Fragment>{sanitizeChildren(children.props.children)}</React.Fragment>;
    }
    return children;
  } else if (Array.isArray(children) && children.map) {
    return children.map((c): any => {
      return sanitizeChildren(c, textStyle, allowStrings);
    });
  }
  return children;
};
