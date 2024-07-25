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
	import { cn } from '$lib/utils/cn';
	import { tv } from '$lib/utils/tv';

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
		slots: {
			base: ['']
		},
		variants: {
			variant: {
				primary: { base: 'text-blue-500 hover:text-blue-600 visited:text-blue-800 cursor-pointer' },
				secondary: {
					base: 'text-neutral-500 hover:text-neutral-600 visited:text-neutral-800 cursor-pointer'
				},
				success: {
					base: 'text-green-500 hover:text-green-600 visted:text-green-800 cursor-pointer'
				},
				warning: {
					base: 'text-yellow-500 hover:text-yellow-600 visisted:text-yellow-800 cursor-pointer'
				},
				danger: { base: 'text-red-500 hover:text-red-600 visited:text-red-800 cursor-pointer' }
			},
			underlineType: {
				none: '',
				hover: { base: 'hover:underline' },
				always: { base: 'underline' },
				active: { base: 'active:underline' }
			},
			size: {
				xs: { base: 'text-xs' },
				sm: { base: 'text-sm' },
				md: { base: 'text-base' },
				lg: { base: 'text-lg' },
				xl: { base: 'text-xl' },
				'2xl': { base: 'text-2xl' },
				'3xl': { base: 'text-3xl' },
				'4xl': { base: 'text-4xl' },
				'5xl': { base: 'text-5xl' },
				'6xl': { base: 'text-6xl' },
				'7xl': { base: 'text-7xl' },
				'8xl': { base: 'text-xl' },
				'9xl': { base: 'text-9xl' }
			},
			bold: {
				bold: { base: 'font-bold' },
				thin: { base: 'font-thin' },
				extralight: { base: 'font-extralight' },
				light: { base: 'font-light' },
				normal: { base: 'font-normal' },
				medium: { base: 'font-medium' },
				semibold: { base: 'font-semibold' },
				extrabold: { base: 'font-extrabold' },
				black: { base: 'font-black' }
			},
			disabled: {
				true: { base: 'text-gray-500 cursor-not-allowed' }
			}
		}
	});
	const slots = linkVariant({ variant, underlineType, size, bold, disabled });
</script>

<a
	{...$$restProps}
	class={cn(slots.base({ variant, underlineType, size, bold, disabled }), $$restProps.class)}
	aria-disabled={disabled}
	href={url}><slot /></a
>
