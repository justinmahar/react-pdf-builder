import { DeepPartial } from '../../util';

interface ColorScheme {
  textColors: {
    primary: string;
    secondary: string;
    success: string;
  };
  bgColors: {
    primary: string;
    secondary: string;
    success: string;
  };
}

export type PartialColorScheme = DeepPartial<ColorScheme>;
