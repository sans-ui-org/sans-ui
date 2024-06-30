<script lang="ts">
	import '$lib/global.css';
	import type { ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { getLinkSlots } from './Link';
	import type { FontSize, FontWeight, UnderlineType } from './Link';

	interface $$Props extends HTMLAnchorAttributes {
		variant?: ComponentVariant;
		size?: FontSize;
		bold?: FontWeight;
		underlineType?: UnderlineType;
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
	export let size: FontSize = 'md';
	/**
	 * Property that defines the weight of the link.
	 */
	export let bold: FontWeight = 'normal';
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

	let url = disabled ? undefined : href;
	let className = $$restProps.class;
	$: slots = getLinkSlots({ className, disabled, underlineType, variant, size, bold });
</script>

<a role="link" class={slots.base} aria-disabled={disabled} {...$$restProps} href={url}><slot /></a>
