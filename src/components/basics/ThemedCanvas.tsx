import { Canvas, CanvasProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedCanvasProps extends CanvasProps {
  /** Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes. */
  className?: string;
}

/**
 * Read the [docs](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-themedcanvas--docs)
 */
export const ThemedCanvas = ({ className, style, ...props }: ThemedCanvasProps) => {
  const theme = usePDFThemeContext();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return <Canvas {...props} style={{ ...classNameStyles, ...style }} />;
};
