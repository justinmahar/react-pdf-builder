import { DarkThemeBuilder } from './dark/DarkThemeBuilder';
import { LightThemeBuilder as LightThemeBuilder } from './light/LightThemeBuilder';

export class Themes {
  public static light = new LightThemeBuilder();
  public static dark = new DarkThemeBuilder();
  public static default = Themes.light;
}
