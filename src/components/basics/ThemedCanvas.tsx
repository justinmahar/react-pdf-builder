import { Canvas, CanvasProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedCanvasProps extends CanvasProps {
  className?: string;
}

export const ThemedCanvas = ({ className, style, ...props }: ThemedCanvasProps) => {
  const theme = usePDFThemeContext();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return <Canvas {...props} style={{ ...classNameStyles, ...style }} />;
};
