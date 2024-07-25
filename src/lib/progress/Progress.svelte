<script lang="ts">
	import '$lib/global.css';
	import type { ComponentVariant } from '$lib/utils/utils';
	import type { HTMLProgressAttributes } from 'svelte/elements';
	import { progressVariant } from '$lib/progress/Progress';

	type $$BaseProps = HTMLProgressAttributes;

	interface $$Props extends $$BaseProps {
		variant?: ComponentVariant;
		value?: number;
		size?: number;
		trackWidth?: number;
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

	// tailwind-variants
	const slots = progressVariant({ variant });
</script>

<div class={slots.wrapper({})}>
	<div role="progressbar" class={slots.base({})} aria-atomic="true" {...$$restProps}>
		<svg class={slots.progressIcon({})} style={`width: ${size}px; height: ${size}px;`}>
			<circle
				class={slots.tracker({ variant })}
				cx={center}
				cy={center}
				fill={'transparent'}
				r={radius}
				stroke-width={trackWidth}
			/>
			<circle
				class={''}
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
		<div class={slots.progressTextWrapper({})} style="transform: translate(-50%, -50%);">
			{#if customInnerLabel}
				{customInnerLabel}
			{:else}
				<span class={slots.progressText({})}>{progressIconText}</span>
			{/if}
		</div>
	</div>
	<slot />
</div>
