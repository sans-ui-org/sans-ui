// ref: https://svelte.dev/repl/61d9178d2b9944f2aa2bfe31612ab09f?version=3.6.7
function getRippleEffect(bgColor: string, centered?: boolean): (event: MouseEvent) => void {
	return function (event: MouseEvent) {
		const target = event.currentTarget as HTMLElement;
		target.style.overflow = 'hidden'; // make sure the ripple effect is not going outside the parent

		const circle = document.createElement('span');
		const diameter = Math.max(target.clientWidth, target.clientHeight); // diameter of the circle

		const removeCircle = () => {
			circle.removeEventListener('animationend', removeCircle);
			circle.remove();
		};

		circle.addEventListener('animationend', removeCircle);
		circle.style.width = circle.style.height = diameter + 'px';
		circle.style.backgroundColor = bgColor;
		const rect = target.getBoundingClientRect();

		if (centered) {
			circle.classList.add('top-0', 'left-0');
		} else {
			circle.style.left = event.clientX - rect.left - diameter / 2 + 'px';
			circle.style.top = event.clientY - rect.top - diameter / 2 + 'px';
		}

		circle.classList.add('absolute', 'rounded-full', 'animate-[ripple_1.0s]');

		target.appendChild(circle);
	};
}

export function createRipple(bgColor = 'white', centered = false) {
	return function (node: HTMLElement) {
		const onMouseDown = getRippleEffect(bgColor, centered);
		node.addEventListener('mousedown', onMouseDown);

		return {
			destroy: () => node.removeEventListener('mousedown', onMouseDown)
		};
	};
}
