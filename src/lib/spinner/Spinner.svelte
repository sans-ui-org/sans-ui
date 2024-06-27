<script lang="ts">
	import '$lib/styles/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { getSpinnerSlots, type SpinnerKind } from './Spinner';

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
	const className = $$props.class;
	$: slots = getSpinnerSlots({ variant, size, kind, className });
</script>

<div aria-busy="true" role="alert" {...$$restProps} class={slots.spinner}>
	{#if kind === 'loader2'}
		{#each dotList as dot}
			<div class={slots.dot} style={`animation-delay: -${dot}s;`} />
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
