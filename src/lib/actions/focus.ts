/**
 * Focusable html elements
 */
const TABBABLE = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;

/**
 * Custom action for focus-trap for modal.
 * @param node Modal HTML DIV element
 */
export function focusTrap(node: HTMLElement) {
	function handleFocusTrap(e: KeyboardEvent) {
		const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

		if (!isTabPressed) {
			return;
		}

		const focusableElements = Array.from(node.querySelectorAll(TABBABLE));

		let index = focusableElements.indexOf(document.activeElement ?? node);
		if (index === -1 && e.shiftKey) index = 0;
		index += focusableElements.length + (e.shiftKey ? -1 : 1);
		index %= focusableElements.length;
		const targetFocusableElement = focusableElements[index] as HTMLElement;
		targetFocusableElement.focus();

		e.preventDefault();
	}

	document.addEventListener('keydown', handleFocusTrap, true);

	return {
		destroy() {
			document.removeEventListener('keydown', handleFocusTrap, true);
		}
	};
}

/**
 * Focuses on the first focusable element inside the node.
 * @param node Modal HTML DIV element
 */
export const autoFocus = (node: HTMLElement) => {
	const focusableElements = Array.from(node.querySelectorAll(TABBABLE));
	if (focusableElements.length) {
		const targetFocusableElement = focusableElements[0] as HTMLElement;
		targetFocusableElement.focus();
	}
};
