<h1 align=center>Javascript Helper Functions</h1>
<p align=center>Maximizing JavaScript Minification with Browser-Specific Functions</p>

<p align="center" style="align: center;">
    <a href="https://www.npmjs.com/package/@appzic/js-helper-func">
        <img alt="npm" src="https://img.shields.io/npm/v/@appzic/js-helper-func">
    </a>
    <a href="https://www.npmjs.com/package/@appzic/js-helper-func">
        <img alt="npm" src="https://img.shields.io/npm/dw/@appzic/js-helper-func">
    </a>
    <a href="https://github.com/appzic/js-helper-func/blob/main/LICENSE">
        <img alt="GitHub" src="https://img.shields.io/github/license/appzic/js-helper-func">
    </a>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Functions](#functions)
  - [Event Related functions](#event-related-functions)
  - [Element Related Functions](#element-related-functions)
  - [Attribute Related Functions](#attribute-related-functions)
  - [Class Related Functrions](#class-related-functrions)
- [Contributing](#contributing)
- [License](#license)

## Introduction

By providing browser-specific functions for commonly used DOM manipulations, "@appzic/js-helper-func" can help developers achieve more efficient minification and improve the overall efficiency of their web pages. This JavaScript library offers a collection of functions that developers can use instead of creating their own custom functions, potentially saving them time and effort. Additionally, by leveraging these functions, the minifier can better recognize and compress frequently used keywords, resulting in smaller file sizes and faster loading times for web pages. Overall, "@appzic/js-helper-func" is a valuable tool for developers who are looking to optimize the performance of their web pages, particularly in regards to DOM manipulations.

## Functions

### Event Related functions

```typescript
addEventListener: (
    element: HTMLElement,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
) => void;

addEventListenerMulti: (
    element: HTMLElement,
    types: Array<string>,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
) => void;
```

### Element Related Functions

```typescript
getElementById: (id: string) => HTMLElement | null;

querySelectorFromElement: (element: HTMLElement, qurry: string) => HTMLElement;

createElement: (
	tagName: keyof HTMLElementTagNameMap,
	attributes?:
		| {
				[key: string]: string;
		  }
		| undefined,
	classes?: Array<string>
) => HTMLElement;

createCustomElement: (
	name: string,
	constructor: CustomElementConstructor,
	options?: ElementDefinitionOptions
) => void;
```

### Attribute Related Functions

```typescript
setAttributes: (
    element: HTMLElement,
    attributes: {
        [key: string]: string;
    }
) => void;

getAttribute: (
    element: HTMLElement,
    attribute: string
) => string | null;

hasAttribute: (
    element: HTMLElement,
    attribute: string
) => boolean;

```

### Class Related Functrions

```typescript
addClasses: (
    element: HTMLElement,
    classes: Array<string>
) => void;

removeClasses: (
    element: HTMLElement,
    classes: Array<string>
) => void;

hasClass: (
    element: HTMLElement,
    className: string
) => boolean;

```

## Contributing

We welcome contributions from the community! Please take a look at our [CONTRIBUTING.md](CONTRIBUTING.md) file for more information on how to get started. We appreciate all kinds of contributions, from bug reports and feature requests to code contributions and documentation improvements. Thank you for considering contributing to our project!

## License

**Astro RESET CSS** is licensed under the [MIT](LICENSE) License.
