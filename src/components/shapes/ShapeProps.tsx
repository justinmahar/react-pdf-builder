import { LinearGradientProps, RadialGradientProps, SVGProps } from '@react-pdf/renderer';
import { GradientStop, GradientType } from './Gradients';

export interface ShapeProps extends SVGProps {
  /** Optional. Props for the underlying SVG [LinearGradient](https://react-pdf.org/svg#lineargradient). Use for advanced gradient customization. */
  linearGradientProps?: Partial<LinearGradientProps>;
  /** Optional. Props for the underlying SVG [RadialGradient](https://react-pdf.org/svg#radialgradient). Use for advanced gradient customization. */
  radialGradientProps?: Partial<RadialGradientProps>;
  /** Optional. An array of custom gradient colors, or [gradient stops](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-gradientbackdrop--docs#gradient-stops). */
  gradient?: GradientStop[] | string[];
  /** Optional. The [type of gradient](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-gradientbackdrop--docs#gradient-types). Defaults to a linear gradient, `GradientType.topToBottom`. */
  gradientType?: GradientType;
  /** Optional. Specify two points defining the direction of the gradient. Values are normalized from `0` to `1`, `0` being left/top, `1` being right/bottom. Overrides the direction specified in the `gradientType` prop. */
  linearGradientCoords?: { x1: number; y1: number; x2: number; y2: number };
  /** Optional. Specify the location of the radial gradient. Values are normalized from `0` to `1`, `0` being left/top, `1` being right/bottom. Use in conjunction with a `gradientType` of `GradientType.radial`. */
  radialGradientCoords?: { x: number; y: number };
  /** Optional. Class name string used to style the component. [Class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) are defined in themes. */
  className?: string;
}
