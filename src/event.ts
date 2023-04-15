// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
export const addEventListener = (
	element: HTMLElement,
	type: string,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => {
	element.addEventListener(type, listener, options);
};

export const addEventListenerMulti = (
	element: HTMLElement,
	types: Array<string>,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => {
	types.forEach((type) => {
		addEventListener(element, type, listener, options);
	});
};

export const addEventListenerToDocument = (
	type: string,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => {
	document.addEventListener(type, listener, options);
};

export const addEventListenerToWindow = (
	type: string,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => {
	window.addEventListener(type, listener, options);
};
