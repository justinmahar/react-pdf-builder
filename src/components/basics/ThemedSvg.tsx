import { Svg, SVGProps } from '@react-pdf/renderer';
import React from 'react';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { usePDFThemeContext } from '../theme/PDFThemeProvider';

export interface ThemedSvgProps extends React.PropsWithChildren<SVGProps> {
  children?: any;
  /** Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes. */
  className?: string;
}

/**
 * Read the [docs](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-basics-themedsvg--docs)
 */
export const ThemedSvg = ({ children, className, style, ...props }: ThemedSvgProps) => {
  const theme = usePDFThemeContext();
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <Svg {...props} style={{ ...classNameStyles, ...style }}>
      {children}
    </Svg>
  );
};
