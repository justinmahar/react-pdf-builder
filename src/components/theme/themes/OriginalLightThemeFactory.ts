import { Theme } from '../Theme';
import { ThemeFactory } from '../ThemeFactory';

export class OriginalLightThemeFactory extends ThemeFactory {
  public create(scale: number = 1): Theme {
    return {
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
      pageProps: {
        style: {
          padding: 30 * scale,
          fontSize: 18 * scale,
        },
      },
    };
  }
}
