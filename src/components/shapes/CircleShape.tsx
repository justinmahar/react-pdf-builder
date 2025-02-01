import React from 'react';
import { EllipseShape, EllipseShapeProps } from './EllipseShape';

export interface CircleShapeProps extends EllipseShapeProps {
  size?: number;
}

export const CircleShape = ({ size, ...props }: CircleShapeProps) => {
  return <EllipseShape width={size} height={size} {...props} />;
};
