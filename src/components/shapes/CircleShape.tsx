import React from 'react';
import { EllipseShape, EllipseShapeProps } from './EllipseShape';

export interface CircleShapeProps extends EllipseShapeProps {
  /** Optional. Width and height of circle in points. */
  size?: number;
}

/**
 * Read the [full documentation for CircleShape](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-shapes-circleshape--docs)
 */
export const CircleShape = ({ size, ...props }: CircleShapeProps) => {
  return <EllipseShape width={size} height={size} {...props} />;
};
