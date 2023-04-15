export const setAttributes = (
	element: HTMLElement,
	attributes: { [key: string]: string }
): void => {
	const keys = Object.keys(attributes);
	keys.forEach((key) => {
		element.setAttribute(key, attributes[key]);
	});
};

export const getAttribute = (
	element: HTMLElement,
	attribute: string
): string | null => {
	return element.getAttribute(attribute);
};

export const hasAttribute = (
	element: HTMLElement,
	attribute: string
): boolean => {
	return element.hasAttribute(attribute);
};
