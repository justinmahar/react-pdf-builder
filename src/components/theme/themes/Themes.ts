import { OriginalLightThemeFactory as OriginalLightThemeFactory } from './OriginalLightThemeFactory';

export class Themes {
  public static originalLight = new OriginalLightThemeFactory();
  public static default = Themes.originalLight;
}

// backgroundColor: '#F8F9FA',
