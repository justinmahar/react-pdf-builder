import { Theme } from './Theme';

export abstract class ThemeFactory {
  /**
   * Creates the theme for the provided scale relative to the A4 page size (8.5 x 11", 595.28 by 841.89pt).
   * @param scale The scale multiplier for the theme, with a value of `1` being relative to a standard 8.5 x 11" A4 page, or 595.28 x 841.89pt, a value of `2` being relative to A2 at 1190.55 x 1683.78pt, etc. All scalable values for the theme (such as padding, margin, and font sizes) are multiplied by this value.
   * @returns The scaled theme.
   */
  public abstract create(scale?: number): Theme;

  public static mergeProps(p1: Record<string, any> = {}, p2: Record<string, any> = {}): Record<string, any> {
    return { ...p1, ...p2, style: { ...p1.style, ...p2.style } };
  }

  public static mergeThemes(themes: Theme | Theme[]): Theme {
    const arr = Array.isArray(themes) ? themes : [themes];
    const merged = arr.reduce((p, c) => {
      return {
        ...p,
        ...c,
        pageProps: ThemeFactory.mergeProps(p.pageProps, c.pageProps),
      };
    });
    return merged;
  }
}
