import mix from 'mix-css-color';
import { deepMerge } from '../util';
import { PartialTheme, Theme } from './Theme';
import {
  ColorScheme,
  GreyscaleColors,
  PaletteColors,
  PartialColorScheme,
  SwatchColor,
  SwatchColors,
  ThemeColors,
} from './themes/ColorScheme';

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
    console.log('config', config);
    const themeOverride = { ...config?.override };
    console.log('themeOverride', themeOverride);
    const scale = config?.scale ?? 1;
    const colorScheme = ThemeBuilder.overrideColorScheme(this.colorScheme, themeOverride?.colorScheme);
    const theme = this.doBuild(scale, colorScheme);
    const mergedTheme = ThemeBuilder.overrideTheme(theme, themeOverride);
    mergedTheme.colorScheme = colorScheme;
    return mergedTheme;
  }

  // === Static === === === === === === === ===
  public static overrideTheme(theme: Theme, override: PartialTheme = {}): Theme {
    return deepMerge(theme, override) as Theme;
  }

  public static overrideColorScheme(colorScheme: ColorScheme, overrides: PartialColorScheme = {}): ColorScheme {
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
   * Mixes white with the color provided by the specified percentage amount (value from 0 to 100).
   * @param color The color to whiten.
   * @param percentage Whole percentage from 0 to 100.
   * @returns The whitened color.
   */
  public static whiten(color: string, percentage: number) {
    return mix('#FFFFFF', color, percentage).hex;
  }

  /**
   * Mixes black with the color provided by the specified percentage amount (value from 0 to 100).
   * @param color The color to blacken.
   * @param percentage Whole percentage from 0 to 100.
   * @returns The blackened color.
   */
  public static blacken(color: string, percentage: number) {
    return mix('#000000', color, percentage).hex;
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
}

export interface ThemeBuilderConfig {
  scale?: number;
  override?: PartialTheme;
}
