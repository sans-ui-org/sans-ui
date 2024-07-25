<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { createRipple } from '$lib/actions/ripple';
	import { tv } from '$lib/utils/tv';
	import { cn } from '$lib/utils/cn';

	type $$Props = (HTMLAnchorAttributes | HTMLButtonAttributes) & {
		variant?: ComponentVariant;
		size?: ComponentSize;
		disabled?: boolean;
		href?: string;
	};

	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ComponentSize = 'md';

	/**
	 * Property that defines if the button is disabled.
	 */
	export let disabled: boolean = false;

	/**
	 * Property that defines the href of the button.
	 */
	export let href: string | undefined = undefined;

	// tailwind-variants
	const buttonVariant = tv({
		slots: {
			base: [
				'relative inline-flex items-center rounded-3xl text-white outline-offset-4 transition duration-200',
				'disabled:bg-gray-400 disabled:text-neutral-350 disabled:cursor-not-allowed'
			]
		},
		variants: {
			variant: {
				primary: { base: 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600' },
				secondary: { base: 'bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-600' },
				success: { base: 'bg-green-500 hover:bg-green-400 active:bg-green-600' },
				warning: { base: 'bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600' },
				danger: { base: 'bg-red-500 hover:bg-red-400 active:bg-red-600' }
			},
			size: {
				sm: { base: 'text-sm py-2 px-4 h-8' },
				md: { base: 'text-base py-2 px-5 h-10' },
				lg: { base: 'text-lg py-2 px-6 h-12' }
			}
		}
		// compoundVariants: [
		// 	{
		// 		variant: 'primary',
		// 		kind: 'contained',
		// 		className: [
		// 			'bg-primary-700 text-neutral-white border-alpha-black-12',
		// 			'hover:bg-primary-900 hover:text-neutral-white hover:no-underline active:bg-alpha-primary-20',
		// 			'active:text-primary-900 active:border active:border-alpha-primary-20',
		// 			'disabled:opacity-[0.38]'
		// 		]
		// 	},
		// 	{
		// 		variant: 'primary',
		// 		kind: 'text',
		// 		className: [
		// 			'text-primary-800',
		// 			'hover:bg-alpha-black-5',
		// 			'focus:bg-alpha-black-5',
		// 			'active:bg-alpha-primary-20',
		// 			'disabled:text-neutral-350'
		// 		]
		// 	},
		// 	{
		// 		variant: 'secondary',
		// 		kind: 'contained',
		// 		className: [
		// 			'bg-transparent text-primary-700 border-primary-700',
		// 			'hover:bg-alpha-black-5 hover:text-primary-900',
		// 			'active:bg-alpha-primary-20 active:text-alpha-black-87',
		// 			'disabled:bg-alpha-black-5 disabled:text-alpha-black-87 disabled:border-alpha-primary-20'
		// 		]
		// 	},
		// 	{
		// 		variant: 'secondary',
		// 		kind: 'text',
		// 		className: [
		// 			'text-alpha-black-87',
		// 			'hover:bg-alpha-black-5 hover:text-alpha-black-87',
		// 			'focus:bg-alpha-black-5',
		// 			'active:bg-alpha-primary-20',
		// 			'disabled:text-neutral-350'
		// 		]
		// 	},
		// 	{
		// 		variant: 'danger',
		// 		kind: 'contained',
		// 		className: [
		// 			'bg-danger-400 text-neutral-white border-alpha-black-12',
		// 			'hover:bg-danger-600',
		// 			'active:bg-alpha-danger-12 active:text-danger-600 active:border active:border-alpha-danger-5',
		// 			'disabled:opacity-[0.38]'
		// 		]
		// 	},
		// 	{
		// 		variant: 'danger',
		// 		kind: 'text',
		// 		className: [
		// 			'text-danger-600',
		// 			'hover:bg-alpha-danger-5',
		// 			'active:bg-alpha-danger-12',
		// 			'disabled:opacity-[0.38]'
		// 		]
		// 	},
		// 	{
		// 		iconPrefix: true,
		// 		iconSuffix: false,
		// 		size: 'sm',
		// 		className: ['pl-6']
		// 	},
		// 	{
		// 		iconPrefix: true,
		// 		iconSuffix: false,
		// 		size: 'md',
		// 		className: ['pl-12']
		// 	},
		// 	{
		// 		iconPrefix: true,
		// 		iconSuffix: false,
		// 		size: 'lg',
		// 		className: ['pl-12']
		// 	},
		// 	{
		// 		iconPrefix: false,
		// 		iconSuffix: true,
		// 		size: 'sm',
		// 		className: ['pr-6']
		// 	},
		// 	{
		// 		iconPrefix: false,
		// 		iconSuffix: true,
		// 		size: 'md',
		// 		className: ['pr-12']
		// 	},
		// 	{
		// 		iconPrefix: false,
		// 		iconSuffix: true,
		// 		size: 'lg',
		// 		className: ['pr-12']
		// 	},
		// 	{
		// 		iconPrefix: true,
		// 		iconSuffix: true,
		// 		size: ['sm', 'md'],
		// 		className: ['px-6']
		// 	},
		// 	{
		// 		iconPrefix: true,
		// 		iconSuffix: true,
		// 		size: ['lg'],
		// 		className: ['px-8']
		// 	}
		// ]
	});
	const slots = buttonVariant({ variant, size });

	const ripple = disabled ? () => {} : createRipple();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{...$$restProps}
	role={href ? 'link' : 'button'}
	{href}
	{disabled}
	class={cn(slots.base({ variant, size }), $$restProps.class)}
	on:click
	on:change
	on:keydown
	on:keyup
	on:touchstart|passive
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
	use:ripple
>
	<slot />
</svelte:element>
