import { Image, ImageProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedImageProps {
  className?: string;
}

export const ThemedImage = ({ className, style, ...props }: ImageProps & ThemedImageProps) => {
  const theme = usePDFThemeContext();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return <Image {...props} style={{ ...classNameStyles, ...style }} />;
};
