import React from 'react';
import { RectangleShape, RectangleShapeProps } from './RectangleShape';

export interface LineShapeProps extends RectangleShapeProps {
  width?: number;
  length?: number;
}

export const LineShape = ({ width = 5, length = 100, ...props }: LineShapeProps) => {
  return <RectangleShape width={length} height={width} {...props} />;
};
