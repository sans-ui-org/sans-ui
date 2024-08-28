import { tv } from '$lib/utils/tv';

export const progressVariant = tv({
	slots: {
		wrapper: ['s-ui--progress-wrapper', 'inline-flex flex-col gap-1 items-center'],
		base: ['s-ui--progress-base', 'relative flex flex-col items-center gap-2'],
		progressIcon: ['s-ui--progress-progressIcon', '-rotate-90'],
		tracker: ['s-ui--progress-tracker', 'text-slate-950'],
		progressTextWrapper: [
			's-ui--progress-progressTextWrapper',
			'absolute top-1/2 left-1/2 text-center text-xs text-neutral-600 dark:text-neutral-200'
		],
		progressText: ['s-ui--progress-progressText', 'block font-semibold']
	},
	variants: {
		variant: {
			primary: { tracker: ['stroke-blue-500'] },
			secondary: { tracker: ['stroke-neutral-500'] },
			success: { tracker: ['stroke-green-500'] },
			warning: { tracker: ['stroke-yellow-500'] },
			danger: { tracker: ['stroke-red-500'] }
		}
	}
});

export type ProgressSlots = keyof ReturnType<typeof progressVariant>;
