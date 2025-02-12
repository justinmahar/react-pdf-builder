import React from 'react';
import { Style } from '../Style';
import { Theme } from '../../themes/Theme';
import { ThemeBuilder } from '../../themes/ThemeBuilder';
import { SwatchColor } from '../../themes/ColorScheme';
import { Themes } from '../../themes/Themes';
import { Paragraph, ParagraphProps } from '../typography/Paragraph';

export interface PageNumberProps extends ParagraphProps {
  className?: string;
  format?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const PageNumber = ({ theme = Themes.default.build(), className, style, ...props }: PageNumberProps) => {
  const themeProps = theme.pageNumberProps;
  const mergedProps = { ...themeProps, ...props };
  const defaultFormat = '%n / %t';

  const styleInnate: Style = {
    marginBottom: 0,
  };

  const styleOverride: Style = {};
  if (mergedProps.swatch) {
    styleOverride.color = ThemeBuilder.getSwatchColor(mergedProps.swatch, theme.colorScheme);
  }

  const themeClassName = themeProps.className;
  const themeClassNameStyles = ThemeBuilder.getStylesForClassName(themeClassName, theme.classNames);
  const classNameStyles = ThemeBuilder.getStylesForClassName(className, theme.classNames);

  return (
    <Paragraph
      theme={theme}
      render={({ pageNumber, totalPages, subPageNumber, subPageTotalPages }) => {
        const num = pageNumber;
        return (mergedProps.format ?? defaultFormat)
          .split('%n')
          .join(`${num}`)
          .split('%t')
          .join(`${totalPages}`)
          .split('%sn')
          .join(`${subPageNumber}`)
          .split('%st')
          .join(`${subPageTotalPages}`);
      }}
      {...mergedProps}
      style={{
        ...styleInnate,
        ...themeClassNameStyles,
        ...themeProps?.style,
        ...styleOverride,
        ...classNameStyles,
        ...style,
      }}
    />
  );
};
