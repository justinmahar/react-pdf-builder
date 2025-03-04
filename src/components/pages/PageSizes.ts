import { Page } from '@react-pdf/renderer';

const pageSizes = {
  '4A0': [4767.87, 6740.79],
  '2A0': [3370.39, 4767.87],
  A0: [2383.94, 3370.39],
  A1: [1683.78, 2383.94],
  A2: [1190.55, 1683.78],
  A3: [841.89, 1190.55],
  A4: [595.28, 841.89],
  A5: [419.53, 595.28],
  A6: [297.64, 419.53],
  A7: [209.76, 297.64],
  A8: [147.4, 209.76],
  A9: [104.88, 147.4],
  A10: [73.7, 104.88],
  B0: [2834.65, 4008.19],
  B1: [2004.09, 2834.65],
  B2: [1417.32, 2004.09],
  B3: [1000.63, 1417.32],
  B4: [708.66, 1000.63],
  B5: [498.9, 708.66],
  B6: [354.33, 498.9],
  B7: [249.45, 354.33],
  B8: [175.75, 249.45],
  B9: [124.72, 175.75],
  B10: [87.87, 124.72],
  C0: [2599.37, 3676.54],
  C1: [1836.85, 2599.37],
  C2: [1298.27, 1836.85],
  C3: [918.43, 1298.27],
  C4: [649.13, 918.43],
  C5: [459.21, 649.13],
  C6: [323.15, 459.21],
  C7: [229.61, 323.15],
  C8: [161.57, 229.61],
  C9: [113.39, 161.57],
  C10: [79.37, 113.39],
  RA0: [2437.8, 3458.27],
  RA1: [1729.13, 2437.8],
  RA2: [1218.9, 1729.13],
  RA3: [864.57, 1218.9],
  RA4: [609.45, 864.57],
  SRA0: [2551.18, 3628.35],
  SRA1: [1814.17, 2551.18],
  SRA2: [1275.59, 1814.17],
  SRA3: [907.09, 1275.59],
  SRA4: [637.8, 907.09],
  EXECUTIVE: [521.86, 756.0],
  FOLIO: [612.0, 936.0],
  LEGAL: [612.0, 1008.0],
  LETTER: [612.0, 792.0],
  TABLOID: [792.0, 1224.0],
  ID1: [153, 243],
};

export type PageSizeString = keyof typeof pageSizes;

/** Contains utilities for [page sizes](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-page-sizes--docs). */
export class PageSizes {
  public static VALID_ORIENTATIONS = ['portrait', 'landscape'];

  /**
   * Get page orientation. Defaults to portrait
   *
   * @param {Object} page object
   * @returns {string} page orientation
   */
  public static getOrientation = (page: Page) => {
    const value = page.props?.orientation || 'portrait';
    return PageSizes.VALID_ORIENTATIONS.includes(value) ? value : 'portrait';
  };

  /**
   * Return true if page is landscape
   *
   * @param {Object} page instance
   * @returns {boolean} is page landscape
   */
  public static isLandscape = (page: Page) => PageSizes.getOrientation(page) === 'landscape';

  // Page sizes for 72dpi. 72dpi is used internally by pdfkit.
  public static PAGE_SIZES = pageSizes;

  /**
   * Parses scalar value in value and unit pairs
   *
   * @param {string} value scalar value
   * @returns {Object} parsed value
   */
  public static parseValue = (value: string) => {
    const match = /^(-?\d*\.?\d+)(in|mm|cm|pt|px)?$/g.exec(value);

    return match ? { value: parseFloat(match[1]), unit: match[2] || 'pt' } : { value, unit: undefined };
  };

  /**
   * Transform given scalar value to 72dpi equivalent of size
   *
   * @param {string} value styles value
   * @param {number} inputDpi user defined dpi
   * @returns {Object} transformed value
   */
  public static transformUnit = (value: string, inputDpi: number) => {
    const scalar = PageSizes.parseValue(value);

    const outputDpi = 72;
    const mmFactor = (1 / 25.4) * outputDpi;
    const cmFactor = (1 / 2.54) * outputDpi;

    switch (scalar.unit) {
      case 'in':
        return scalar.value * outputDpi;
      case 'mm':
        return scalar.value * mmFactor;
      case 'cm':
        return scalar.value * cmFactor;
      case 'px':
        return Math.round(scalar.value * (outputDpi / inputDpi));
      default:
        return scalar.value;
    }
  };

  public static transformUnits = ({ width, height }: any, dpi: number) => ({
    width: PageSizes.transformUnit(width, dpi),
    height: PageSizes.transformUnit(height, dpi),
  });

  /**
   * Transforms array into size object
   *
   * @param {number[] | string[]} v array
   * @returns {{ width: number | string, height: number | string }} size object with width and height
   */
  public static toSizeObject = (v: number[] | string[]) => ({ width: v[0], height: v[1] });

  /**
   * Flip size object
   *
   * @param {{ width: number, height: number }} v size object
   * @returns {{ width: number, height: number }} flipped size object
   */
  public static flipSizeObject = (v: any) => ({ width: v.height, height: v.width });

  /**
   * Returns size object from a given string
   *
   * @param {string} v page size string
   * @returns {{ width: number, height: number }} size object with width and height
   */
  public static getStringSize = (v: PageSizeString) => {
    return PageSizes.toSizeObject(PageSizes.PAGE_SIZES[v]);
  };

  /**
   * Returns size object from a single number
   *
   * @param {number|string} n page size number
   * @returns {{ width: number|string, height: number|string }} size object with width and height
   */
  public static getNumberSize = (n: number | string) => PageSizes.toSizeObject([n, n] as any);

  /**
   * Return page size in an object { width, height }
   *
   * @param {Object} page instance
   * @returns {{ width: number, height: number }} size object with width and height
   */
  public static getSize = (page: Page) => {
    const value: PageSizeString = (page.props?.size || 'A4') as PageSizeString;
    const dpi = parseFloat(`${page.props?.dpi || 72}`);

    const type = typeof value;

    /**
     * @type {{ width: number, height: number }}
     */
    let size;
    if (type === 'string') {
      size = PageSizes.getStringSize(value);
    } else if (Array.isArray(value)) {
      size = PageSizes.transformUnits(PageSizes.toSizeObject(value), dpi);
    } else if (type === 'number') {
      size = PageSizes.transformUnits(PageSizes.getNumberSize(value), dpi);
    } else {
      size = PageSizes.transformUnits(value, dpi);
    }

    return PageSizes.isLandscape(page) ? PageSizes.flipSizeObject(size) : size;
  };
}
