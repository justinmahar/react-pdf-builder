import { Text, TextProps } from '@react-pdf/renderer';
import React from 'react';

export interface PageNumberProps extends TextProps {
  offset?: number;
  format?: string;
  showAfter?: number;
}

export const PageNumber = ({ offset = 0, format = '%n / %t', showAfter = 0, ...props }: PageNumberProps) => {
  return (
    <Text
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
      {...props}
    />
  );
};
