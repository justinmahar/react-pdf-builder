import { Theme } from '../Theme';
import { ThemeFactory } from '../ThemeFactory';

export class OriginalLightThemeFactory extends ThemeFactory {
  public static headingStartSize = 20;
  public static headingStepSize = 4;
  public create(scale: number = 1): Theme {
    return {
      heading1Props: {
        style: {
          fontSize:
            scale * (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 5),
          marginBottom: 10 * scale,
          borderBottom: 4 * scale,
        },
      },
      heading2Props: {
        style: {
          fontSize:
            scale * (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 4),
          marginBottom: 10 * scale,
          borderBottom: 4 * scale,
        },
      },
      heading3Props: {
        style: {
          fontSize:
            scale * (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 3),
          marginBottom: 10 * scale,
          borderBottom: 3 * scale,
        },
      },
      heading4Props: {
        style: {
          fontSize:
            scale * (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 2),
          marginBottom: 10 * scale,
          borderBottom: 3 * scale,
        },
      },
      heading5Props: {
        style: {
          fontSize:
            scale * (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 1),
          marginBottom: 10 * scale,
          borderBottom: 2 * scale,
        },
      },
      heading6Props: {
        style: {
          fontSize:
            scale * (OriginalLightThemeFactory.headingStartSize + OriginalLightThemeFactory.headingStepSize * 0),
          marginBottom: 10 * scale,
          borderBottom: 2 * scale,
        },
      },
      paragraphProps: {
        style: {
          fontSize: 18 * scale,
          marginBottom: 10 * scale,
        },
      },
      pageProps: {
        style: {
          padding: 30 * scale,
          fontSize: 18 * scale,
        },
      },
      cardProps: {
        style: {
          marginBottom: 10 * scale,
          overflow: 'hidden',
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
          overflow: 'hidden',
        },
      },
      cardHeaderProps: {
        wrap: false,
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
          overflow: 'hidden',
        },
      },
    };
  }
}
