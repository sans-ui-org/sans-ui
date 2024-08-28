import { tv } from '$lib/utils/tv';

export const tooltipVariant = tv({
	slots: {
		base: ['s-ui--tooltip--base', 'relative inline-flex bg-transparent border-none cursor-auto']
	}
});

export type TooltipSlots = keyof ReturnType<typeof tooltipVariant>;
