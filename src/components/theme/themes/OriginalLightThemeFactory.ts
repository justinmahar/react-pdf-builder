import { Theme } from '../Theme';
import { ThemeFactory } from '../ThemeFactory';

export class OriginalLightThemeFactory extends ThemeFactory {
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
          backgroundColor: '#ffffff',
          padding: 15 * scale,
          borderTopLeftRadius: 10 * scale,
          borderTopRightRadius: 10 * scale,
          borderBottomLeftRadius: 10 * scale,
          borderBottomRightRadius: 10 * scale,
          border: 1 * scale,
          borderColor: '#CCCCCC',
        },
      },
      cardHeaderProps: {
        style: {
          backgroundColor: '#EEEEEE',
          paddingVertical: 10 * scale,
          paddingHorizontal: 15 * scale,
          borderTopLeftRadius: 10 * scale,
          borderTopRightRadius: 10 * scale,
          borderBottomLeftRadius: 10 * scale,
          borderBottomRightRadius: 10 * scale,
          border: 1 * scale,
          borderColor: '#CCCCCC',
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
        borderColor: '#000000',
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
