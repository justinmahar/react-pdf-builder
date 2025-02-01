export class Gradients {
  public static normalizeGradientStops(gradient?: GradientStop[] | string[]) {
    const gradientStops = (gradient ?? []).map((g, i, arr): GradientStop => {
      if (typeof g === 'string') {
        return {
          offset: `${Math.round((i / arr.length) * 100)}%`,
          stopColor: g,
        };
      }
      return g;
    });
    if (gradientStops.length === 1) {
      gradientStops.push({ offset: '100%', stopColor: gradientStops[0].stopColor });
    }
    return gradientStops;
  }

  public static toGradientCoords(gradientType: GradientType) {
    const leftToRight = { x1: 0, y1: 0.5, x2: 1, y2: 0.5 };
    let gradientCoords = leftToRight;
    switch (gradientType) {
      case GradientType.topToBottom:
        gradientCoords = { x1: 0.5, y1: 0, x2: 0.5, y2: 1 };
        break;
      case GradientType.topLeftToBottomRight:
        gradientCoords = { x1: 0, y1: 0, x2: 1, y2: 1 };
        break;
      case GradientType.bottomLeftToTopRight:
        gradientCoords = { x1: 0, y1: 1, x2: 1, y2: 0 };
        break;
    }
    return gradientCoords;
  }
}

export enum GradientType {
  leftToRight = 'leftToRight',
  topToBottom = 'topToBottom',
  topLeftToBottomRight = 'topLeftToBottomRight',
  bottomLeftToTopRight = 'bottomLeftToTopRight',
  radial = 'radial',
}

export interface GradientStop {
  offset: string | number;
  stopColor: string;
  stopOpacity?: string | number;
}
