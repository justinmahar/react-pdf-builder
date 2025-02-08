import { FontWeight } from '@react-pdf/types';

const defaultFontsDirUrl = 'https://justinmahar.github.io/react-pdf-builder/';

interface BulkLoad {
  family: string;
  fonts: {
    src: string;
    fontStyle?: string;
    fontWeight?: FontWeight;
    // [key: string]: any;
  }[];
}

const sansSerif: Record<string, BulkLoad> = {
  roboto: {
    family: 'Roboto',
    fonts: [
      { src: 'roboto-v47-latin-100.ttf', fontWeight: 100 },
      { src: 'roboto-v47-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { src: 'roboto-v47-latin-200.ttf', fontWeight: 200 },
      { src: 'roboto-v47-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { src: 'roboto-v47-latin-300.ttf', fontWeight: 300 },
      { src: 'roboto-v47-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { src: 'roboto-v47-latin-regular.ttf', fontWeight: 400 },
      { src: 'roboto-v47-latin-italic.ttf', fontWeight: 400, fontStyle: 'italic' },
      { src: 'roboto-v47-latin-500.ttf', fontWeight: 500 },
      { src: 'roboto-v47-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { src: 'roboto-v47-latin-600.ttf', fontWeight: 600 },
      { src: 'roboto-v47-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { src: 'roboto-v47-latin-700.ttf', fontWeight: 700 },
      { src: 'roboto-v47-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { src: 'roboto-v47-latin-800.ttf', fontWeight: 800 },
      { src: 'roboto-v47-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { src: 'roboto-v47-latin-900.ttf', fontWeight: 900 },
      { src: 'roboto-v47-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
    ],
  },
};
type SansSerifFamily = keyof typeof sansSerif;

export class Fonts {
  public static sansSerif = (fontFamily: SansSerifFamily, fontsDirUrl: string = defaultFontsDirUrl) => {
    const bulkLoad = sansSerif[fontFamily];
    const withPaths = {
      ...bulkLoad,
      fonts: bulkLoad.fonts.map((v) => {
        return {
          ...v,
          src: `${fontsDirUrl}${fontsDirUrl.endsWith('/') ? '' : '/'}${v.src}`,
        };
      }),
    };
    return withPaths;
  };
}
