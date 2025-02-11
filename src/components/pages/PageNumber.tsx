import React from 'react';
import { Style } from '../Style';
import { Theme } from '../theme/Theme';
import { ThemeBuilder } from '../theme/ThemeBuilder';
import { SwatchColor } from '../theme/ColorScheme';
import { Themes } from '../theme/themes/Themes';
import { Paragraph, ParagraphProps } from '../typography/Paragraph';

export interface PageNumberProps extends ParagraphProps {
  format?: string;
  swatch?: SwatchColor;
  theme?: Theme;
}

export const PageNumber = ({ theme = Themes.default.build(), style, ...props }: PageNumberProps) => {
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
      style={{ ...styleInnate, ...themeProps?.style, ...styleOverride, ...style }}
    />
  );
};
