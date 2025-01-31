import { Box } from './parts/Box';
import { Button } from './parts/Button';
import { Heading1 } from './parts/Heading1';
import { Heading2 } from './parts/Heading2';
import { Heading3 } from './parts/Heading3';
import { Heading4 } from './parts/Heading4';
import { Heading5 } from './parts/Heading5';
import { Heading6 } from './parts/Heading6';
import { ListItem } from './parts/ListItem';
import { OrderedList } from './parts/OrderedList';
import { Paragraph } from './parts/Paragraph';
import { UnorderedList } from './parts/UnorderedList';

export interface ReactPDFBuilderConfig {
  headingStartSize: number;
  headingStepSize: number;
}

export class ReactPDFBuilder {
  public static defaultConfig: ReactPDFBuilderConfig = {
    headingStartSize: 18,
    headingStepSize: 4,
  };

  public Box;
  public Button;
  public Heading1;
  public Heading2;
  public Heading3;
  public Heading4;
  public Heading5;
  public Heading6;
  public ListItem;
  public OrderedList;
  public Paragraph;
  public UnorderedList;

  constructor(config: Partial<ReactPDFBuilderConfig> = ReactPDFBuilder.defaultConfig) {
    this.Box = Box;
    this.Button = Button;
    this.Heading1 = Heading1;
    this.Heading2 = Heading2;
    this.Heading3 = Heading3;
    this.Heading4 = Heading4;
    this.Heading5 = Heading5;
    this.Heading6 = Heading6;
    this.ListItem = ListItem;
    this.OrderedList = OrderedList;
    this.Paragraph = Paragraph;
    this.UnorderedList = UnorderedList;
  }
}
