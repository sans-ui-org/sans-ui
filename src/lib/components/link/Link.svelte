<script lang="ts" context="module">
	export type UnderlineType = 'none' | 'hover' | 'always' | 'active';
	export type FontSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
	export type FontWeight =
		| 'thin'
		| 'extralight'
		| 'light'
		| 'normal'
		| 'medium'
		| 'semibold'
		| 'bold'
		| 'extrabold'
		| 'black';
</script>

<script lang="ts">
	import type { ComponentVariant, SlotsToClasses } from '../../utils/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '../../utils/cn';
	import { linkVariant, type LinkSlots } from '../../components/link/Link';
	import WindowIcon from './WindowIcon.svelte';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends HTMLAnchorAttributes {
		variant?: ComponentVariant;
		size?: FontSize;
		fontWeight?: FontWeight;
		underlineType?: UnderlineType;
		disabled?: boolean;
		external?: boolean;
		windowIcon?: boolean;
		animation?: boolean;
		href?: string;
		classes?: SlotsToClasses<LinkSlots>;
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
	export let fontWeight: FontWeight = 'medium';
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
	/**
	 * Property that defines if the link has an window icon.
	 */
	export let windowIcon: boolean = false;
	/**
	 * Property that defines if the link is external.
	 */
	export let external: boolean = false;
	/**
	 * Property that defines if the link has an animation.
	 */
	export let animation: boolean = true;
	/**
	 * Property that defines the class names of the link.
	 */
	export let classes: SlotsToClasses<LinkSlots> = {};

	let url = disabled ? undefined : href;

	// tailwind-variants
	const slots = linkVariant({ variant, underlineType, size, fontWeight, disabled });

	const props = external
		? { rel: 'noopener noreferrer', target: '_blank', ...$$restProps }
		: { ...$$restProps };
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<a
	{...props}
	class={cn(
		slots.base({ variant, underlineType, size, fontWeight, disabled, animation }),
		classes.base,
		$$restProps.class
	)}
	role="link"
	aria-disabled={disabled}
	href={url}
>
	<slot />
	{#if windowIcon}
		<WindowIcon
			class={cn(slots.icon({ variant, underlineType, size, fontWeight, disabled, animation }))}
		/>
	{/if}
</a>
