export const addClasses = (
	element: HTMLElement,
	classes: Array<string>
): void => {
	classes.forEach((className) => {
		element.classList.add(className);
	});
};

export const removeClasses = (
	element: HTMLElement,
	classes: Array<string>
): void => {
	classes.forEach((className) => {
		element.classList.remove(className);
	});
};

export const hasClass = (element: HTMLElement, className: string): boolean => {
	return element.classList.contains(className);
};

export const toggleClass = (element: HTMLElement, className: string): void => {
	element.classList.toggle(className);
};
