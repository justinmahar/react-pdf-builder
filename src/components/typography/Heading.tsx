import { TextProps } from '@react-pdf/renderer';

export const headingStartSize = 20;
export const headingStepSize = 4;

export interface HeadingProps extends TextProps {
  children?: any;
  rule?: boolean;
}
