import { ThemeBuilder } from '../../ThemeBuilder';
import { ColorScheme, GreyscaleColors, PaletteColors, SwatchColors, ThemeColors } from '../ColorScheme';
import { bootstrapLightColorScheme } from './BootstrapLightColorScheme';

const colors: PaletteColors = {
  blue: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.blue, 20),
  indigo: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.indigo, 20),
  purple: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.purple, 20),
  pink: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.pink, 20),
  red: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.red, 20),
  orange: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.orange, 20),
  yellow: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.yellow, 20),
  green: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.green, 20),
  teal: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.teal, 20),
  cyan: ThemeBuilder.blacken(bootstrapLightColorScheme.colors.cyan, 20),
};

const greyscale: GreyscaleColors = {
  white: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.white, 1),
  gray100: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray100, 1),
  gray200: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray200, 1),
  gray300: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray300, 1),
  gray400: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray400, 5),
  gray500: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray500, 5),
  gray600: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray600, 5),
  gray700: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray700, 5),
  gray800: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray800, 5),
  gray900: ThemeBuilder.blacken(bootstrapLightColorScheme.greyscale.gray900, 5),
  black: bootstrapLightColorScheme.greyscale.black,
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
export const bootstrapDarkColorScheme: ColorScheme = {
  colors: colors,
  greyscale: greyscale,
  theme: themeColors,
  contrast: contrastColors,
};
