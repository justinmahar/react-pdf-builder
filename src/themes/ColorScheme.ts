import { DeepPartial } from '../util/util';

export interface PaletteColors {
  blue: string;
  indigo: string;
  purple: string;
  pink: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  teal: string;
  cyan: string;
}

export interface GreyscaleColors {
  white: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  black: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;
}

export type SwatchColors = {
  [K in keyof PaletteColors | keyof GreyscaleColors | keyof ThemeColors]: string;
};

export type SwatchColor = keyof SwatchColors;

export interface ColorScheme {
  colors: PaletteColors;
  greyscale: GreyscaleColors;
  theme: ThemeColors;
  contrast: SwatchColors;
}

export type PartialColorScheme = DeepPartial<ColorScheme>;
