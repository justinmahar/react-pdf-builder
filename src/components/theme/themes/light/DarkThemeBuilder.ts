import { Theme } from '../../Theme';
import { ThemeBuilder } from '../../ThemeBuilder';
import { ColorScheme } from '../ColorScheme';
import { bootstrapDarkColorScheme } from './BootstrapDarkColorScheme';
import { bootstrapLightColorScheme } from './BootstrapLightColorScheme';

export class DarkThemeBuilder extends ThemeBuilder {
  constructor() {
    super(bootstrapDarkColorScheme);
  }
  public doBuild(scale: number, colorScheme: ColorScheme): Theme {
    const bodyBackgroundColor = colorScheme.greyscale.gray900;
    const bodyColor = colorScheme.greyscale.gray300;
    const borderColor = colorScheme.greyscale.gray700;
    const linkColor = ThemeBuilder.whiten(bootstrapLightColorScheme.colors.blue, 40);
    const baseFontSize = 18;
    const baseMarginRatio = 1.25;
    const headingStartSize = baseFontSize * 1.11;
    const headingStepSize = 4;
    return {
      // === Color Scheme === === === === === === === === === === ===
      colorScheme,
      _bodyBackgroundColor: bodyBackgroundColor,
      _bodyColor: bodyColor,

      // === Button === === === === === === === === === === ===
      buttonProps: {
        linkColor,
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
          backgroundColor: bodyBackgroundColor, // Color
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
          backgroundColor: colorScheme.greyscale.gray800, // Color
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
        style: {
          color: linkColor,
        },
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
          backgroundColor: bodyBackgroundColor,
          color: bodyColor,
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
          borderBottomColor: bodyColor, // Color
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
        stripeOpacity: 0.3,
        borderWidth: 1 * scale,
        borderStyle: 'solid' as any,
        borderColor: colorScheme.greyscale.gray300, // Color
        stripeStyle: { backgroundColor: '#ffffff15' }, // Color
        style: {
          marginBottom: baseFontSize * baseMarginRatio * scale,
        },
      },
      tableRowProps: {
        stripeOpacity: 0.3,
        style: {},
      },
      tableCellProps: {
        swatchOpacity: 0.3,
        style: {
          padding: 8 * scale,
        },
      },

      // === Typography === === === === === === === === === === ===
      blockquoteProps: {
        style: {
          borderLeftWidth: 5 * scale,
          padding: 15 * scale,
          borderColor: colorScheme.greyscale.gray200,
          backgroundColor: colorScheme.greyscale.gray800,
        },
      },
      headingProps: {
        // Applies to all headings
        style: {
          fontWeight: 'bold',
        },
      },
      heading1Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 5) * scale,
          marginBottom: baseFontSize * 1.5 * scale,
          borderBottom: 4 * scale, // Enabled with rule prop
          borderColor: colorScheme.greyscale.gray300, // Color
        },
      },
      heading2Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 4) * scale,
          marginBottom: baseFontSize * 1.4 * scale,
          borderBottom: 4 * scale, // Enabled with rule prop
          borderColor: colorScheme.greyscale.gray300, // Color
        },
      },
      heading3Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 3) * scale,
          marginBottom: baseFontSize * 1.3 * scale,
          borderBottom: 3 * scale, // Enabled with rule prop
          borderColor: colorScheme.greyscale.gray300, // Color
        },
      },
      heading4Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 2) * scale,
          marginBottom: baseFontSize * 1.2 * scale,
          borderBottom: 3 * scale, // Enabled with rule prop
          borderColor: colorScheme.greyscale.gray300, // Color
        },
      },
      heading5Props: {
        style: {
          fontSize: (headingStartSize + headingStepSize * 1) * scale,
          marginBottom: baseFontSize * 1.1 * scale,
          borderBottom: 2 * scale, // Enabled with rule prop
          borderColor: colorScheme.greyscale.gray300, // Color
        },
      },
      heading6Props: {
        style: {
          fontSize: headingStartSize * scale,
          marginBottom: baseFontSize * scale,
          borderBottom: 2 * scale, // Enabled with rule prop
          borderColor: colorScheme.greyscale.gray300, // Color
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
