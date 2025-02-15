import * as React from 'react';
import { ElementProps } from 'react-html-props';
import { Themes } from '../../themes/Themes';
import { Theme } from '../../themes/Theme';

type TemplateType = Theme;
const defaultValue: TemplateType = Themes.default.build();

export const TemplateContext = React.createContext<TemplateType>(defaultValue);

export function PDFThemeProvider({ children }: ElementProps): JSX.Element {
  return <TemplateContext.Provider value={defaultValue}>{children}</TemplateContext.Provider>;
}

export const usePDFThemeContext = (): TemplateType => {
  return React.useContext(TemplateContext);
};
