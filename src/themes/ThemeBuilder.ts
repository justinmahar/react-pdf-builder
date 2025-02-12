import Color from 'color';
import { deepMerge } from '../util/util';
import { PartialTheme, Theme } from './Theme';
import {
  ColorScheme,
  GreyscaleColors,
  PaletteColors,
  PartialColorScheme,
  SwatchColor,
  SwatchColors,
  ThemeColors,
} from './ColorScheme';
import { ClassNames } from './classnames/ClassNames';
import { Style } from '../components/Style';

export abstract class ThemeBuilder {
  constructor(public colorScheme: ColorScheme) {}

  /**
   * Builds the theme based on the scale and color scheme provided.
   */
  abstract doBuild(scale: number, colorScheme: ColorScheme): Theme;

  /**
   * Creates the theme for the provided scale relative to the A4 page size (8.5 x 11", 595.28 by 841.89pt).
   * @param config Contains a scale multiplier for the theme, with a value of `1` being relative to a standard 8.5 x 11" A4 page, or 595.28 x 841.89pt, a value of `2` being relative to A2 at 1190.55 x 1683.78pt, etc. All scalable values for the theme (such as padding, margin, and font sizes) are multiplied by this value. Can also contain an override theme to customize the theme further.
   * @returns The scaled theme.
   */
  public build(config?: ThemeBuilderConfig): Theme {
    const themeOverride = { ...config?.override };
    const scale = config?.scale ?? 1;
    const colorScheme = ThemeBuilder.overrideColorScheme(this.colorScheme, themeOverride?.colorScheme);
    const theme = this.doBuild(scale, colorScheme);
    const mergedTheme = ThemeBuilder.overrideTheme(theme, themeOverride);
    mergedTheme.colorScheme = colorScheme;
    return mergedTheme;
  }

  // === Static === === === === === === === ===
  public static overrideTheme(theme: PartialTheme, override: PartialTheme = {}): Theme {
    // Combine class name strings, if overridden
    const mergeClassNames = (key: string, a: any, b: any) => {
      if (key === 'className' && typeof a === 'string' && typeof b === 'string') {
        const combinedClassNames = `${a} ${b}`;
        return { success: true, value: combinedClassNames };
      } else {
        return { success: false, value: undefined };
      }
    };
    return deepMerge(theme, override, mergeClassNames) as Theme;
  }

  public static overrideColorScheme(colorScheme: PartialColorScheme, overrides: PartialColorScheme = {}): ColorScheme {
    return deepMerge(colorScheme, overrides) as ColorScheme;
  }

  public static getSwatchColor(swatch: SwatchColor, colorScheme?: ColorScheme): string | undefined {
    return (
      colorScheme?.theme[swatch as keyof ThemeColors] ??
      colorScheme?.colors[swatch as keyof PaletteColors] ??
      colorScheme?.greyscale[swatch as keyof GreyscaleColors]
    );
  }

  public static getContrastColor(swatch: SwatchColor, colorScheme?: ColorScheme): string | undefined {
    return colorScheme?.contrast[swatch as keyof SwatchColors];
  }

  /**
   * Mixes white with the color provided by the specified ratio amount (value from 0 to 1).
   * @param color The color to lighten.
   * @param ratio Ratio from 0 to 1.
   * @returns The lightened color as a hex string.
   */
  public static lighten(color: string, ratio: number) {
    return new Color(color).lighten(ratio).hex();
  }

  /**
   * Mixes black with the color provided by the specified ratio amount (value from 0 to 1).
   * @param color The color to darken.
   * @param ratio Ratio from 0 to 1.
   * @returns The darkened color as a hex string.
   */
  public static darken(color: string, ratio: number) {
    return new Color(color).darken(ratio).hex();
  }

  /**
   * Converts a decimal from 0-255 to a two character long hexadecimal string.
   * @param decimal The value from 0 to 255.
   * @returns A two character long hex string.
   */
  public static decimalToHex(decimal: number): string {
    return Math.round(Math.min(1, Math.max(0, decimal)) * 255)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();
  }

  /**
   * Returns a Style object containing all styles for the class name string. Class name string can contain
   * one or more class names, separated by spaces.
   *
   * @param className The class name to get the Style object for.
   * @param classNames The style definitions for all available class names.
   * @returns A merged Style object containing styles for all classes in the class name string.
   */
  public static getStylesForClassName(className: string | undefined, classNames: ClassNames): Style {
    return (className ?? '')
      .split(' ')
      .map((c) => c.trim())
      .filter((c) => c)
      .reduce((p, c) => ({ ...p, ...classNames[c] }), {});
  }
}

export interface ThemeBuilderConfig {
  scale?: number;
  override?: PartialTheme;
}
