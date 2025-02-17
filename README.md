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

Read the **[official documentation](https://justinmahar.github.io/react-pdf-builder/?path=/docs/home--docs)**.

## Overview

React PDF Builder is a fully themeable component framework built on [react-pdf](https://react-pdf.org/) and [pdfkit](https://pdfkit.org/).

The framework includes 30+ ready-to-use [components](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-overview--docs) for headings, paragraphs, lists, tables, buttons, cards, and more.

If you want to build beautiful PDFs in React without starting from scratch, this is the library for you!

### Features include:

- **🌟 30+ pre-made [components](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-overview--docs) to make building PDFs a breeze**
  - Styled and done for you, so you can start building right away.
- **🎨 Fully [themeable](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs) with built-in light and dark modes**
  - All colors and component props can be overridden easily, and class names are supported.
- **📏 Scalable to any page size**
  - Easily [scale](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#scaling-components-to-fit-pages) all components to match your preferred size.
- **🖋️ Drop-in support for 25 commonly used fonts, with bold & italics**
  - Easily use popular [fonts](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs) like Roboto, Lato, Raleway, or Montserrat—including formatting styles!
- **🥳 Support for 5 different emoji sets**
  - Enable 5 different [emoji sets](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs#adding-emoji-support) by JoyPixels, Noto Emoji, OpenMoji, or Twemoji, with one line of code.
- **📊 Table support with page wrapping, theming, and colspans**
  - Need tables? Look no further. [Beautiful tables](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs) are at your fingertips.
- **🟦 Easy to use gradient backdrops for your pages**
  - Quickly and easily spruce up your PDF with [gradient backdrops](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-gradientbackdrop--docs), with optional pre-made decorators.
- **📦 Box layout system using Flexbox**
  - If you're familiar with CSS Flexbox, you'll feel right at home using the [Box](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-box--docs) component to lay out your design.
- **🔧 Built on well-maintained libraries**
  - This component framework is built on [react-pdf](https://react-pdf.org/) and [pdfkit](https://pdfkit.org/), which are maintained by only the best and brightest.
- **🚀 Much more!** 
  - Dive into the [documentation](https://justinmahar.github.io/react-pdf-builder/?path=/docs/home--docs) to learn more!

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
- [Why use React PDF Builder?](#why-use-react-pdf-builder)
- [How to use React PDF Builder](#how-to-use-react-pdf-builder)
- [Components overview](#components-overview)
- [Themes](#themes)
- [Utility class names](#utility-class-names)
- [Fonts and formatting](#fonts-and-formatting)
- [Downloading PDFs](#downloading-pdfs)
- [Advanced](#advanced)
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

Below is a component that renders a standard [A4 size](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-page-sizes--docs) PDF with a heading, paragraph, button, and custom styled div. You can use this as a starting point.

Most components can be [themed](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs) using the `swatch` prop, and custom styled with CSS using `style` or [`className`](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names).

Use `LETTER` page size for 8.5x11" paper used in the USA.

```jsx
import React from 'react';
import { Fonts, Themes, ThemedPage, Div, Button, Box, PDFThemeProvider, Heading3, Paragraph } from 'react-pdf-builder'
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
            <Box dir="y" className="gap-3">
              <Heading3 rule>Hello, world!</Heading3>
              <Paragraph className="mb-0">Let's get started building the PDF.</Paragraph>
              <Box>
                <Button href="#">Button</Button>
              </Box>
              <Div className="my-custom-class w-50">50% Div with a custom class. 👍</Div>
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

## Why use React PDF Builder?

While the underlying project, [react-pdf](https://react-pdf.org/), gives you everything you need to build a beautiful PDF... you will need to build it completely from scratch.

There are no headings, no tables, no buttons, no lists. 

Instead, you'll have to define styles for every single element in your PDF. This can be a huge hassle when all you want is to build your PDF!

Enter React PDF Builder.

This framework provides a set of [30+ pre-made components](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-overview--docs) (based on [Bootstrap 5](https://getbootstrap.com/)) that can help you bring your PDF to life quickly and easily.

The framework also gives you the ability to define [class names](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#class-names) to style your PDF components.

In addition, there's drop in support for 25 [fonts](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs) with bold and italics, and 5 different sets of [emojis](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs#adding-emoji-support). 

All ready to go, so you can start building immediately.

## How to use React PDF Builder

Follow the quick start above to get up and running quickly. 

Then check out the [components overview](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-overview--docs) for the components you have at your disposal. Each component page has a live example at the bottom.

You may also want to familiarize yourself with [react-pdf](https://react-pdf.org/), the library this framework is built upon, for the basics.

## Components overview

You can see all the [available components here](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-overview--docs).

## Themes

React PDF Builder includes a robust theme system that allows you to quickly and easily style the components in the framework. 

The framework includes both a light and dark theme based on [Bootstrap 5](https://getbootstrap.com/).

Most components support a `swatch` prop that lets you quickly style the component's colors using the theme's color scheme. For instance, to swatch a [Table](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-components-tables-table--docs) to blue, give it the `"blue"` swatch. You can see all [swatch colors here](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#swatch-colors).

Want to tweak a theme's appearance? You can [override](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs#override-existing-themes) and define your own custom colors, borders, class names, spacing—you name it.

You can [read more about themes here](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-themes--docs).

## Utility class names

The framework includes a large catalog of utility classes to make styling your PDF components easy (and concise). Utility classes are adapted from [Bootstrap 5](https://getbootstrap.com/docs/5.3/utilities/spacing/), so you may already be familiar with them.

You can [see all utility classes here](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-utility-classes--docs).

## Fonts and formatting

React PDF Builder includes [25 drop-in fonts](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs), ready to use, and supporting the Latin charset (English) with bold and italic formatting. 

All built-in fonts are hosted via [jsdelivr](https://www.jsdelivr.com/), but you can [self-host](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs#self-hosting-built-in-fonts) them too if you'd like.

The framework also includes drop-in support for 5 different Emoji sets by JoyPixels, Noto Emoji, OpenMoji, and Twemoji. Read more about [emoji support here](https://justinmahar.github.io/react-pdf-builder/?path=/docs/documentation-fonts--docs#adding-emoji-support).

## Downloading PDFs

If you'd like to make your PDF Document downloadable via a link, you can use the [PDFDownloadLink from react-pdf](https://react-pdf.org/components#pdfdownloadlink).

## Advanced

For topics like page wrapping, document navigation, and dynamic content, see the [Advanced documentation for react-pdf](https://react-pdf.org/advanced).

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