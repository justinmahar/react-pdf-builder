import { ThemeBuilder } from '../ThemeBuilder';
import { ColorScheme, GreyscaleColors, PaletteColors, SwatchColors, ThemeColors } from '../ColorScheme';
import { lightColorScheme } from '../light/LightColorScheme';

const colors: PaletteColors = {
  blue: ThemeBuilder.darken(lightColorScheme.colors.blue, 0.2),
  indigo: ThemeBuilder.darken(lightColorScheme.colors.indigo, 0.2),
  purple: ThemeBuilder.darken(lightColorScheme.colors.purple, 0.2),
  pink: ThemeBuilder.darken(lightColorScheme.colors.pink, 0.2),
  red: ThemeBuilder.darken(lightColorScheme.colors.red, 0.2),
  orange: ThemeBuilder.darken(lightColorScheme.colors.orange, 0.2),
  yellow: ThemeBuilder.darken(lightColorScheme.colors.yellow, 0.2),
  green: ThemeBuilder.darken(lightColorScheme.colors.green, 0.2),
  teal: ThemeBuilder.darken(lightColorScheme.colors.teal, 0.2),
  cyan: ThemeBuilder.darken(lightColorScheme.colors.cyan, 0.2),
};

const greyscale: GreyscaleColors = {
  white: ThemeBuilder.darken(lightColorScheme.greyscale.white, 0.01),
  gray100: ThemeBuilder.darken(lightColorScheme.greyscale.gray100, 0.01),
  gray200: ThemeBuilder.darken(lightColorScheme.greyscale.gray200, 0.01),
  gray300: ThemeBuilder.darken(lightColorScheme.greyscale.gray300, 0.01),
  gray400: ThemeBuilder.darken(lightColorScheme.greyscale.gray400, 0.05),
  gray500: ThemeBuilder.darken(lightColorScheme.greyscale.gray500, 0.05),
  gray600: ThemeBuilder.darken(lightColorScheme.greyscale.gray600, 0.05),
  gray700: ThemeBuilder.darken(lightColorScheme.greyscale.gray700, 0.05),
  gray800: ThemeBuilder.darken(lightColorScheme.greyscale.gray800, 0.05),
  gray900: ThemeBuilder.darken(lightColorScheme.greyscale.gray900, 0.05),
  black: lightColorScheme.greyscale.black,
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

const lightContrast = greyscale.gray100;
const darkContrast = greyscale.black;
const contrastColors: SwatchColors = {
  blue: lightContrast,
  indigo: lightContrast,
  purple: lightContrast,
  pink: lightContrast,
  red: lightContrast,
  orange: lightContrast,
  yellow: darkContrast,
  green: lightContrast,
  teal: lightContrast,
  cyan: lightContrast,
  white: darkContrast,
  gray100: darkContrast,
  gray200: darkContrast,
  gray300: darkContrast,
  gray400: darkContrast,
  gray500: darkContrast,
  gray600: lightContrast,
  gray700: lightContrast,
  gray800: lightContrast,
  gray900: lightContrast,
  black: lightContrast,
  primary: lightContrast,
  secondary: lightContrast,
  success: lightContrast,
  info: lightContrast,
  warning: darkContrast,
  danger: lightContrast,
  light: darkContrast,
  dark: lightContrast,
};

/** Color scheme based on Bootstrap 5 colors. */
export const darkColorScheme: ColorScheme = {
  colors: colors,
  greyscale: greyscale,
  theme: themeColors,
  contrast: contrastColors,
};
