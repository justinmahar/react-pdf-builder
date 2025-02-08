import { FontWeight } from '@react-pdf/types';

const defaultFontsDirUrl = 'https://justinmahar.github.io/react-pdf-builder/fonts';

/** Matches font loading interface expected by React-PDF */
export interface BulkLoad {
  family: string;
  fonts: {
    src: string;
    fontStyle?: string;
    fontWeight?: FontWeight;
  }[];
}

export interface FontFamily {
  type: string;
  dir: string;
  family: string;
  fonts: {
    filename: string;
    fontStyle?: string;
    fontWeight?: FontWeight;
  }[];
}

export const fontFamilies: FontFamily[] = [
  {
    type: 'sans-serif',
    dir: 'roboto-v47-latin',
    family: 'Roboto',
    fonts: [
      { filename: 'roboto-v47-latin-100.ttf', fontWeight: 100 },
      { filename: 'roboto-v47-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-200.ttf', fontWeight: 200 },
      { filename: 'roboto-v47-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-300.ttf', fontWeight: 300 },
      { filename: 'roboto-v47-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-regular.ttf', fontWeight: 400 },
      { filename: 'roboto-v47-latin-italic.ttf', fontWeight: 400, fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-500.ttf', fontWeight: 500 },
      { filename: 'roboto-v47-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-600.ttf', fontWeight: 600 },
      { filename: 'roboto-v47-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-700.ttf', fontWeight: 700 },
      { filename: 'roboto-v47-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-800.ttf', fontWeight: 800 },
      { filename: 'roboto-v47-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-900.ttf', fontWeight: 900 },
      { filename: 'roboto-v47-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
    ],
  },
];

const createFontSrc = (fontsDirUrl: string | undefined, family: FontFamily, filename: string) => {
  const src = fontsDirUrl
    ? `${fontsDirUrl}${fontsDirUrl.endsWith('/') ? '' : '/'}${filename}`
    : `${defaultFontsDirUrl}${defaultFontsDirUrl.endsWith('/') ? '' : '/'}${family.type}/${family.dir}/${filename}`;
  return src;
};

export class Fonts {
  public static load = (fontFamily: string, fontsDirUrl?: string): BulkLoad | undefined => {
    const famWithMeta = fontFamilies.find((d) => d.family.toLowerCase() === fontFamily.toLowerCase());
    if (famWithMeta) {
      const bulkLoad = {
        family: famWithMeta.family,
        fonts: famWithMeta.fonts.map((f) => {
          const src = createFontSrc(fontsDirUrl, famWithMeta, f.filename);
          return {
            src,
            fontStyle: f.fontStyle,
            fontWeight: f.fontWeight,
          };
        }),
      };
      return bulkLoad;
    }
    return undefined;
  };
}
