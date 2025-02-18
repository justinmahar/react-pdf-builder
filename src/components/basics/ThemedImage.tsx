import { Image, ImageProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedImageProps {
  /** Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes. */
  className?: string;
}

/**
 * Read the [full documentation for ThemedImage](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-themedimage--docs)
 */
export const ThemedImage = ({ className, style, ...props }: ImageProps & ThemedImageProps) => {
  const theme = usePDFThemeContext();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return <Image {...props} style={{ ...classNameStyles, ...style }} />;
};
