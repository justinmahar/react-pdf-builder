import React from 'react';
import { Theme } from '../theme/Theme';
import { Themes } from '../theme/themes/Themes';
import { Paragraph, ParagraphProps } from '../typography/Paragraph';

export interface PageNumberProps extends ParagraphProps {
  format?: string;
  theme?: Theme;
}

export const PageNumber = ({ theme = Themes.default.create(), style, ...props }: PageNumberProps) => {
  const mergedProps = { ...theme.pageNumberProps, ...props };
  const defaultFormat = '%n / %t';
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
      style={{ ...mergedProps.style, ...style }}
    />
  );
};
