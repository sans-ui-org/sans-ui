<script lang="ts">
	import '$lib/global.css';
	import type { ComponentVariant } from '$lib/utils/utils';
	import type { IndicatorCap } from '$lib/progress/Progress';
	import { getPrgressSlots } from '$lib/progress/Progress';
	import type { HTMLProgressAttributes } from 'svelte/elements';

	type $$BaseProps = HTMLProgressAttributes;

	interface $$Props extends $$BaseProps {
		variant?: ComponentVariant;
		value?: number;
		size?: number;
		trackWidth?: number;
		indicatorWidth?: number;
		indicatorCap?: IndicatorCap;
		customInnerLabel?: string;
	}

	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * How much this bar is progressed. (0-100)
	 */
	export let value: number = 50;

	/**
	 * The size of the circle spinner. ("px")
	 */
	export let size: number = 80;

	/**
	 * Tracker circle's width
	 */
	export let trackWidth: number = 7;

	/**
	 * The label inside of the spinner.
	 */
	export let customInnerLabel: string = '';

	// mostly likely these values are constantly changing
	$: center = size / 2;
	$: radius = center - trackWidth;
	$: dashArray = 2 * Math.PI * radius;
	$: dashOffset = (dashArray * value) / 100;
	$: progressIconText = `${value > 100 ? 100 : value}%`;
	$: slots = getPrgressSlots({ variant });
</script>

<div class={slots.progressWrapper}>
	<div role="progressbar" class={slots.progressIconWrapper} aria-atomic="true" {...$$restProps}>
		<svg class={slots.progressIconSvg} style={`width: ${size}px; height: ${size}px;`}>
			<circle
				class={slots.progressIconTracker}
				cx={center}
				cy={center}
				fill={'transparent'}
				r={radius}
				stroke-width={trackWidth}
			/>
			<circle
				class={slots.progressIconIndicator}
				cx={center}
				cy={center}
				fill={'transparent'}
				r={radius}
				stroke={'#ddd'}
				stroke-width={trackWidth}
				stroke-dasharray={dashArray}
				stroke-dashoffset={dashOffset}
			/>
		</svg>
		<div class={slots.progressIconTextWrapper} style="transform: translate(-50%, -50%);">
			{#if customInnerLabel}
				{customInnerLabel}
			{:else}
				<span class={slots.progressIconText}>{progressIconText}</span>
			{/if}
		</div>
	</div>
	<slot />
</div>
