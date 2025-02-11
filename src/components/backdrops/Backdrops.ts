import { PageSizeString, PageSizes } from '../pages/PageSizes';

/**
 * Contains utility functions for working with backdrops.
 */
export class Backdrops {
  public static getDimensions(
    size: PageSizeString | { width: number; height: number },
    orientation?: 'portrait' | 'landscape',
  ): { width: number; height: number } {
    let wh: { width: number; height: number };
    if (typeof size === 'string') {
      const stringSize = PageSizes.getStringSize(size);
      wh = {
        width: typeof stringSize.width === 'number' ? stringSize.width : parseFloat(stringSize.width),
        height: typeof stringSize.height === 'number' ? stringSize.height : parseFloat(stringSize.height),
      };
    } else {
      wh = size;
    }
    if (orientation === 'landscape') {
      wh = PageSizes.flipSizeObject(wh);
    }
    return wh;
  }
}
