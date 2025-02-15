import { ColorScheme, SwatchColors, GreyscaleColors, PaletteColors, ThemeColors } from '../ColorScheme';

const colors: PaletteColors = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
};

const greyscale: GreyscaleColors = {
  white: '#ffffff',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#000000',
};

const themeColors: ThemeColors = {
  primary: colors.blue,
  secondary: greyscale.gray600,
  success: colors.green,
  info: colors.cyan,
  warning: colors.yellow,
  danger: colors.red,
  light: greyscale.gray100,
  dark: greyscale.gray900,
};

const contrastColors: SwatchColors = {
  blue: greyscale.white,
  indigo: greyscale.white,
  purple: greyscale.white,
  pink: greyscale.white,
  red: greyscale.white,
  orange: greyscale.black,
  yellow: greyscale.black,
  green: greyscale.white,
  teal: greyscale.black,
  cyan: greyscale.black,
  white: greyscale.black,
  gray100: greyscale.black,
  gray200: greyscale.black,
  gray300: greyscale.black,
  gray400: greyscale.black,
  gray500: greyscale.black,
  gray600: greyscale.white,
  gray700: greyscale.white,
  gray800: greyscale.white,
  gray900: greyscale.white,
  black: greyscale.white,
  primary: greyscale.white,
  secondary: greyscale.white,
  success: greyscale.white,
  info: greyscale.black,
  warning: greyscale.black,
  danger: greyscale.white,
  light: greyscale.black,
  dark: greyscale.white,
};

/** Color scheme based on Bootstrap 5 colors. */
export const lightColorScheme: ColorScheme = {
  colors: colors,
  greyscale: greyscale,
  theme: themeColors,
  contrast: contrastColors,
};
