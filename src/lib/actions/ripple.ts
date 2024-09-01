/**
 * Please notice that this file intensionally does not use Tailwind CSS classes.
 */
function getRippleEffect(bgColor: string, centered?: boolean): (event: MouseEvent) => void {
	return function (event: MouseEvent) {
		const target = event.currentTarget as HTMLElement;

		target.style.position = 'relative';
		target.style.overflow = 'hidden'; // make sure the ripple effect is not going outside the parent

		const circle = document.createElement('span');
		const diameter = Math.max(target.clientWidth, target.clientHeight); // diameter of the circle

		const removeTemporaryCSS = () => {
			// remove the ripple effect after the animation is finished
			circle.remove();
			// make sure to remove the temporary CSS
			target.style.position = '';
			target.style.overflow = '';
		};

		// circle.addEventListener('animationend', removeCircle);
		circle.style.width = circle.style.height = diameter + 'px';
		circle.style.backgroundColor = bgColor;
		const rect = target.getBoundingClientRect();

		if (centered) {
			// circle.classList.add('top-0', 'left-0');
			circle.style.top = '0';
			circle.style.left = '0';
		} else {
			circle.style.left = event.clientX - rect.left - diameter / 2 + 'px';
			circle.style.top = event.clientY - rect.top - diameter / 2 + 'px';
		}

		// circle.classList.add('absolute', 'rounded-full', 'animate-[ripple_1.0s]');
		circle.style.position = 'absolute';
		circle.style.borderRadius = '9999px';
		const keyframes = [
			{ transform: 'scale(0)', opacity: 1 },
			{ transform: 'scale(1)', opacity: 0 }
		];
		const animationState = circle.animate(keyframes, 300);

		// remove the circle after the animation is finished
		animationState.finished.then(() => {
			removeTemporaryCSS();
		});

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
