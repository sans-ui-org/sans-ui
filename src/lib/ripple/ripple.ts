function onRipple(color: string, centered?: boolean): (event: MouseEvent) => void {
	return (event: MouseEvent) => {
		const target = event.currentTarget as HTMLElement;
		const circle = document.createElement('span');
		const d = Math.max(target.clientWidth, target.clientHeight);

		const removeCircle = () => {
			console.log('remove circle');
			circle.remove();
			circle.removeEventListener('animationend', removeCircle);
		};

		circle.addEventListener('animationend', removeCircle);
		circle.style.width = circle.style.height = `${d}px`;
		const rect = target.getBoundingClientRect();

		if (centered) {
			circle.classList.add('absolute', 'top-0', 'left-0', 'ripple-centered', `bg-${color}-200`);
		} else {
			circle.style.left = `${event.clientX - rect.left - d / 2}px`;
			circle.style.top = `${event.clientY - rect.top - d / 2}px`;

			circle.classList.add('ripple-normal', `bg-${color}-200`);
		}

		circle.classList.add('ripple');

		target.appendChild(circle);
	};
}

export default function useRipple(color = 'primary', centered = false) {
	return function (node: HTMLElement) {
		const onMouseDown = onRipple(color, centered);
		node.addEventListener('mousedown', onMouseDown);

		return {
			destroy: () => node.removeEventListener('mousedown', onMouseDown)
		};
	};
}
