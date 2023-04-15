import { setAttributes } from "./attribute";
import { addClasses } from "./attr_class";

export const getElementById = (id: string): HTMLElement | null => {
	return document.getElementById(id);
};

export const querySelectorFromElement = (
	element: HTMLElement,
	qurry: string
): HTMLElement => {
	return element.querySelector(qurry) as HTMLElement;
};

export const createElement = (
	tagName: keyof HTMLElementTagNameMap,
	attributes?: { [key: string]: string },
	classes?: Array<string>
): HTMLElement => {
	const element = document.createElement(tagName);
	attributes && setAttributes(element, attributes);
	classes && addClasses(element, classes);
	return element;
};

export const createCustomElement = (
	name: string,
	constructor: CustomElementConstructor,
	options?: ElementDefinitionOptions
): void => {
	customElements.define(name, constructor, options);
};
