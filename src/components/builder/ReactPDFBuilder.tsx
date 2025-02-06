import React from 'react';
import { Card, CardProps } from '../card/Card';
import { CardBody, CardBodyProps } from '../card/CardBody';
import { CardHeader, CardHeaderProps } from '../card/CardHeader';
import { Theme } from '../theme/Theme';

export class ReactPDFBuilder {
  public Card;
  public CardBody;
  public CardHeader;
  constructor(theme: Theme) {
    this.Card = (props: CardProps) => <Card theme={theme} {...props} />;
    this.CardBody = (props: CardBodyProps) => <CardBody theme={theme} {...props} />;
    this.CardHeader = (props: CardHeaderProps) => <CardHeader theme={theme} {...props} />;
  }
}
