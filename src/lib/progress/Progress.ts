import { cx, type ComponentVariant } from '$lib/utils/utils';

export type IndicatorCap = 'butt' | 'round' | 'square' | 'inherit';

type ProgressProps = {
	className?: string;
	variant: ComponentVariant;
};

export const getPrgressSlots = ({ className = '', variant }: ProgressProps) => {
	function getVariant() {
		switch (variant) {
			case 'primary':
				return 'stroke-blue-500';
			case 'secondary':
				return 'stroke-neutral-500';
			case 'success':
				return 'stroke-green-500';
			case 'warning':
				return 'stroke-yellow-500';
			case 'danger':
				return 'stroke-red-500';
		}
	}

	return {
		progressWrapper: 'inline-flex flex-col gap-1 items-center',
		progressIconWrapper: cx(['relative flex flex-col items-center gap-2', className]),
		progressIconSvg: '-rotate-90',
		progressIconTracker: getVariant(),
		progressIconIndicator: '',
		progressIconTextWrapper: 'absolute top-1/2 left-1/2 text-center text-xs text-[#333]',
		progressIconText: 'block font-semibold'
	};
};
