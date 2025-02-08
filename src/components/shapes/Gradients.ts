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
      case GradientType.rightToLeft:
        gradientCoords = { x1: 1, y1: 0.5, x2: 0, y2: 0.5 };
        break;
      case GradientType.topToBottom:
        gradientCoords = { x1: 0.5, y1: 0, x2: 0.5, y2: 1 };
        break;
      case GradientType.bottomToTop:
        gradientCoords = { x1: 0.5, y1: 1, x2: 0.5, y2: 0 };
        break;
      case GradientType.topLeftToBottomRight:
        gradientCoords = { x1: 0, y1: 0, x2: 1, y2: 1 };
        break;
      case GradientType.topRightToBottomLeft:
        gradientCoords = { x1: 1, y1: 0, x2: 0, y2: 1 };
        break;
      case GradientType.bottomLeftToTopRight:
        gradientCoords = { x1: 0, y1: 1, x2: 1, y2: 0 };
        break;
      case GradientType.bottomRightToTopLeft:
        gradientCoords = { x1: 1, y1: 1, x2: 0, y2: 0 };
        break;
    }
    return Gradients.safeLinearCoords(gradientCoords);
  }

  public static safeLinearCoords(coords: { x1: number; y1: number; x2: number; y2: number }) {
    return {
      x1: coords.x1 === 0 ? 0.000001 : coords.x1 === 1 ? 0.999999 : coords.x1,
      y1: coords.y1 === 0 ? 0.000001 : coords.y1 === 1 ? 0.999999 : coords.y1,
      x2: coords.x2 === 0 ? 0.000001 : coords.x2 === 1 ? 0.999999 : coords.x2,
      y2: coords.y2 === 0 ? 0.000001 : coords.y2 === 1 ? 0.999999 : coords.y2,
    };
  }

  public static safeRadialCoords(coords: { x: number; y: number }) {
    return {
      cx: coords.x === 0 ? 0.000001 : coords.x === 1 ? 0.999999 : coords.x,
      cy: coords.y === 0 ? 0.000001 : coords.y === 1 ? 0.999999 : coords.y,
    };
  }
}

export enum GradientType {
  leftToRight = 'leftToRight',
  rightToLeft = 'rightToLeft',
  topToBottom = 'topToBottom',
  bottomToTop = 'bottomToTop',
  topLeftToBottomRight = 'topLeftToBottomRight',
  bottomLeftToTopRight = 'bottomLeftToTopRight',
  bottomRightToTopLeft = 'bottomRightToTopLeft',
  topRightToBottomLeft = 'topRightToBottomLeft',
  radial = 'radial',
}

export interface GradientStop {
  offset: string | number;
  stopColor: string;
  stopOpacity?: string | number;
}
