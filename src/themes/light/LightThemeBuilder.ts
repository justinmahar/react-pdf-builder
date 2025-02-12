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
    const emSize = 16;
    const baseFontSize = emSize;
    const baseMarginRatio = 1.25;
    const classNames = createDefaultClassNames(scale, emSize, colorScheme);
    const scaledFontSize = baseFontSize * scale;
    const scaledEmSize = emSize * scale;
    const bodyBgColor = colorScheme.greyscale.white;
    // console.log(classNames);
    return {
      // === Color Scheme === === === === === === === === === === ===
      colorScheme,
      classNames,
      _bodyBackgroundColor: bodyBgColor,
      _bodyColor: colorScheme.greyscale.black,
      _bodyFontSize: scaledFontSize,

      // === Button === === === === === === === === === === ===
      buttonProps: {
        className: 'rounded py-1 px-2',
      },

      // === Card === === === === === === === === === === ===
      cardProps: {
        style: {
          marginBottom: scaledEmSize * baseMarginRatio,
        },
      },
      cardBodyProps: {
        className: 'rounded-top rounded-bottom border border-gray500 p-3',
        style: {
          backgroundColor: bodyBgColor,
        },
      },
      cardHeaderProps: {
        className: 'rounded-top rounded-bottom border border-gray500 bg-gray200 py-2 px-3',
      },

      // === Link === === === === === === === === === === ===
      linkProps: {},

      // === Lists === === === === === === === === === === ===
      listItemContainerProps: {
        style: {
          marginBottom: scaledEmSize * 0.35,
          columnGap: 20 * scale,
        },
      },
      listItemMarkerProps: {},
      listItemProps: {},
      orderedListProps: {
        style: {
          marginBottom: scaledEmSize * baseMarginRatio,
          fontSize: scaledFontSize,
        },
      },
      unorderedListProps: {
        style: {
          marginBottom: scaledEmSize * baseMarginRatio,
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
          marginBottom: scaledEmSize * baseMarginRatio,
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
        className: 'mb-3',
        style: {
          fontSize: scaledFontSize,
          marginBottom: scaledEmSize,
        },
      },
    };
  }
}
