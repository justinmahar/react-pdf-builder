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
    const classNames = createDefaultClassNames(scale, baseFontSize);
    console.log(classNames);
    return {
      // === Color Scheme === === === === === === === === === === ===
      colorScheme,
      classNames,
      _bodyBackgroundColor: colorScheme.greyscale.white,
      _bodyColor: colorScheme.greyscale.black,
      _baseFontSize: baseFontSize,

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
          marginBottom: baseFontSize * baseMarginRatio * scale,
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
      linkProps: {
        style: {},
      },

      // === Lists === === === === === === === === === === ===
      listItemContainerProps: {
        style: {
          marginBottom: baseFontSize * 0.35 * scale,
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
          marginBottom: baseFontSize * baseMarginRatio * scale,
          fontSize: baseFontSize * scale,
        },
      },
      unorderedListProps: {
        style: {
          marginBottom: baseFontSize * baseMarginRatio * scale,
          fontSize: baseFontSize * scale,
        },
      },

      // === Pages === === === === === === === === === === ===
      pageProps: {
        style: {
          padding: 0.5 * 72 * scale, // Inches x DPI, scaled
          fontSize: baseFontSize * scale,
        },
      },
      pageNumberProps: {
        style: {},
      },

      // === Signature === === === === === === === === === === ===
      signatureProps: {
        style: {
          borderBottomWidth: 3 * scale,
          borderBottomColor: colorScheme.greyscale.black, // Color
          minHeight: 45 * scale,
        },
        xProps: {
          style: {
            fontSize: baseFontSize * 1.75 * scale,
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
          marginBottom: baseFontSize * baseMarginRatio * scale,
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
      blockquoteProps: {
        style: {
          borderLeftWidth: 5 * scale,
          padding: 15 * scale,
          borderColor: colorScheme.greyscale.gray800,
          backgroundColor: colorScheme.greyscale.gray200,
        },
      },
      headingProps: {
        // Applies to all headings
        style: {},
      },
      heading1Props: {
        className: 'h1',
        style: {
          borderBottomWidth: 4 * scale, // Enabled with rule prop
        },
      },
      heading2Props: {
        className: 'h2',
        style: {
          borderBottomWidth: 3 * scale, // Enabled with rule prop
        },
      },
      heading3Props: {
        className: 'h3',
        style: {
          borderBottomWidth: 3 * scale, // Enabled with rule prop
        },
      },
      heading4Props: {
        className: 'h4',
        style: {
          borderBottomWidth: 2 * scale, // Enabled with rule prop
        },
      },
      heading5Props: {
        className: 'h5',
        style: {
          borderBottomWidth: 2 * scale, // Enabled with rule prop
        },
      },
      heading6Props: {
        className: 'h6',
        style: {
          borderBottomWidth: 1 * scale, // Enabled with rule prop
        },
      },
      paragraphProps: {
        style: {
          fontSize: baseFontSize * scale,
          marginBottom: baseFontSize * scale,
        },
      },
    };
  }
}
