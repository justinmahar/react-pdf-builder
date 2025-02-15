<h2 align="center">
  📄 React PDF Builder
</h2>
<h3 align="center">
  Build beautiful PDF documents in React.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-pdf-builder" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-pdf-builder.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-pdf-builder/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-pdf-builder/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-pdf-builder/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>
</p>
<!-- [lock:donate-badges] 🚫--------------------------------------- -->
<p align="center">
  <a href="https://paypal.me/thejustinmahar/5"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>
<!-- [/lock:donate-badges] ---------------------------------------🚫 -->

<h3><a href="https://justinmahar.github.io/react-pdf-builder/?path=/story/demo-demo--demo">👁️ View live demo</a></h3>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-usage-guide--docs)**.

## Overview

React PDF Builder is a fully themeable component framework built on [react-pdf](https://react-pdf.org/) and [pdfkit](https://pdfkit.org/).

The framework includes 30+ ready-to-use components for headings, paragraphs, lists, tables, buttons, cards, and more.

If you want to build beautiful PDFs in React without starting from scratch, this is the library for you!

### Features include:

- **🌟 30+ pre-made components to make building PDFs a breeze**
  - Styled and done for you, so you can start building right away.
- **🎨 Fully themeable with built-in light and dark modes**
  - All colors and component props can be overridden easily.
- **📏 Scalable to any page size**
  - Easily scale all components to match your preferred size.
- **🖋️ Drop-in support for 25 commonly used fonts, with bold & italics**
  - Easily use popular fonts like Roboto, Lato, Raleway, or Montserrat—including formatting styles!
- **🥳 Support for 5 different emoji sets**
  - Enable 5 different emoji sets by JoyPixels, Noto Emoji, OpenMoji, or Twemoji, with one line of code.
- **📊 Table support with page wrapping, theming, and colspans**
  - Need tables? Look no further. Beautiful tables are at your fingertips.
- **🟦 Easy to use gradient backdrops for your pages**
  - Quickly and easily spruce up your PDF with gradient backdrops, with optional pre-made decorators.
- **📦 Box layout system using Flexbox**
  - If you're familiar with CSS Flexbox, you'll feel right at home using the Box component to lay out your design.
- **🔧 Built on well-maintained libraries**
  - This component framework is built on [react-pdf](https://react-pdf.org/) and [pdfkit](https://pdfkit.org/), which are maintained by only the best and brightest.
- **🚀 Much more!** 
  - Dive into the [documentation](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-usage-guide--docs) to learn more!

<!-- [lock:donate] 🚫--------------------------------------- -->

## Donate 

If this project helped save you time, please consider buying me a coffee, which powers my development (and life). Your support is much appreciated!

<a href="https://github.com/sponsors/justinmahar"><img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>

<!-- [/lock:donate] ---------------------------------------🚫 -->

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i @react-pdf/renderer react-pdf-builder 
```

> Note: This project has a dependency on [@react-pdf/renderer](https://www.npmjs.com/package/@react-pdf/renderer). Make sure it's installed along with `react-pdf-builder`.

## Quick Start

Below is a component that renders a standard A4 size PDF with a heading, paragraph, card, and table. You can use this as a starting point.

Most components can be themed using the `swatch` prop, and custom styled using `style` and CSS, or even custom class names.

Use `LETTER` page size for 8.5x11" paper used in the USA.

```jsx
import React from 'react';
import { Box, Button, Card, CardBody, CardHeader, Div, Heading3, Page, Paragraph, Table, TableCell, TableRow, ThemedPage, PDFThemeProvider } from 'react-pdf-builder'
import { Document, PDFViewer } from '@react-pdf/renderer';

export const QuickStart = () => {
  const roboto = Fonts.load(Fonts.sansSerif.roboto);
  Font.register(roboto);
  Font.registerEmojiSource(Fonts.emojis.joyPixels());
  const theme = Themes.default.build({
    scale: 1,
    override: {
      classNames: { 'my-custom-class': { color: 'white', backgroundColor: 'darkblue', padding: 10 } },
    },
  });
  return (
    <PDFViewer style={{ height: 700, width: 500 }}>
      <Document>
        <PDFThemeProvider theme={theme}>
          <ThemedPage size="A4" style={{ fontFamily: roboto.family }}>
            <Heading3 rule>Hello, world!</Heading3>
            <Paragraph>Let's get started building the PDF.</Paragraph>
            <Box dir="y" className="gap-3">
              <Box className="gap-3">
                <Card swatch="gray300" className="mb-0 w-100">
                  <CardHeader>Example</CardHeader>
                  <CardBody className="d-flex flex-column gap-2">
                    This is a card with some text inside as an example 👍
                  </CardBody>
                </Card>
              </Box>
              <Table bordered inverseStriped swatch="primary" className="rounded mb-0">
                <TableRow swatch="primary" className="fw-bold">
                  <TableCell>Header 1</TableCell>
                  <TableCell>Header 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cell A</TableCell>
                  <TableCell>Cell Y</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cell B</TableCell>
                  <TableCell>Cell Z</TableCell>
                </TableRow>
              </Table>
              <Box className="justify-content-end">
                <Button href="#">Button</Button>
              </Box>
              <Div className="my-custom-class">This has a custom class applied.</Div>
            </Box>
          </ThemedPage>
        </PDFThemeProvider>
      </Document>
    </PDFViewer>
  );
};
```

This will create the following PDF:

<a href="https://justinmahar.github.io/react-pdf-builder/?path=/story/demo-demo--quick-start"><img src="https://justinmahar.github.io/react-pdf-builder/images/quick-start.png" width="400" border="1" /></a>

Click [here](https://justinmahar.github.io/react-pdf-builder/?path=/story/demo-demo--quick-start) to see a live demo of this quick start.

You can also see the <a href="https://justinmahar.github.io/react-pdf-builder/?path=/story/demo-demo--demo">main project demo</a> for a deeper look at what's possible with this library.

Read the full [usage guide here](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-usage-guide--docs).

<!-- [lock:typescript] 🚫--------------------------------------- -->

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

<!-- [/lock:typescript] ---------------------------------------🚫 -->

<!-- [lock:icon] 🚫--------------------------------------- -->

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

<!-- [/lock:icon] ---------------------------------------🚫 -->

<!-- [lock:contributing] 🚫--------------------------------------- -->

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

<!-- [/lock:contributing] ---------------------------------------🚫 -->

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-pdf-builder/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-pdf-builder/stargazers): [👉⭐](https://github.com/justinmahar/react-pdf-builder/stargazers)

<!-- [lock:support] 🚫--------------------------------------- -->
Want to support the project? Feel free to grab me a coffee, which is my main source of fuel for development:

<a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>

<!-- [/lock:support] ---------------------------------------🚫 -->

## License

See [LICENSE.md](https://justinmahar.github.io/react-pdf-builder/?path=/docs/license--docs).