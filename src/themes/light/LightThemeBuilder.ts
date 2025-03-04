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
    const emSize = 16;
    const baseFontSize = emSize;
    const classNames = createDefaultClassNames(scale, emSize, colorScheme);
    const scaledPagePadding = 0.5 * 72 * scale; // Inches x dpi, scaled
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
        className: 'rounded py-2',
        style: { paddingLeft: scaledEmSize * 0.75, paddingRight: scaledEmSize * 0.75 },
      },

      // === Card === === === === === === === === === === ===
      cardProps: {
        className: 'mb-3',
      },
      cardBodyProps: {
        className: 'rounded-top rounded-bottom border border-gray500 bg-white p-3',
      },
      cardHeaderProps: {
        className: 'rounded-top rounded-bottom border border-gray500 bg-gray200 py-2 px-3',
      },

      // === Horizontal Rule === === === === === === === === === === ===
      hrProps: {
        className: 'border-bottom-1 border-gray500 my-3',
      },

      // === Link === === === === === === === === === === ===
      linkProps: {},

      // === Lists === === === === === === === === === === ===
      listItemContainerProps: {
        style: {
          marginBottom: scaledEmSize * 0.5,
          columnGap: 20 * scale,
        },
      },
      listItemMarkerProps: {},
      listItemProps: {},
      orderedListProps: {
        className: 'mb-3',
      },
      unorderedListProps: {
        className: 'mb-3',
      },

      // === Pages === === === === === === === === === === ===
      pageProps: {
        style: {
          padding: scaledPagePadding,
          fontSize: scaledFontSize,
        },
      },
      pageNumberProps: {},

      // === Signature === === === === === === === === === === ===
      signatureProps: {
        className: 'mb-3 border-bottom-3 border-black',
        style: {
          minHeight: scaledFontSize * 2.75 * scale,
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
        className: 'mb-3',
        borderWidth: 1 * scale,
        borderStyle: 'solid' as any,
        borderColor: colorScheme.greyscale.black, // Color
        stripeStyle: { backgroundColor: '#00000015' }, // Color
      },
      tableRowProps: {},
      tableCellProps: {
        className: 'p-2',
      },

      // === Typography === === === === === === === === === === ===
      blockquoteProps: {
        className: 'mb-3 p-3 fs-5 border-start-5 border-color-gray800 bg-gray200',
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
        className: 'mb-3 lh-base',
      },
    };
  }
}
