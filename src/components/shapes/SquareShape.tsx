import React from 'react';
import { RectangleShape, RectangleShapeProps } from './RectangleShape';

export interface SquareShapeProps extends RectangleShapeProps {
  /** Optional. Width and height of square in points. */
  size?: number;
}

/**
 * Read the [full documentation for SquareShape](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-shapes-squareshape--docs)
 */
export const SquareShape = ({ size, ...props }: SquareShapeProps) => {
  return <RectangleShape width={size} height={size} {...props} />;
};
