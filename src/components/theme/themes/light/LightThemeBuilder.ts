import { Theme } from '../../Theme';
import { ThemeBuilder } from '../../ThemeBuilder';
import { ColorScheme } from '../ColorScheme';
import { bootstrapLightColorScheme } from './BootstrapLightColorScheme';

export class LightThemeBuilder extends ThemeBuilder {
  constructor() {
    super(bootstrapLightColorScheme);
  }
  public doBuild(scale: number, colorScheme: ColorScheme): Theme {
    const borderColor = colorScheme.greyscale.gray500;
    const baseFontSize = 18;
    const baseMarginRatio = 1.25;
    const headingStartSize = baseFontSize * 1.11;
    const headingStepSize = 4;
    return {
      // === Color Scheme === === === === === === === === === === ===
      colorScheme,
      _bodyBackgroundColor: colorScheme.greyscale.white,
      _bodyColor: colorScheme.greyscale.black,

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
          border: 1 * scale,
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
          border: 1 * scale,
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
          borderBottom: 3 * scale,
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
      headingProps: {
        // Applies to all headings
        style: {},
      },
      heading1Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 5) * scale,
          marginBottom: baseFontSize * 1.5 * scale,
          borderBottom: 4 * scale, // Enabled with rule prop
        },
      },
      heading2Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 4) * scale,
          marginBottom: baseFontSize * 1.4 * scale,
          borderBottom: 4 * scale, // Enabled with rule prop
        },
      },
      heading3Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 3) * scale,
          marginBottom: baseFontSize * 1.3 * scale,
          borderBottom: 3 * scale, // Enabled with rule prop
        },
      },
      heading4Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 2) * scale,
          marginBottom: baseFontSize * 1.2 * scale,
          borderBottom: 3 * scale, // Enabled with rule prop
        },
      },
      heading5Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 1) * scale,
          marginBottom: baseFontSize * 1.1 * scale,
          borderBottom: 2 * scale, // Enabled with rule prop
        },
      },
      heading6Props: {
        style: {
          fontSize: headingStartSize * scale,
          marginBottom: baseFontSize * scale,
          borderBottom: 2 * scale, // Enabled with rule prop
        },
      },
      paragraphProps: {
        style: {
          fontSize: baseFontSize * scale,
          marginBottom: baseFontSize * baseMarginRatio * scale,
        },
      },
    };
  }
}
