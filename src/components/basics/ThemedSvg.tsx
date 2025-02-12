import { Svg, SVGProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';

export interface ThemedSvgProps extends React.PropsWithChildren<SVGProps> {
  children?: any;
  className?: string;
  theme?: Theme;
}

export const ThemedSvg = ({ children, theme = Themes.default.build(), className, style, ...props }: ThemedSvgProps) => {
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return (
    <Svg {...props} style={{ ...classNameStyles, ...style }}>
      {children}
    </Svg>
  );
};
