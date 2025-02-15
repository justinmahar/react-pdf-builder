import { Svg, SVGProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedSvgProps extends React.PropsWithChildren<SVGProps> {
  children?: any;
  className?: string;
}

export const ThemedSvg = ({ children, className, style, ...props }: ThemedSvgProps) => {
  const theme = usePDFThemeContext();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <Svg {...props} style={{ ...classNameStyles, ...style }}>
      {children}
    </Svg>
  );
};
