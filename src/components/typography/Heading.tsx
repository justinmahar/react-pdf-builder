import { ThemedTextProps } from '../basics/ThemedText';

export interface HeadingProps extends ThemedTextProps {
  /** Optional. When `true`, a bottom border will be displayed under the heading text. Default `undefined`. */
  rule?: boolean;
}
