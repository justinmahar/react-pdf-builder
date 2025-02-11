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
    const lightTheme = new LightThemeBuilder().build({ override: { colorScheme } });
    const bodyBackgroundColor = colorScheme.greyscale.gray900;
    const bodyColor = colorScheme.greyscale.gray300;
    const borderColor = colorScheme.greyscale.gray700;
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
        style: {
          backgroundColor: bodyBackgroundColor,
          borderColor,
        },
      },
      cardHeaderProps: {
        style: {
          backgroundColor: colorScheme.greyscale.gray800,
          borderColor,
        },
      },

      // === Link === === === === === === === === === === ===
      linkProps: {
        style: {
          color: linkColor,
        },
      },

      // === Pages === === === === === === === === === === ===
      pageProps: {
        style: {
          backgroundColor: bodyBackgroundColor,
          color: bodyColor,
        },
      },

      // === Signature === === === === === === === === === === ===
      signatureProps: {
        style: {
          borderBottomColor: bodyColor,
        },
      },

      // === Table === === === === === === === === === === ===
      tableProps: {
        stripeOpacity: 0.3,
        borderColor: colorScheme.greyscale.gray300,
        stripeStyle: { backgroundColor: '#ffffff15' },
      },
      tableRowProps: {
        stripeOpacity: 0.3,
        style: {},
      },
      tableCellProps: {
        swatchOpacity: 0.3,
      },

      // === Typography === === === === === === === === === === ===
      blockquoteProps: {
        style: {
          borderColor: colorScheme.greyscale.gray200,
          backgroundColor: colorScheme.greyscale.gray800,
        },
      },
      headingProps: {
        // Applies to all headings
        style: {
          borderColor: colorScheme.greyscale.gray300,
        },
      },
    };

    return ThemeBuilder.overrideTheme(lightTheme, darkThemeOverride);
  }
}
