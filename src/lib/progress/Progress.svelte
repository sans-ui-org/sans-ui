<script lang="ts">
	import '$lib/global.css';
	import type { ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import type { HTMLProgressAttributes } from 'svelte/elements';
	import { progressVariant, type ProgressSlots } from '$lib/progress/Progress';
	import { cn } from '$lib/utils/cn';

	type $$BaseProps = HTMLProgressAttributes;

	interface $$Props extends $$BaseProps {
		variant?: ComponentVariant;
		value?: number;
		size?: number;
		trackWidth?: number;
		customInnerLabel?: string;
		classes?: SlotsToClasses<ProgressSlots>;
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
	/*
	 * Property that defines the class names of the progress.
	 */
	export let classes: SlotsToClasses<ProgressSlots> = {};

	// mostly likely these values are constantly changing
	$: center = size / 2;
	$: radius = center - trackWidth;
	$: dashArray = 2 * Math.PI * radius;
	$: dashOffset = (dashArray * value) / 100;
	$: progressIconText = `${value > 100 ? 100 : value}%`;

	// tailwind-variants
	const slots = progressVariant({ variant });
</script>

<div class={cn(slots.wrapper({}), classes.wrapper)}>
	<div
		role="progressbar"
		class={cn(slots.base({}), classes.base)}
		aria-atomic="true"
		{...$$restProps}
	>
		<svg
			class={cn(slots.progressIcon({}), classes.progressIcon)}
			style={`width: ${size}px; height: ${size}px;`}
		>
			<circle
				class={cn(slots.tracker({ variant }), classes.tracker)}
				cx={center}
				cy={center}
				fill={'transparent'}
				r={radius}
				stroke-width={trackWidth}
				data-testid="bottom-circle"
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
		<div
			class={cn(slots.progressTextWrapper({}), classes.progressTextWrapper)}
			style="transform: translate(-50%, -50%);"
		>
			{#if customInnerLabel}
				{customInnerLabel}
			{:else}
				<span class={cn(slots.progressText({}), classes.progressText)}>{progressIconText}</span>
			{/if}
		</div>
	</div>
	<slot />
</div>
