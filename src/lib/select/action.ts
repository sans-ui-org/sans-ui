export function close(node: HTMLElement, action: CallableFunction) {
	const onClose = (e: MouseEvent) => {
		action(e);
	};
	document.addEventListener('mousedown', onClose);

	return {
		destroy() {
			document.removeEventListener('mousedown', onClose);
		}
	};
}

export function listbox(
	node: HTMLElement,
	action: {
		onClose: CallableFunction;
		onMoveDown: CallableFunction;
		onMoveUp: CallableFunction;
		onSelect: CallableFunction;
	}
) {
	const handleKeyPress = (event: KeyboardEvent) => {
		const { key } = event;
		const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' ', 'Escape', 'Tab'];
		if (openKeys.includes(key)) {
			switch (key) {
				case 'Escape':
				case 'Tab':
					action.onClose();
					break;
				case 'ArrowDown':
					action.onMoveDown();
					break;
				case 'ArrowUp':
					action.onMoveUp();
					break;
				case 'Enter':
				case ' ':
					action.onSelect();
					break;
				default:
					break;
			}
		}
	};

	document.addEventListener('keydown', handleKeyPress);
	return {
		destroy() {
			document.removeEventListener('keydown', handleKeyPress);
		}
	};
}

export const select = (node: HTMLElement, action: CallableFunction) => {
	const onSelect = (e: MouseEvent) => {
		action(e);
	};
	node.addEventListener('click', onSelect);

	return {
		destroy() {
			node.removeEventListener('click', onSelect);
		}
	};
};
