import { View, ViewProps } from '@react-pdf/renderer';
import React from 'react';
import { ListItemWrapper } from './ListItemWrapper';
import { BuilderChildren } from './BuilderChildren';

export interface UnorderedListProps extends ViewProps {
  children: any;
}

export const UnorderedList = ({ children, ...props }: UnorderedListProps) => {
  const childArray = Array.isArray(children) ? children : [children];

  const liElements: JSX.Element[] = childArray.map((c, i) => (
    <ListItemWrapper key={'ul-li-' + i}>
      <BuilderChildren>{c}</BuilderChildren>
    </ListItemWrapper>
  ));

  return (
    <View {...props} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, ...props.style }}>
      {liElements}
    </View>
  );
};
