<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { getLinkSlots, type UnderlineType } from './Link';

	interface $$Props extends HTMLAttributes<HTMLAnchorElement> {
		variant?: ComponentVariant;
		size?: ComponentSize;
		underline?: UnderlineType;
		disabled?: boolean;
		href?: string;
	}

	/**
	 * Property that define the variant of the link.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines the size of the link.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Property that defines the decoration(underline) of the link.
	 */
	export let underlineType: UnderlineType = 'always';
	/**
	 * Property that defines if the link is disalbe.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines the label of the link.
	 */
	export let href: string = '';

	const className = $$restProps.class;
	$: slots = getLinkSlots({ className, disabled, variant, size, underlineType });
</script>

<a {...$$restProps} {href} class={slots.base}>Here is the link to storybook.js.org </a>
