<script lang="ts" context="module">
	export type SpinnerKind = 'loader1' | 'loader2' | 'loader3';
</script>

<script lang="ts">
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';
	import { spinnerVariant, type SpinnerSlots } from '$lib/spinner/Spinner';

	type $$BaseProps = HTMLBaseAttributes;

	interface $$Props extends $$BaseProps {
		variant?: ComponentVariant;
		size?: ComponentSize;
		kind?: SpinnerKind;
		classes?: SlotsToClasses<SpinnerSlots>;
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
	/**
	 * Property that defines the classes of the spinner.
	 */
	export let classes: SlotsToClasses<SpinnerSlots> = {};

	const dotList = [1.1, 1.0, 0.9, 0.8, 0.7, 0.6];

	// tailwind-variants
	const slots = spinnerVariant({ size, variant, kind });
</script>

<div
	aria-busy="true"
	role="alert"
	{...$$restProps}
	class={cn(slots.base({ size, variant, kind }), classes.base, $$restProps.class)}
>
	{#if kind === 'loader2'}
		{#each dotList as dot}
			<div class={cn(slots.dot({ variant }), classes.dot)} style={`animation-delay: -${dot}s;`} />
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
