# Javascript Helper Functions

## Event Related functions

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

## Element Related Functions

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

## Attribute Related Functions

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

## Class Related Functrions

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
