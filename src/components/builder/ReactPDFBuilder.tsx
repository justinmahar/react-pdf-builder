import React from 'react';
import { Card, CardProps } from '../card/Card';
import { Theme } from '../theme/Theme';
import { CardBody, CardBodyProps } from '../card/CardBody';
import { CardHeader, CardHeaderProps } from '../card/CardHeader';
import { ThemeBuilder } from '../theme/ThemeBuilder';

export class ReactPDFBuilder {
  public Card;
  public CardBody;
  public CardHeader;
  constructor(...theme: Theme[]) {
    const t = ThemeBuilder.mergeThemes(theme);
    this.Card = (props: CardProps) => <Card theme={t} {...props} />;
    this.CardBody = (props: CardBodyProps) => <CardBody theme={t} {...props} />;
    this.CardHeader = (props: CardHeaderProps) => <CardHeader theme={t} {...props} />;
  }
}
