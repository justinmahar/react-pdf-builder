import { Image, ImageProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { Themes } from '../../themes/Themes';

export interface ThemedImageProps {
  className?: string;
  theme?: Theme;
}

export const ThemedImage = ({ theme = Themes.default.build(), className, ...props }: ImageProps & ThemedImageProps) => {
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);
  return <Image {...props} style={{ ...classNameStyles, ...props.style }} />;
};
