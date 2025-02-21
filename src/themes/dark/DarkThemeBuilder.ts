import { PartialTheme, Theme } from '../Theme';
import { ThemeBuilder } from '../ThemeBuilder';
import { ColorScheme } from '../ColorScheme';
import { darkColorScheme } from './DarkColorScheme';
import { lightColorScheme } from '../light/LightColorScheme';
import { LightThemeBuilder } from '../light/LightThemeBuilder';

export class DarkThemeBuilder extends ThemeBuilder {
  constructor() {
    super(darkColorScheme);
  }
  public doBuild(scale: number, colorScheme: ColorScheme): Theme {
    const lightTheme = new LightThemeBuilder().build({ scale, override: { colorScheme } });
    const bodyBackgroundColor = colorScheme.greyscale.gray900;
    const bodyColor = colorScheme.greyscale.gray300;
    const linkColor = ThemeBuilder.lighten(lightColorScheme.colors.blue, 0.4);
    const darkThemeOverride: PartialTheme = {
      // === Color Scheme === === === === === === === === === === ===
      colorScheme,
      _bodyBackgroundColor: bodyBackgroundColor,
      _bodyColor: bodyColor,

      // === Button === === === === === === === === === === ===
      buttonProps: {
        linkColor,
      },

      // === Card === === === === === === === === === === ===
      cardBodyProps: {
        className: 'bg-gray900 border-gray700',
      },
      cardHeaderProps: {
        className: 'bg-gray800 border-gray700',
      },

      // === Link === === === === === === === === === === ===
      linkProps: {
        style: {
          color: linkColor,
        },
      },

      // === Pages === === === === === === === === === === ===
      pageProps: {
        className: 'text-gray300 bg-gray900',
      },

      // === Signature === === === === === === === === === === ===
      signatureProps: {
        className: 'border-gray300',
      },

      // === Table === === === === === === === === === === ===
      tableProps: {
        stripeOpacity: 0.3,
        borderColor: colorScheme.greyscale.gray300,
        stripeStyle: { backgroundColor: '#ffffff15' },
      },
      tableRowProps: {
        stripeOpacity: 0.3,
      },
      tableCellProps: {
        swatchOpacity: 0.3,
      },

      // === Typography === === === === === === === === === === ===
      blockquoteProps: {
        className: 'border-gray200 bg-gray800',
      },
      headingProps: {
        className: 'border-gray300',
      },
    };

    return ThemeBuilder.overrideTheme(lightTheme, darkThemeOverride);
  }
}
