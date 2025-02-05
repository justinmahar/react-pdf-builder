import { Theme } from '../Theme';
import { ThemeFactory } from '../ThemeFactory';

export class OriginalLightThemeFactory extends ThemeFactory {
  public static colors = {
    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',
  };
  public static greyscale = {
    white: '#fff',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#6c757d',
    gray700: '#495057',
    gray800: '#343a40',
    gray900: '#212529',
    black: '#000',
  };
  public static contrastColors = {
    blue: OriginalLightThemeFactory.greyscale.white,
    indigo: OriginalLightThemeFactory.greyscale.white,
    purple: OriginalLightThemeFactory.greyscale.white,
    pink: OriginalLightThemeFactory.greyscale.white,
    red: OriginalLightThemeFactory.greyscale.white,
    orange: OriginalLightThemeFactory.greyscale.black,
    yellow: OriginalLightThemeFactory.greyscale.black,
    green: OriginalLightThemeFactory.greyscale.white,
    teal: OriginalLightThemeFactory.greyscale.black,
    cyan: OriginalLightThemeFactory.greyscale.black,
    white: OriginalLightThemeFactory.greyscale.black,
    gray100: OriginalLightThemeFactory.greyscale.black,
    gray200: OriginalLightThemeFactory.greyscale.black,
    gray300: OriginalLightThemeFactory.greyscale.black,
    gray400: OriginalLightThemeFactory.greyscale.black,
    gray500: OriginalLightThemeFactory.greyscale.black,
    gray600: OriginalLightThemeFactory.greyscale.white,
    gray700: OriginalLightThemeFactory.greyscale.white,
    gray800: OriginalLightThemeFactory.greyscale.white,
    gray900: OriginalLightThemeFactory.greyscale.white,
    black: OriginalLightThemeFactory.greyscale.white,
  };
  public static themeColors = {
    primary: OriginalLightThemeFactory.colors.blue,
    secondary: OriginalLightThemeFactory.greyscale.gray600,
    success: OriginalLightThemeFactory.colors.green,
    info: OriginalLightThemeFactory.colors.cyan,
    warning: OriginalLightThemeFactory.colors.yellow,
    danger: OriginalLightThemeFactory.colors.red,
    light: OriginalLightThemeFactory.greyscale.gray100,
    dark: OriginalLightThemeFactory.greyscale.gray900,
  };

  public static baseFontSize = 18;
  public static baseMarginRatio = 1.25;
  public static headingStartSize = OriginalLightThemeFactory.baseFontSize * 1.11;
  public static headingStepSize = 4;
  public create(scale: number = 1): Theme {
    return {
      // === Card === === === === === === === === === === ===
      cardProps: {
        style: {
          marginBottom: OriginalLightThemeFactory.baseFontSize * OriginalLightThemeFactory.baseMarginRatio * scale,
        },
      },
      cardBodyProps: {
        style: {
          backgroundColor: OriginalLightThemeFactory.greyscale.white,
          padding: 15 * scale,
          borderTopLeftRadius: 10 * scale,
          borderTopRightRadius: 10 * scale,
          borderBottomLeftRadius: 10 * scale,
          borderBottomRightRadius: 10 * scale,
          border: 1 * scale,
          borderColor: OriginalLightThemeFactory.greyscale.gray400,
        },
      },
      cardHeaderProps: {
        style: {
          backgroundColor: OriginalLightThemeFactory.greyscale.gray200,
          paddingVertical: 10 * scale,
          paddingHorizontal: 15 * scale,
          borderTopLeftRadius: 10 * scale,
          borderTopRightRadius: 10 * scale,
          borderBottomLeftRadius: 10 * scale,
          borderBottomRightRadius: 10 * scale,
          border: 1 * scale,
          borderColor: OriginalLightThemeFactory.greyscale.gray400,
        },
      },

      // === Lists === === === === === === === === === === ===
      listItemContainerProps: {
        style: {
          columnGap: 20 * scale,
        },
      },
      listItemMarkerProps: {
        style: {},
      },
      listItemProps: {
        style: {},
      },
      orderedListProps: {
        style: {
          marginBottom: OriginalLightThemeFactory.baseFontSize * OriginalLightThemeFactory.baseMarginRatio * scale,
          fontSize: OriginalLightThemeFactory.baseFontSize * scale,
        },
      },
      unorderedListProps: {
        style: {
          marginBottom: OriginalLightThemeFactory.baseFontSize * OriginalLightThemeFactory.baseMarginRatio * scale,
          fontSize: OriginalLightThemeFactory.baseFontSize * scale,
        },
      },
      // === Pages === === === === === === === === === === ===
      pageProps: {
        style: {
          padding: 0.5 * 72 * scale, // Inches x DPI, scaled
          fontSize: OriginalLightThemeFactory.baseFontSize * scale,
        },
      },
      pageNumberProps: {
        style: {
          marginBottom: 0 * scale,
        },
      },

      // === Table === === === === === === === === === === ===
      tableProps: {
        borderWidth: 1 * scale,
        borderStyle: 'solid',
        borderColor: OriginalLightThemeFactory.greyscale.black,
        stripeStyle: { backgroundColor: '#00000015' },
        style: {
          marginBottom: OriginalLightThemeFactory.baseFontSize * OriginalLightThemeFactory.baseMarginRatio * scale,
        },
      },
      tableRowProps: {
        style: {},
      },
      tableCellProps: {
        style: {
          padding: 8 * scale,
        },
      },

      // === Typography === === === === === === === === === === ===
      headingProps: {
        style: {}, // Applies to all headings
      },
      heading1Props: {
        style: {
          fontSize:
            (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 5) * scale,
          marginBottom: OriginalLightThemeFactory.baseFontSize * 1.5 * scale,
          borderBottom: 4 * scale, // Enabled with rule prop
        },
      },
      heading2Props: {
        style: {
          fontSize:
            (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 4) * scale,
          marginBottom: OriginalLightThemeFactory.baseFontSize * 1.4 * scale,
          borderBottom: 4 * scale, // Enabled with rule prop
        },
      },
      heading3Props: {
        style: {
          fontSize:
            (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 3) * scale,
          marginBottom: OriginalLightThemeFactory.baseFontSize * 1.3 * scale,
          borderBottom: 3 * scale, // Enabled with rule prop
        },
      },
      heading4Props: {
        style: {
          fontSize:
            (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 2) * scale,
          marginBottom: OriginalLightThemeFactory.baseFontSize * 1.2 * scale,
          borderBottom: 3 * scale, // Enabled with rule prop
        },
      },
      heading5Props: {
        style: {
          fontSize:
            (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 1) * scale,
          marginBottom: OriginalLightThemeFactory.baseFontSize * 1.1 * scale,
          borderBottom: 2 * scale, // Enabled with rule prop
        },
      },
      heading6Props: {
        style: {
          fontSize: OriginalLightThemeFactory.headingStartSize * scale,
          marginBottom: OriginalLightThemeFactory.baseFontSize * scale,
          borderBottom: 2 * scale, // Enabled with rule prop
        },
      },
      paragraphProps: {
        style: {
          fontSize: OriginalLightThemeFactory.baseFontSize * scale,
          marginBottom: OriginalLightThemeFactory.baseFontSize * OriginalLightThemeFactory.baseMarginRatio * scale,
        },
      },

      // === Widgets === === === === === === === === === === ===
      buttonProps: {
        style: {
          textAlign: 'center',
          padding: 10 * scale,
          width: 150 * scale,
          borderRadius: 5 * scale,
        },
      },
    };
  }
}
