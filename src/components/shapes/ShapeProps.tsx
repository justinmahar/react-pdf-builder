import { LinearGradientProps, RadialGradientProps, SVGProps } from '@react-pdf/renderer';
import { GradientStop, GradientType } from './Gradients';

export interface ShapeProps extends SVGProps {
  linearGradientProps?: Partial<LinearGradientProps>;
  radialGradientProps?: Partial<RadialGradientProps>;
  gradient?: GradientStop[] | string[];
  gradientType?: GradientType;
  linearGradientCoords?: { x1: number; y1: number; x2: number; y2: number };
  radialGradientCoords?: { x: number; y: number };
  className?: string;
}
