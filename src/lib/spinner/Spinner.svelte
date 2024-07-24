<script lang="ts" context="module">
	export type SpinnerKind = 'loader1' | 'loader2' | 'loader3';
</script>

<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { tv } from '$lib/utils/tailwind-variants';
	import { twMerge } from '$lib/utils/tailwind-merge';

	type $$BaseProps = HTMLBaseAttributes;

	interface $$Props extends $$BaseProps {
		variant?: ComponentVariant;
		size?: ComponentSize;
		kind?: SpinnerKind;
	}

	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ComponentSize = 'md';

	/**
	 * Property that defines the kind of spinner.
	 */
	export let kind: SpinnerKind = 'loader1';

	const dotList = [1.1, 1.0, 0.9, 0.8, 0.7, 0.6];

	// tailwind-variants
	const spinnerVariant = tv({
		base: [],
		variants: {
			variant: {
				primary: 'border-blue-500 after:border-blue-500',
				secondary: 'border-neutral-500 after:border-neutral-500',
				success: 'border-green-500 after:border-green-500',
				warning: 'border-yellow-500 after:border-yellow-500',
				danger: 'border-red-500 after:border-red-500'
			},
			size: {
				sm: ['w-[32px] h-[32px] after:w-[32px] after:h-[32px]'],
				md: ['w-[48px] h-[48px] after:w-[48px] after:h-[48px]'],
				lg: ['w-[64px] h-[64px] after:w-[64px] after:h-[64px]']
			},
			kind: {
				loader1:
					'spinner-type-1 inline-block box-border text-[48px] rounded-[50%] border-t-4 border-r-4 border-r-transparent relative animate-[spinnerRotation_1s_linear_infinite]',
				loader2: 'spinner-type-2 relative animate-[spinnerDotContainer_2.5s_linear_infinite]',
				loader3: [
					'spinner-type-3 after:content-[""]',
					'after:inline-block after:box-border after:absolute after:top-[50%] after:left-[50%] after:border-4 after:rounded-full after:animate-[spinnerScaleUp_1s_linear_infinite]',
					'inline-block box-border text-[48px] rounded-[50%] border-4 relative animate-[spinnerPulse_1s_linear_infinite]'
				]
			}
		}
	});
	const dotVariant = tv({
		base: [
			'loader2-dot w-full h-full absolute top-0 left-0 animate-[spinnerDot_2s_ease-in-out_infinite]',
			'before:block before:w-[25%] before:h-[25%] before:rounded-full before: before:animate-[spinnerDotBefore_2s_ease-in-out_infinite]'
		],
		variants: {
			variant: {
				primary: 'before:bg-blue-500',
				secondary: 'before:bg-neutral-500',
				success: 'before:bg-green-500',
				warning: 'before:bg-yellow-500',
				danger: 'before:bg-red-500'
			}
		}
	});
</script>

<div
	aria-busy="true"
	role="alert"
	{...$$restProps}
	class={twMerge(spinnerVariant({ size, variant, kind }), $$restProps.class)}
>
	{#if kind === 'loader2'}
		{#each dotList as dot}
			<div class={dotVariant({ variant })} style={`animation-delay: -${dot}s;`} />
		{/each}
	{/if}
</div>

<style>
	.loader2-dot:nth-child(1):before {
		animation-delay: -1.1s;
	}
	.loader2-dot:nth-child(2):before {
		animation-delay: -1s;
	}
	.loader2-dot:nth-child(3):before {
		animation-delay: -0.9s;
	}
	.loader2-dot:nth-child(4):before {
		animation-delay: -0.8s;
	}
	.loader2-dot:nth-child(5):before {
		animation-delay: -0.7s;
	}
	.loader2-dot:nth-child(6):before {
		animation-delay: -0.6s;
	}
</style>
