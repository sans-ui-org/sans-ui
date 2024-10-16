import { tv } from '$lib/utils/tv';

export const spinnerVariant = tv({
	slots: {
		base: ['sans-ui--spinner-base'],
		dot: [
			'sans-ui--spinner-dot',
			'loader2-dot w-full h-full absolute top-0 left-0 animate-[spinnerDot_2s_ease-in-out_infinite]',
			'before:block before:w-[25%] before:h-[25%] before:rounded-full before: before:animate-[spinnerDotBefore_2s_ease-in-out_infinite]'
		]
	},
	variants: {
		variant: {
			primary: { base: 'border-blue-500 after:border-blue-500', dot: 'before:bg-blue-500' },
			secondary: {
				base: 'border-neutral-500 after:border-neutral-500',
				dot: 'before:bg-neutral-500'
			},
			success: { base: 'border-green-500 after:border-green-500', dot: 'before:bg-green-500' },
			warning: { base: 'border-yellow-500 after:border-yellow-500', dot: 'before:bg-yellow-500' },
			danger: { base: 'border-red-500 after:border-red-500', dot: 'before:bg-red-500' }
		},
		size: {
			sm: { base: ['w-[32px] h-[32px] after:w-[32px] after:h-[32px]'] },
			md: { base: ['w-[48px] h-[48px] after:w-[48px] after:h-[48px]'] },
			lg: { base: ['w-[64px] h-[64px] after:w-[64px] after:h-[64px]'] }
		},
		kind: {
			loader1: {
				base: 'spinner-type-1 inline-block box-border text-[48px] rounded-[50%] border-t-4 border-r-4 border-r-transparent relative animate-[spinnerRotation_1s_linear_infinite]'
			},
			loader2: {
				base: 'spinner-type-2 relative animate-[spinnerDotContainer_2.5s_linear_infinite]'
			},
			loader3: {
				base: [
					'spinner-type-3 after:content-[""]',
					'after:inline-block after:box-border after:absolute after:top-[50%] after:left-[50%] after:border-4 after:rounded-full after:animate-[spinnerScaleUp_1s_linear_infinite]',
					'inline-block box-border text-[48px] rounded-[50%] border-4 relative animate-[spinnerPulse_1s_linear_infinite]'
				]
			}
		}
	}
});

export type SpinnerSlots = keyof ReturnType<typeof spinnerVariant>;
