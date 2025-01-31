import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { BuilderChildren } from './BuilderChildren';

export interface ButtonProps extends ViewProps {
  variant?: string;
  children: any;
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  const backgroundColor = variant ? defaultVariantBackgrounds[variant] : defaultVariantBackgrounds['primary'];
  const color = variant ? defaultVariantForegrounds[variant] : defaultVariantForegrounds['primary'];

  return (
    <View
      style={{
        color,
        backgroundColor,
        padding: 10,
        width: 150,
        textAlign: 'center',
        borderRadius: 3,
        ...props.style,
      }}
    >
      <BuilderChildren>{children}</BuilderChildren>
    </View>
  );
};

const defaultVariantBackgrounds: Record<string, string> = {
  primary: '#0E6EFD',
  secondary: '#6C757D',
  success: '#198754',
  danger: '#DC3445',
  warning: '#FFC106',
  info: '#0FCAF0',
  light: '#F8F9FA',
  dark: '#212429',
};

const defaultVariantForegrounds: Record<string, string> = {
  primary: 'white',
  secondary: 'white',
  success: 'white',
  danger: 'white',
  warning: 'black',
  info: 'black',
  light: 'black',
  dark: 'white',
};
