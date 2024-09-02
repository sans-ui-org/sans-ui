import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';

type TooltipArgument = {
	title: string;
	size: ComponentSize;
	position: 'top' | 'bottom' | 'left' | 'right';
	variant: ComponentVariant;
	trackable: boolean;
	delayToOpen: number;
	delayToHide: number;
};

export function tooltip(
	targetNode: HTMLElement,
	{ title, size, position, variant, trackable, delayToHide, delayToOpen }: TooltipArgument
) {
	let copy: HTMLElement;

	const mouseOver = () => {
		if (copy) {
			copy.remove();
		}

		copy = document.createElement('div');
		copy.setAttribute('data-tooltip', 'true');
		copy.role = 'tooltip';
		copy.textContent = title;
		setTooltipColor(copy, variant);
		setTooltipSize(copy, size);
		copy.style.fontWeight = '500';
		copy.style.borderRadius = '8px';
		copy.style.textAlign = 'center';
		copy.style.paddingTop = '2px';
		copy.style.paddingBottom = '2px';
		copy.style.paddingRight = '12px';
		copy.style.paddingLeft = '12px';
		copy.style.position = 'absolute';
		copy.style.zIndex = '1000';

		setTimeout(() => {
			document.body.appendChild(copy);
			if (!trackable) {
				setTooltipPosition(targetNode, copy, position);
			}
		}, delayToOpen);
	};

	const mouseMove = (event: MouseEvent) => {
		if (copy && trackable) {
			copy.style.left = `${event.pageX + 5}px`;
			copy.style.top = `${event.pageY + 5}px`;
		}
	};

	const mouseLeave = () => {
		if (copy) {
			setTimeout(() => {
				copy.remove();
			}, delayToHide);
		}
	};

	targetNode.addEventListener('mouseover', mouseOver);
	targetNode.addEventListener('mouseleave', mouseLeave);
	targetNode.addEventListener('mousemove', mouseMove);

	return {
		destroy() {
			targetNode.removeEventListener('mouseover', mouseOver);
			targetNode.removeEventListener('mouseleave', mouseLeave);
			targetNode.removeEventListener('mousemove', mouseMove);
		}
	};
}

const setTooltipSize = (copy: HTMLElement, size: ComponentSize) => {
	switch (size) {
		case 'lg':
			copy.style.fontSize = '16px';
			return;
		case 'md':
			copy.style.fontSize = '14px';
			return;
		case 'sm':
			copy.style.fontSize = '12px';
			return;
		default:
			return;
	}
};

const setTooltipPosition = (
	targetNode: HTMLElement,
	copy: HTMLElement,
	position: TooltipArgument['position']
) => {
	const copyRect = copy.getBoundingClientRect();
	const { offsetTop, offsetLeft } = targetNode;

	switch (position) {
		case 'top':
			copy.style.top = offsetTop - copyRect.height + 'px';
			copy.style.left = offsetLeft + (targetNode.offsetWidth - copyRect.width) / 2 + 'px';
			copy.style.marginTop = '-5px';
			break;
		case 'bottom':
			copy.style.top = offsetTop + targetNode.offsetHeight + 'px';
			copy.style.left = offsetLeft + (targetNode.offsetWidth - copyRect.width) / 2 + 'px';
			copy.style.marginTop = '5px';
			break;
		case 'left':
			copy.style.top = offsetTop + (targetNode.offsetHeight - copyRect.height) / 2 + 'px';
			copy.style.left = offsetLeft - copyRect.width + 'px';
			copy.style.marginLeft = '-5px';
			break;
		case 'right':
			copy.style.top = offsetTop + (targetNode.offsetHeight - copyRect.height) / 2 + 'px';
			copy.style.left = offsetLeft + targetNode.offsetWidth + 'px';
			copy.style.marginLeft = '5px';
			break;
	}
};

const setTooltipColor = (copy: HTMLElement, variant: TooltipArgument['variant']) => {
	switch (variant) {
		case 'primary':
			copy.style.border = '1px solid #3b82f6';
			copy.style.background = '#3b82f6';
			copy.style.color = 'white';
			break;
		case 'secondary':
			copy.style.border = '1px solid #737373';
			copy.style.background = '#737373';
			copy.style.color = 'white';
			break;
		case 'success':
			copy.style.border = '1px solid #22c55e';
			copy.style.background = '#22c55e';
			copy.style.color = 'white';
			break;
		case 'warning':
			copy.style.border = '1px solid #eab308';
			copy.style.background = '#eab308';
			copy.style.color = 'white';
			break;
		case 'danger':
			copy.style.border = '1px solid #ef4444';
			copy.style.background = '#ef4444';
			copy.style.color = 'white';
			break;
		default:
			copy.style.border = '1px solid #ddd';
			copy.style.background = 'white';
			copy.style.color = 'white';
			break;
	}
};
