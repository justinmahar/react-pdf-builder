import { TextProps } from '@react-pdf/renderer';
import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Paragraph } from '../typography/Paragraph';

export interface PageNumberProps extends TextProps {
  format?: string;
  showAfter?: number;
  theme?: Theme;
}

export const PageNumber = ({ theme = Themes.default.create(), style, ...props }: PageNumberProps) => {
  const mergedProps = { ...theme.pageNumberProps, ...props };
  const defaultFormat = '%n / %t';
  return (
    <Paragraph
      render={({ pageNumber, totalPages, subPageNumber, subPageTotalPages }) => {
        const num = pageNumber;
        if (num > (mergedProps.showAfter ?? 0)) {
          return (mergedProps.format ?? defaultFormat)
            .split('%n')
            .join(`${num}`)
            .split('%t')
            .join(`${totalPages}`)
            .split('%sn')
            .join(`${subPageNumber}`)
            .split('%st')
            .join(`${subPageTotalPages}`);
        } else {
          return '';
        }
      }}
      {...mergedProps}
      style={{ ...mergedProps.style, ...style }}
    />
  );
};
