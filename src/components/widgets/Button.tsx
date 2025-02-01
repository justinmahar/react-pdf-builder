import { Link, View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { PDFSafeChildren } from '../PDFSafeChildren';

export interface ButtonProps extends ViewProps {
  href?: string;
  variant?: string;
  children?: any;
  pill?: boolean;
}

export const Button = ({ href, children, variant, pill, ...props }: ButtonProps) => {
  const backgroundColor = variant ? defaultVariantBackgrounds[variant] : defaultVariantBackgrounds['primary'];
  const color = variant ? defaultVariantForegrounds[variant] : defaultVariantForegrounds['primary'];
  const hasHref = typeof href !== 'undefined';
  const child = (
    <PDFSafeChildren textStyle={hasHref ? { textDecoration: 'no-underline' as any } : undefined}>
      {children}
    </PDFSafeChildren>
  );

  if (hasHref) {
    return (
      <Link href={href}>
        <View
          {...props}
          style={{
            color,
            backgroundColor,
            padding: 10,
            width: 150,
            textAlign: 'center',
            borderRadius: pill ? '50%' : 5,
            ...props.style,
          }}
        >
          {child}
        </View>
      </Link>
    );
  } else {
    return (
      <View
        {...props}
        style={{
          color,
          backgroundColor,
          padding: 10,
          width: 150,
          textAlign: 'center',
          borderRadius: pill ? '50%' : 5,
          ...props.style,
        }}
      >
        {child}
      </View>
    );
  }
};

const defaultVariantBackgrounds: Record<string, string> = {
  primary: '#007BFF',
  secondary: '#6C757D',
  success: '#28A745',
  danger: '#DC3445',
  warning: '#FFC106',
  info: '#19A1B8',
  light: '#F8F9FA',
  dark: '#343A41',
  link: 'transparent',
};

const defaultVariantForegrounds: Record<string, string> = {
  primary: 'white',
  secondary: 'white',
  success: 'white',
  danger: 'white',
  warning: 'black',
  info: 'white',
  light: 'black',
  dark: 'white',
  link: '#007BFF',
};
