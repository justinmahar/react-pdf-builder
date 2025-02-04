import { TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Paragraph } from '../typography/Paragraph';

export interface PageNumberProps extends TextProps {
  offset?: number;
  format?: string;
  showAfter?: number;
  theme?: Theme;
}

export const PageNumber = ({ theme = Themes.default.create(), style, ...props }: PageNumberProps) => {
  const mergedProps = { ...theme.pageNumberProps, ...props };
  const defaultFormat = '%n / %t';
  return (
    <Paragraph
      render={({ pageNumber, totalPages }) => {
        const num = pageNumber + (mergedProps.offset ?? 0);
        if (num > (mergedProps.showAfter ?? 0)) {
          return (mergedProps.format ?? defaultFormat)
            .split('%n')
            .join(`${num}`)
            .split('%t')
            .join(`${totalPages + (mergedProps.offset ?? 0)}`);
        } else {
          return '';
        }
      }}
      {...mergedProps}
      style={{ ...mergedProps.style, ...style }}
    />
  );
};
