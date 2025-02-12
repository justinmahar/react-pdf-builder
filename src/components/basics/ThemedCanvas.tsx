import { Canvas, CanvasProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';

export interface ThemedCanvasProps extends CanvasProps {
  className?: string;
  theme?: Theme;
}

export const ThemedCanvas = ({ theme = Themes.default.build(), className, ...props }: ThemedCanvasProps) => {
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return <Canvas {...props} style={{ ...classNameStyles, ...props.style }} />;
};
