import { tv } from '$lib/utils/tv';

export const progressVariant = tv({
	slots: {
		wrapper: ['inline-flex flex-col gap-1 items-center'],
		base: ['relative flex flex-col items-center gap-2'],
		progressIcon: ['-rotate-90'],
		tracker: ['text-slate-950'],
		progressTextWrapper: ['absolute top-1/2 left-1/2 text-center text-xs text-[#333]'],
		progressText: ['block font-semibold']
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
