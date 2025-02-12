import { createDefaultClassNames } from '../classnames/createDefaultClassNames';
import { ColorScheme } from '../ColorScheme';
import { Theme } from '../Theme';
import { ThemeBuilder } from '../ThemeBuilder';
import { lightColorScheme } from './LightColorScheme';

export class LightThemeBuilder extends ThemeBuilder {
  constructor() {
    super(lightColorScheme);
  }
  public doBuild(scale: number, colorScheme: ColorScheme): Theme {
    const borderColor = colorScheme.greyscale.gray500;
    const baseFontSize = 16;
    const baseMarginRatio = 1.25;
    const classNames = createDefaultClassNames(scale, baseFontSize, colorScheme);
    const scaledFontSize = baseFontSize * scale;
    // console.log(classNames);
    return {
      // === Color Scheme === === === === === === === === === === ===
      colorScheme,
      classNames,
      _bodyBackgroundColor: colorScheme.greyscale.white,
      _bodyColor: colorScheme.greyscale.black,
      _bodyFontSize: scaledFontSize,

      // === Button === === === === === === === === === === ===
      buttonProps: {
        style: {
          padding: 10 * scale,
          width: 150 * scale,
          borderRadius: 5 * scale,
        },
      },

      // === Card === === === === === === === === === === ===
      cardProps: {
        style: {
          marginBottom: scaledFontSize * baseMarginRatio,
        },
      },
      cardBodyProps: {
        style: {
          backgroundColor: colorScheme.greyscale.white, // Color
          padding: 15 * scale,
          borderTopLeftRadius: 10 * scale,
          borderTopRightRadius: 10 * scale,
          borderBottomLeftRadius: 10 * scale,
          borderBottomRightRadius: 10 * scale,
          borderWidth: 1 * scale,
          borderColor, // Color
        },
      },
      cardHeaderProps: {
        style: {
          backgroundColor: colorScheme.greyscale.gray200, // Color
          paddingVertical: 10 * scale,
          paddingHorizontal: 15 * scale,
          borderTopLeftRadius: 10 * scale,
          borderTopRightRadius: 10 * scale,
          borderBottomLeftRadius: 10 * scale,
          borderBottomRightRadius: 10 * scale,
          borderWidth: 1 * scale,
          borderColor, // Color
        },
      },

      // === Link === === === === === === === === === === ===
      linkProps: {},

      // === Lists === === === === === === === === === === ===
      listItemContainerProps: {
        style: {
          marginBottom: scaledFontSize * 0.35,
          columnGap: 20 * scale,
        },
      },
      listItemMarkerProps: {},
      listItemProps: {},
      orderedListProps: {
        style: {
          marginBottom: scaledFontSize * baseMarginRatio,
          fontSize: scaledFontSize,
        },
      },
      unorderedListProps: {
        style: {
          marginBottom: scaledFontSize * baseMarginRatio,
          fontSize: scaledFontSize,
        },
      },

      // === Pages === === === === === === === === === === ===
      pageProps: {
        style: {
          padding: 0.5 * 72 * scale, // Inches x DPI, scaled
          fontSize: scaledFontSize,
        },
      },
      pageNumberProps: {},

      // === Signature === === === === === === === === === === ===
      signatureProps: {
        style: {
          borderBottomWidth: 3 * scale,
          borderBottomColor: colorScheme.greyscale.black, // Color
          minHeight: 45 * scale,
        },
        xProps: {
          style: {
            fontSize: scaledFontSize * 1.75,
            marginLeft: 12 * scale,
            marginBottom: 2 * scale,
          },
        },
      },

      // === Table === === === === === === === === === === ===
      tableProps: {
        borderWidth: 1 * scale,
        borderStyle: 'solid' as any,
        borderColor: colorScheme.greyscale.black, // Color
        stripeStyle: { backgroundColor: '#00000015' }, // Color
        style: {
          marginBottom: scaledFontSize * baseMarginRatio,
        },
      },
      tableRowProps: {},
      tableCellProps: {
        style: {
          padding: 8 * scale,
        },
      },

      // === Typography === === === === === === === === === === ===
      blockquoteProps: {
        style: {
          borderLeftWidth: 5 * scale,
          padding: 15 * scale,
          borderColor: colorScheme.greyscale.gray800,
          backgroundColor: colorScheme.greyscale.gray200,
        },
      },
      headingProps: {},
      heading1Props: {
        className: 'h1 h1-rule',
      },
      heading2Props: {
        className: 'h2 h2-rule',
      },
      heading3Props: {
        className: 'h3 h3-rule',
      },
      heading4Props: {
        className: 'h4 h4-rule',
      },
      heading5Props: {
        className: 'h5 h5-rule',
      },
      heading6Props: {
        className: 'h6 h6-rule',
      },
      paragraphProps: {
        style: {
          fontSize: scaledFontSize,
          marginBottom: scaledFontSize,
        },
      },
    };
  }
}
