import React from 'react';
import { RectangleShape, RectangleShapeProps } from './RectangleShape';

export interface SquareShapeProps extends RectangleShapeProps {
  size?: number;
}

export const SquareShape = ({ size, ...props }: SquareShapeProps) => {
  return <RectangleShape width={size} height={size} {...props} />;
};
