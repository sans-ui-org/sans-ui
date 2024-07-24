<script lang="ts" context="module">
	export type UnderlineType = 'none' | 'hover' | 'always' | 'active';
	export type FontSize =
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| '7xl'
		| '8xl'
		| '9xl';
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
	import '$lib/global.css';
	import type { ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from '$lib/utils/tailwind-merge';
	import { tv } from '$lib/utils/tailwind-variants';

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

	// tailwind-variants
	const linkVariant = tv({
		base: [''],
		variants: {
			variant: {
				primary: 'text-blue-500 hover:text-blue-600 visited:text-blue-800 cursor-pointer',
				secondary:
					'text-neutral-500 hover:text-neutral-600 visited:text-neutral-800 cursor-pointer',
				success: 'text-green-500 hover:text-green-600 visted:text-green-800 cursor-pointer',
				warning: 'text-yellow-500 hover:text-yellow-600 visisted:text-yellow-800 cursor-pointer',
				danger: 'text-red-500 hover:text-red-600 visited:text-red-800 cursor-pointer'
			},
			underlineType: {
				none: '',
				hover: 'hover:underline',
				always: 'underline',
				active: 'active:underline'
			},
			size: {
				xs: 'text-xs',
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg',
				xl: 'text-xl',
				'2xl': 'text-2xl',
				'3xl': 'text-3xl',
				'4xl': 'text-4xl',
				'5xl': 'text-5xl',
				'6xl': 'text-6xl',
				'7xl': 'text-7xl',
				'8xl': 'text-xl',
				'9xl': 'text-9xl'
			},
			bold: {
				bold: 'font-bold',
				thin: 'font-thin',
				extralight: 'font-extralight',
				light: 'font-light',
				normal: 'font-normal',
				medium: 'font-medium',
				semibold: 'font-semibold',
				extrabold: 'font-extrabold',
				black: 'font-black'
			},
			disabled: {
				true: 'text-gray-500 cursor-not-allowed'
			}
		}
	});
</script>

<a
	{...$$restProps}
	class={twMerge(linkVariant({ variant, underlineType, size, bold, disabled }), $$restProps.class)}
	aria-disabled={disabled}
	href={url}><slot /></a
>
