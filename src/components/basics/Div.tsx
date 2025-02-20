import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { sanitizeChildren } from '../children/sanitizeChildren';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface DivProps extends ViewProps {
  children?: any;
  /** Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes. */
  className?: string;
}

/**
 * Read the [full documentation for Div](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-div--docs)
 */
export const Div = ({ children, className, style, ...props }: DivProps) => {
  const theme = usePDFThemeContext();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <View {...props} style={{ ...classNameStyles, ...style }}>
      {sanitizeChildren(children)}
    </View>
  );
};
