import { FontWeight } from '@react-pdf/types';

const defaultFontsCdnUrl = 'https://cdn.jsdelivr.net/gh/justinmahar/react-pdf-builder/public/fonts';

/** Matches font loading interface expected by React-PDF */
export interface BulkLoad {
  family: string;
  fonts: {
    src: string;
    fontStyle?: string;
    fontWeight?: FontWeight;
  }[];
}

export interface FontFilesDefinition {
  type: string;
  dir: string;
  family: string;
  fonts: {
    filename: string;
    fontStyle?: string;
    fontWeight?: FontWeight;
  }[];
}

/**
 * Defines font files for commonly used modern fonts.
 */
export const fontDefinitions: FontFilesDefinition[] = [
  {
    type: 'mono',
    dir: 'courier-prime-v9-latin',
    family: 'Courier Prime',
    fonts: [
      { filename: 'courier-prime-v9-latin-700.ttf', fontWeight: 700 },
      { filename: 'courier-prime-v9-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'courier-prime-v9-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'courier-prime-v9-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'mono',
    dir: 'dm-mono-v14-latin',
    family: 'DM Mono',
    fonts: [
      { filename: 'dm-mono-v14-latin-300.ttf', fontWeight: 300 },
      { filename: 'dm-mono-v14-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'dm-mono-v14-latin-500.ttf', fontWeight: 500 },
      { filename: 'dm-mono-v14-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'dm-mono-v14-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'dm-mono-v14-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'mono',
    dir: 'jetbrains-mono-v20-latin',
    family: 'JetBrains Mono',
    fonts: [
      { filename: 'jetbrains-mono-v20-latin-100.ttf', fontWeight: 100 },
      { filename: 'jetbrains-mono-v20-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'jetbrains-mono-v20-latin-200.ttf', fontWeight: 200 },
      { filename: 'jetbrains-mono-v20-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'jetbrains-mono-v20-latin-300.ttf', fontWeight: 300 },
      { filename: 'jetbrains-mono-v20-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'jetbrains-mono-v20-latin-500.ttf', fontWeight: 500 },
      { filename: 'jetbrains-mono-v20-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'jetbrains-mono-v20-latin-600.ttf', fontWeight: 600 },
      { filename: 'jetbrains-mono-v20-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'jetbrains-mono-v20-latin-700.ttf', fontWeight: 700 },
      { filename: 'jetbrains-mono-v20-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'jetbrains-mono-v20-latin-800.ttf', fontWeight: 800 },
      { filename: 'jetbrains-mono-v20-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'jetbrains-mono-v20-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'jetbrains-mono-v20-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'mono',
    dir: 'roboto-mono-v23-latin',
    family: 'Roboto Mono',
    fonts: [
      { filename: 'roboto-mono-v23-latin-100.ttf', fontWeight: 100 },
      { filename: 'roboto-mono-v23-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'roboto-mono-v23-latin-200.ttf', fontWeight: 200 },
      { filename: 'roboto-mono-v23-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'roboto-mono-v23-latin-300.ttf', fontWeight: 300 },
      { filename: 'roboto-mono-v23-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'roboto-mono-v23-latin-500.ttf', fontWeight: 500 },
      { filename: 'roboto-mono-v23-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'roboto-mono-v23-latin-600.ttf', fontWeight: 600 },
      { filename: 'roboto-mono-v23-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'roboto-mono-v23-latin-700.ttf', fontWeight: 700 },
      { filename: 'roboto-mono-v23-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'roboto-mono-v23-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'roboto-mono-v23-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'mono',
    dir: 'source-code-pro-v23-latin',
    family: 'Source Code Pro',
    fonts: [
      { filename: 'source-code-pro-v23-latin-200.ttf', fontWeight: 200 },
      { filename: 'source-code-pro-v23-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'source-code-pro-v23-latin-300.ttf', fontWeight: 300 },
      { filename: 'source-code-pro-v23-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'source-code-pro-v23-latin-500.ttf', fontWeight: 500 },
      { filename: 'source-code-pro-v23-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'source-code-pro-v23-latin-600.ttf', fontWeight: 600 },
      { filename: 'source-code-pro-v23-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'source-code-pro-v23-latin-700.ttf', fontWeight: 700 },
      { filename: 'source-code-pro-v23-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'source-code-pro-v23-latin-800.ttf', fontWeight: 800 },
      { filename: 'source-code-pro-v23-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'source-code-pro-v23-latin-900.ttf', fontWeight: 900 },
      { filename: 'source-code-pro-v23-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'source-code-pro-v23-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'source-code-pro-v23-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'mono',
    dir: 'space-mono-v14-latin',
    family: 'Space Mono',
    fonts: [
      { filename: 'space-mono-v14-latin-700.ttf', fontWeight: 700 },
      { filename: 'space-mono-v14-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'space-mono-v14-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'space-mono-v14-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'mono',
    dir: 'ubuntu-mono-v17-latin',
    family: 'Ubuntu Mono',
    fonts: [
      { filename: 'ubuntu-mono-v17-latin-700.ttf', fontWeight: 700 },
      { filename: 'ubuntu-mono-v17-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'ubuntu-mono-v17-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'ubuntu-mono-v17-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'sans-serif',
    dir: 'inter-v18-latin',
    family: 'Inter',
    fonts: [
      { filename: 'inter-v18-latin-100.ttf', fontWeight: 100 },
      { filename: 'inter-v18-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'inter-v18-latin-200.ttf', fontWeight: 200 },
      { filename: 'inter-v18-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'inter-v18-latin-300.ttf', fontWeight: 300 },
      { filename: 'inter-v18-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'inter-v18-latin-500.ttf', fontWeight: 500 },
      { filename: 'inter-v18-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'inter-v18-latin-600.ttf', fontWeight: 600 },
      { filename: 'inter-v18-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'inter-v18-latin-700.ttf', fontWeight: 700 },
      { filename: 'inter-v18-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'inter-v18-latin-800.ttf', fontWeight: 800 },
      { filename: 'inter-v18-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'inter-v18-latin-900.ttf', fontWeight: 900 },
      { filename: 'inter-v18-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'inter-v18-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'inter-v18-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'sans-serif',
    dir: 'lato-v24-latin',
    family: 'Lato',
    fonts: [
      { filename: 'lato-v24-latin-100.ttf', fontWeight: 100 },
      { filename: 'lato-v24-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'lato-v24-latin-300.ttf', fontWeight: 300 },
      { filename: 'lato-v24-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'lato-v24-latin-700.ttf', fontWeight: 700 },
      { filename: 'lato-v24-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'lato-v24-latin-900.ttf', fontWeight: 900 },
      { filename: 'lato-v24-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'lato-v24-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'lato-v24-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'sans-serif',
    dir: 'montserrat-v29-latin',
    family: 'Montserrat',
    fonts: [
      { filename: 'montserrat-v29-latin-100.ttf', fontWeight: 100 },
      { filename: 'montserrat-v29-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-200.ttf', fontWeight: 200 },
      { filename: 'montserrat-v29-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-300.ttf', fontWeight: 300 },
      { filename: 'montserrat-v29-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-500.ttf', fontWeight: 500 },
      { filename: 'montserrat-v29-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-600.ttf', fontWeight: 600 },
      { filename: 'montserrat-v29-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-700.ttf', fontWeight: 700 },
      { filename: 'montserrat-v29-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-800.ttf', fontWeight: 800 },
      { filename: 'montserrat-v29-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-900.ttf', fontWeight: 900 },
      { filename: 'montserrat-v29-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'montserrat-v29-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'sans-serif',
    dir: 'noto-sans-v38-latin',
    family: 'Noto Sans',
    fonts: [
      { filename: 'noto-sans-v38-latin-100.ttf', fontWeight: 100 },
      { filename: 'noto-sans-v38-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-200.ttf', fontWeight: 200 },
      { filename: 'noto-sans-v38-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-300.ttf', fontWeight: 300 },
      { filename: 'noto-sans-v38-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-500.ttf', fontWeight: 500 },
      { filename: 'noto-sans-v38-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-600.ttf', fontWeight: 600 },
      { filename: 'noto-sans-v38-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-700.ttf', fontWeight: 700 },
      { filename: 'noto-sans-v38-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-800.ttf', fontWeight: 800 },
      { filename: 'noto-sans-v38-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-900.ttf', fontWeight: 900 },
      { filename: 'noto-sans-v38-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'noto-sans-v38-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'sans-serif',
    dir: 'open-sans-v40-latin',
    family: 'Open Sans',
    fonts: [
      { filename: 'open-sans-v40-latin-300.ttf', fontWeight: 300 },
      { filename: 'open-sans-v40-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'open-sans-v40-latin-500.ttf', fontWeight: 500 },
      { filename: 'open-sans-v40-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'open-sans-v40-latin-600.ttf', fontWeight: 600 },
      { filename: 'open-sans-v40-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'open-sans-v40-latin-700.ttf', fontWeight: 700 },
      { filename: 'open-sans-v40-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'open-sans-v40-latin-800.ttf', fontWeight: 800 },
      { filename: 'open-sans-v40-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'open-sans-v40-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'open-sans-v40-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'sans-serif',
    dir: 'poppins-v22-latin',
    family: 'Poppins',
    fonts: [
      { filename: 'poppins-v22-latin-100.ttf', fontWeight: 100 },
      { filename: 'poppins-v22-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-200.ttf', fontWeight: 200 },
      { filename: 'poppins-v22-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-300.ttf', fontWeight: 300 },
      { filename: 'poppins-v22-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-500.ttf', fontWeight: 500 },
      { filename: 'poppins-v22-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-600.ttf', fontWeight: 600 },
      { filename: 'poppins-v22-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-700.ttf', fontWeight: 700 },
      { filename: 'poppins-v22-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-800.ttf', fontWeight: 800 },
      { filename: 'poppins-v22-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-900.ttf', fontWeight: 900 },
      { filename: 'poppins-v22-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'poppins-v22-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'sans-serif',
    dir: 'raleway-v34-latin',
    family: 'Raleway',
    fonts: [
      { filename: 'raleway-v34-latin-100.ttf', fontWeight: 100 },
      { filename: 'raleway-v34-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-200.ttf', fontWeight: 200 },
      { filename: 'raleway-v34-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-300.ttf', fontWeight: 300 },
      { filename: 'raleway-v34-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-500.ttf', fontWeight: 500 },
      { filename: 'raleway-v34-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-600.ttf', fontWeight: 600 },
      { filename: 'raleway-v34-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-700.ttf', fontWeight: 700 },
      { filename: 'raleway-v34-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-800.ttf', fontWeight: 800 },
      { filename: 'raleway-v34-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-900.ttf', fontWeight: 900 },
      { filename: 'raleway-v34-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'raleway-v34-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'sans-serif',
    dir: 'roboto-condensed-v27-latin',
    family: 'Roboto Condensed',
    fonts: [
      { filename: 'roboto-condensed-v27-latin-100.ttf', fontWeight: 100 },
      { filename: 'roboto-condensed-v27-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-200.ttf', fontWeight: 200 },
      { filename: 'roboto-condensed-v27-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-300.ttf', fontWeight: 300 },
      { filename: 'roboto-condensed-v27-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-500.ttf', fontWeight: 500 },
      { filename: 'roboto-condensed-v27-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-600.ttf', fontWeight: 600 },
      { filename: 'roboto-condensed-v27-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-700.ttf', fontWeight: 700 },
      { filename: 'roboto-condensed-v27-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-800.ttf', fontWeight: 800 },
      { filename: 'roboto-condensed-v27-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-900.ttf', fontWeight: 900 },
      { filename: 'roboto-condensed-v27-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'roboto-condensed-v27-latin-regular.ttf', fontWeight: 400 },
    ],
  },
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
      { filename: 'roboto-v47-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'roboto-v47-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'bitter-v36-latin',
    family: 'Bitter',
    fonts: [
      { filename: 'bitter-v36-latin-100.ttf', fontWeight: 100 },
      { filename: 'bitter-v36-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-200.ttf', fontWeight: 200 },
      { filename: 'bitter-v36-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-300.ttf', fontWeight: 300 },
      { filename: 'bitter-v36-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-500.ttf', fontWeight: 500 },
      { filename: 'bitter-v36-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-600.ttf', fontWeight: 600 },
      { filename: 'bitter-v36-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-700.ttf', fontWeight: 700 },
      { filename: 'bitter-v36-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-800.ttf', fontWeight: 800 },
      { filename: 'bitter-v36-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-900.ttf', fontWeight: 900 },
      { filename: 'bitter-v36-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'bitter-v36-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'crimson-text-v19-latin',
    family: 'Crimson Text',
    fonts: [
      { filename: 'crimson-text-v19-latin-600.ttf', fontWeight: 600 },
      { filename: 'crimson-text-v19-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'crimson-text-v19-latin-700.ttf', fontWeight: 700 },
      { filename: 'crimson-text-v19-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'crimson-text-v19-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'crimson-text-v19-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'eb-garamond-v30-latin',
    family: 'EB Garamond',
    fonts: [
      { filename: 'eb-garamond-v30-latin-500.ttf', fontWeight: 500 },
      { filename: 'eb-garamond-v30-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'eb-garamond-v30-latin-600.ttf', fontWeight: 600 },
      { filename: 'eb-garamond-v30-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'eb-garamond-v30-latin-700.ttf', fontWeight: 700 },
      { filename: 'eb-garamond-v30-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'eb-garamond-v30-latin-800.ttf', fontWeight: 800 },
      { filename: 'eb-garamond-v30-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'eb-garamond-v30-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'eb-garamond-v30-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'libre-baskerville-v14-latin',
    family: 'Libre Baskerville',
    fonts: [
      { filename: 'libre-baskerville-v14-latin-700.ttf', fontWeight: 700 },
      { filename: 'libre-baskerville-v14-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'libre-baskerville-v14-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'lora-v35-latin',
    family: 'Lora',
    fonts: [
      { filename: 'lora-v35-latin-500.ttf', fontWeight: 500 },
      { filename: 'lora-v35-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'lora-v35-latin-600.ttf', fontWeight: 600 },
      { filename: 'lora-v35-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'lora-v35-latin-700.ttf', fontWeight: 700 },
      { filename: 'lora-v35-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'lora-v35-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'lora-v35-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'merriweather-v30-latin',
    family: 'Merriweather',
    fonts: [
      { filename: 'merriweather-v30-latin-300.ttf', fontWeight: 300 },
      { filename: 'merriweather-v30-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'merriweather-v30-latin-700.ttf', fontWeight: 700 },
      { filename: 'merriweather-v30-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'merriweather-v30-latin-900.ttf', fontWeight: 900 },
      { filename: 'merriweather-v30-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'merriweather-v30-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'merriweather-v30-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'noto-serif-v23-latin',
    family: 'Noto Serif',
    fonts: [
      { filename: 'noto-serif-v23-latin-100.ttf', fontWeight: 100 },
      { filename: 'noto-serif-v23-latin-100italic.ttf', fontWeight: 100, fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-200.ttf', fontWeight: 200 },
      { filename: 'noto-serif-v23-latin-200italic.ttf', fontWeight: 200, fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-300.ttf', fontWeight: 300 },
      { filename: 'noto-serif-v23-latin-300italic.ttf', fontWeight: 300, fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-500.ttf', fontWeight: 500 },
      { filename: 'noto-serif-v23-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-600.ttf', fontWeight: 600 },
      { filename: 'noto-serif-v23-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-700.ttf', fontWeight: 700 },
      { filename: 'noto-serif-v23-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-800.ttf', fontWeight: 800 },
      { filename: 'noto-serif-v23-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-900.ttf', fontWeight: 900 },
      { filename: 'noto-serif-v23-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'noto-serif-v23-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'playfair-display-v37-latin',
    family: 'Playfair Display',
    fonts: [
      { filename: 'playfair-display-v37-latin-500.ttf', fontWeight: 500 },
      { filename: 'playfair-display-v37-latin-500italic.ttf', fontWeight: 500, fontStyle: 'italic' },
      { filename: 'playfair-display-v37-latin-600.ttf', fontWeight: 600 },
      { filename: 'playfair-display-v37-latin-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
      { filename: 'playfair-display-v37-latin-700.ttf', fontWeight: 700 },
      { filename: 'playfair-display-v37-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'playfair-display-v37-latin-800.ttf', fontWeight: 800 },
      { filename: 'playfair-display-v37-latin-800italic.ttf', fontWeight: 800, fontStyle: 'italic' },
      { filename: 'playfair-display-v37-latin-900.ttf', fontWeight: 900 },
      { filename: 'playfair-display-v37-latin-900italic.ttf', fontWeight: 900, fontStyle: 'italic' },
      { filename: 'playfair-display-v37-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'playfair-display-v37-latin-regular.ttf', fontWeight: 400 },
    ],
  },
  {
    type: 'serif',
    dir: 'pt-serif-v18-latin',
    family: 'PT Serif',
    fonts: [
      { filename: 'pt-serif-v18-latin-700.ttf', fontWeight: 700 },
      { filename: 'pt-serif-v18-latin-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
      { filename: 'pt-serif-v18-latin-italic.ttf', fontStyle: 'italic' },
      { filename: 'pt-serif-v18-latin-regular.ttf', fontWeight: 400 },
    ],
  },
];

/**
 * Creates a path to the font file using fontsDirUrl if specified, falling back to the GitHub Pages site otherwise.
 */
const createFontSrc = (fontsDirUrl: string | undefined, family: FontFilesDefinition, filename: string) => {
  const src = fontsDirUrl
    ? `${fontsDirUrl}${fontsDirUrl.endsWith('/') ? '' : '/'}${filename}`
    : `${defaultFontsCdnUrl}${defaultFontsCdnUrl.endsWith('/') ? '' : '/'}${family.type}/${family.dir}/${filename}`;
  return src;
};

/**
 * Allows drop-in support for common font families. See documentation for `Fonts.load()` for more info.
 *
 * You can download TTF and WOFF fonts here: https://gwfh.mranftl.com/fonts
 *
 * For additional font support, see https://react-pdf.org/fonts
 */
export class Fonts {
  public static mono = {
    courierPrime: 'Courier Prime',
    dmMono: 'DM Mono',
    jetbrainsMono: 'JetBrains Mono',
    robotoMono: 'Roboto Mono',
    sourceCodePro: 'Source Code Pro',
    spaceMono: 'Space Mono',
    ubuntuMono: 'Ubuntu Mono',
  };

  public static sansSerif = {
    inter: 'Inter',
    lato: 'Lato',
    montserrat: 'Montserrat',
    notoSans: 'Noto Sans',
    openSans: 'Open Sans',
    poppins: 'Poppins',
    raleway: 'Raleway',
    robotoCondensed: 'Roboto Condensed',
    roboto: 'Roboto',
  };

  public static serif = {
    bitter: 'Bitter',
    crimsonText: 'Crimson Text',
    ebGaramond: 'EB Garamond',
    libreBaskerville: 'Libre Baskerville',
    lora: 'Lora',
    merriweather: 'Merriweather',
    notoSerif: 'Noto Serif',
    playfairDisplay: 'Playfair Display',
    ptSerif: 'PT Serif',
  };

  public static emojis = {
    /**
     * Twemoji emoji source that can be passed into `Font.registerEmojiSource()`.
     *
     * Emoji source GitHub project: https://github.com/twitter/twemoji
     *
     * @param size Default `72`.
     * @param version Version string. Default `14.0.2`. See all releases here: https://github.com/twitter/twemoji/releases
     */
    twemoji: (size: number = 72, version: string = '14.0.2') => ({
      format: 'png',
      url: `https://cdnjs.cloudflare.com/ajax/libs/twemoji/${version}/${size}x${size}/`,
    }),
    /**
     * JoyPixels emoji source that can be passed into `Font.registerEmojiSource()`.
     *
     * Emoji source GitHub project: https://github.com/joypixels/emoji-toolkit
     *
     * @param size `32` or `64`. Default `64`.
     * @param version Version string. Default `9.0`. See all releases here: https://github.com/joypixels/emoji-toolkit/releases
     */
    joyPixels: (size: number = 64, version: string = '9.0') => ({
      format: 'png',
      url: `https://cdn.jsdelivr.net/joypixels/assets/${version}/png/unicode/${size}/`,
    }),
    /**
     * OpenMoji Color emoji source that can be passed into `Font.registerEmojiSource()`.
     *
     * Emoji source GitHub project: https://github.com/hfg-gmuend/openmoji
     *
     * @param size `72` or `618`. Default `72`.
     * @param version Version string. Default `15.1.0`. See all version tags here: https://github.com/hfg-gmuend/openmoji/releases
     */
    openMojiColor: (size: number = 72, version: string = '15.1.0') => ({
      format: 'png',
      builder: (code: string) => {
        return `https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@${version}/color/${size}x${size}/${code.toUpperCase()}.png`;
      },
    }),
    /**
     * OpenMoji Black emoji source that can be passed into `Font.registerEmojiSource()`.
     *
     * Emoji source GitHub project: https://github.com/hfg-gmuend/openmoji
     *
     * @param size `72` or `618`. Default `72`.
     * @param version Version string. Default `15.1.0`. See all version tags here: https://github.com/hfg-gmuend/openmoji/releases
     */
    openMojiBlack: (size: number = 72, version: string = '15.1.0') => ({
      format: 'png',
      builder: (code: string) => {
        return `https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@${version}/black/${size}x${size}/${code.toUpperCase()}.png`;
      },
    }),
    /**
     * NotoEmoji emoji source that can be passed into `Font.registerEmojiSource()`.
     *
     * Emoji source GitHub project: https://github.com/googlefonts/noto-emoji
     *
     * @param size `32`, `72`, `128`, or `512`. Default `72`.
     * @param version Version string. Default `v2.047`. See all versions tags here: https://github.com/googlefonts/noto-emoji/releases
     */
    notoEmoji: (size: number = 72, version: string = 'v2.047') => ({
      format: 'png',
      builder: (code: string) => {
        return `https://cdn.jsdelivr.net/gh/googlefonts/noto-emoji@${version}/png/${size}/emoji_u${code.split('-').join('_')}.png`;
      },
    }),
  };

  /**
   * Constructs a BulkLoad object compatible with React PDF for the provided font family, specifying all font files
   * required for Latin support with bold and italics (if available for the font).
   * Pass the returned BulkLoad object to `Font.register()`.
   *
   * All supported font family names are defined in Fonts, such as `Fonts.sansSerif.roboto`.
   *
   * By default, the fonts are loaded from cdn.jsdelivr.net, allowing you to drop in
   * font support very quickly. However, you may want to self-host the font files at some point. As such, you can
   * provide the `fontsDirUrl` prop pointing to the root path where your font files are located, and the fonts will
   * be loaded from there instead. The expected font files for each family can be found in the
   * [project repo](https://github.com/justinmahar/react-pdf-builder/tree/master/public/fonts).
   *
   * You can download TTF and WOFF fonts here: https://gwfh.mranftl.com/fonts
   *
   * For additional font support, see https://react-pdf.org/fonts
   *
   * @param fontFamily The name of the font family to load, defined by `Fonts`.
   * @param fontsDirUrl Optional. URL path where font files are located. Otherwise, fonts will be loaded from cdn.jsdelivr.net.
   * @returns A BulkLoad compatible with React PDF, that can be passed into `Font.register()`
   */
  public static load = (fontFamily: string, fontsDirUrl?: string): BulkLoad | undefined => {
    const fontDefinition = fontDefinitions.find((d) => d.family.toLowerCase() === fontFamily.toLowerCase());
    if (fontDefinition) {
      const bulkLoad: BulkLoad = {
        family: fontDefinition.family,
        fonts: fontDefinition.fonts.map((f) => {
          const src = createFontSrc(fontsDirUrl, fontDefinition, f.filename);
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

  /**
   * To disable word hyphenation, pass this function into `Font.registerHyphenationCallback()`.
   *
   * Pass the actual function (do not call it), like so:
   *
   * ```
   * Font.registerHyphenationCallback(Fonts.noHyphenation);
   * ```
   *
   * Read more here: https://react-pdf.org/fonts#registerhyphenationcallback
   */
  public static noHyphenation = (word: string) => [word];
}
