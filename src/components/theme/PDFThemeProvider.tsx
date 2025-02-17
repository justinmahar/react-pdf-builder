import * as React from 'react';
import { ElementProps } from 'react-html-props';
import { Themes } from '../../themes/Themes';
import { Theme } from '../../themes/Theme';

const defaultValue: Theme = Themes.default.build();
export const PDFThemeProviderContext = React.createContext<Theme>(defaultValue);

export interface PDFThemeProviderProps extends ElementProps {
  theme: Theme;
}

/**
 * Provider used to specify the theme used by all React PDF Builder components.
 */
export function PDFThemeProvider({ children, theme }: PDFThemeProviderProps): JSX.Element {
  return <PDFThemeProviderContext.Provider value={theme}>{children}</PDFThemeProviderContext.Provider>;
}

export const usePDFThemeContext = (): Theme => {
  return React.useContext(PDFThemeProviderContext);
};
