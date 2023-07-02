// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

export const addEventListener = <K extends keyof HTMLElementEventMap>(
	element: HTMLElement,
	type: K,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => {
	element.addEventListener(type, listener, options);
};

export const addEventListenerMulti = <K extends keyof HTMLElementEventMap>(
	element: HTMLElement,
	types: Array<K>,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => {
	types.forEach((type) => {
		addEventListener(element, type, listener, options);
	});
};

export const addEventListenerToDocument = <K extends keyof HTMLElementEventMap>(
	type: K,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => {
	document.addEventListener(type, listener, options);
};

export const addEventListenerToWindow = <K extends keyof HTMLElementEventMap>(
	type: K,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => {
	window.addEventListener(type, listener, options);
};
