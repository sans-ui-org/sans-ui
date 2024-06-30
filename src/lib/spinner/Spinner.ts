import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export type SpinnerKind = 'loader1' | 'loader2' | 'loader3';

// TODO: Name of this interface should be SpinnerSlots or sth
export type SpinnerProps = {
	variant: ComponentVariant;
	size: ComponentSize;
	kind: SpinnerKind;
	className?: string;
};

export function getSpinnerSlots({ variant, size, kind, className = '' }: SpinnerProps) {
	function getSpinnerSizeClassNames(size: ComponentSize) {
		switch (size) {
			case 'sm':
				return 'w-[32px] h-[32px] after:w-[32px] after:h-[32px]';
			case 'md':
				return 'w-[48px] h-[48px] after:w-[48px] after:h-[48px]';
			case 'lg':
				return 'w-[64px] h-[64px] after:w-[64px] after:h-[64px]';
		}
	}

	function getSpinnerClassNames(kind: SpinnerKind) {
		switch (kind) {
			case 'loader1':
				return 'spinner-type-1 inline-block box-border text-[48px] rounded-[50%] border-t-4 border-r-4 border-r-transparent relative animate-[spinnerRotation_1s_linear_infinite]';
			case 'loader2':
				return 'spinner-type-2 relative animate-[spinnerDotContainer_2.5s_linear_infinite]';
			case 'loader3':
				return cx([
					'spinner-type-3',
					'after:content-[""] after:inline-block after:box-border after:absolute after:top-[50%] after:left-[50%] after:border-4 after:rounded-full after:animate-[spinnerScaleUp_1s_linear_infinite]',
					'inline-block box-border text-[48px] rounded-[50%] border-4 relative animate-[spinnerPulse_1s_linear_infinite]'
				]);
		}
	}

	function getSpinnerColorClassNames(variant: ComponentVariant) {
		switch (variant) {
			case 'primary':
				return 'border-blue-500 after:border-blue-500';
			case 'secondary':
				return 'border-neutral-500 after:border-neutral-500';
			case 'success':
				return 'border-green-500 after:border-green-500';
			case 'warning':
				return 'border-yellow-500 after:border-yellow-500';
			case 'danger':
				return 'border-red-500 after:border-red-500';
			// case 'indigo':
			// 	return 'border-indigo-500 after:border-indigo-500';
		}
	}

	function getDotClassNames(variant: ComponentVariant) {
		const baseDotClassNames =
			'loader2-dot w-full h-full absolute top-0 left-0 animate-[spinnerDot_2s_ease-in-out_infinite] before:block before:w-[25%] before:h-[25%] before:rounded-full before: before:animate-[spinnerDotBefore_2s_ease-in-out_infinite]';
		let dotColorClassName;
		switch (variant) {
			case 'primary':
				dotColorClassName = 'before:bg-blue-500';
				break;
			case 'secondary':
				dotColorClassName = 'before:bg-neutral-500';
				break;
			case 'success':
				dotColorClassName = 'before:bg-green-500';
				break;
			case 'warning':
				dotColorClassName = 'before:bg-yellow-500';
				break;
			case 'danger':
				dotColorClassName = 'before:bg-red-500';
				break;
			// case 'indigo':
			// 	dotColorClassName = 'before:bg-indigo-500';
			// 	break;
		}
		return cx([baseDotClassNames, dotColorClassName]);
	}

	// classNames
	const spinnerClassNames = cx([
		className,
		getSpinnerClassNames(kind),
		getSpinnerSizeClassNames(size),
		getSpinnerColorClassNames(variant)
	]);
	const dotClassNames = getDotClassNames(variant);

	return {
		spinner: spinnerClassNames,
		dot: dotClassNames
	};
}
