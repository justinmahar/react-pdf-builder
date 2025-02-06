import { LightThemeBuilder as LightThemeBuilder } from './light/LightThemeBuilder';

export class Themes {
  public static light = new LightThemeBuilder();
  public static default = Themes.light;
}
