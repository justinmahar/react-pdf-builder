import { LinearGradientProps, RadialGradientProps, SVGProps } from '@react-pdf/renderer';
import { GradientStop, GradientType } from './Gradients';

export interface ShapeProps extends SVGProps {
  linearGradientProps?: LinearGradientProps;
  radialGradientProps?: RadialGradientProps;
  gradient?: GradientStop[] | string[];
  gradientType?: GradientType;
}
