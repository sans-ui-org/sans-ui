<script lang="ts">
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { tooltipVariant, type TooltipSlots } from '$lib/tooltip/Tooltip';
	import { cn } from '$lib/utils/cn';
	import { tooltip } from '$lib/actions/tooltip';

	interface $$Props extends HTMLButtonAttributes {
		id?: string;
		variant?: ComponentVariant;
		size?: ComponentSize;
		title: string;
		position?: 'top' | 'bottom' | 'left' | 'right';
		trackable?: boolean;
		delayToOpen?: number;
		delayToHide?: number;
		classes?: SlotsToClasses<TooltipSlots>;
	}

	/**
	 * Property that define the id of the tooltip.
	 */
	export let id: string = '';
	/**
	 * Property that define the variant of the tooltip.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines the size of the tooltip.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Property that define the position of the tooltip.
	 */
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
	/**
	 * Property that defines the title of the tooltip.
	 */
	export let title: string = '';
	/**
	 * Property that defines if the tooltip is trackable.
	 */
	export let trackable: boolean = false;
	/**
	 * Property that defines the delay to open the tooltip.
	 */
	export let delayToOpen: number = 0;
	/**
	 * Property that defines the delay to hide the tooltip.
	 */
	export let delayToHide: number = 0;
	/**
	 * Property that defines the classes of the tooltip.
	 */
	export let classes: SlotsToClasses<TooltipSlots> = {};

	// tailwind-variant
	const slots = tooltipVariant({});
</script>

<button
	{...$$restProps}
	aria-describedby={id}
	class={cn(slots.base({}), classes.base)}
	use:tooltip={{ title, size, position, variant, trackable, delayToHide, delayToOpen }}
>
	<slot />
</button>
