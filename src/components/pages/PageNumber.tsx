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

export const PageNumber = ({
  theme = Themes.default.create(),
  offset = 0,
  format = '%n / %t',
  showAfter = 0,
  ...props
}: PageNumberProps) => {
  const themeProps = theme.pageNumberProps;
  return (
    <Paragraph
      render={({ pageNumber, totalPages }) => {
        const num = pageNumber + offset;
        if (num > showAfter) {
          return format
            .split('%n')
            .join(`${num}`)
            .split('%t')
            .join(`${totalPages + offset}`);
        } else {
          return '';
        }
      }}
      {...themeProps}
      {...props}
    />
  );
};
