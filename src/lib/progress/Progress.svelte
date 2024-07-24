<script lang="ts">
	import '$lib/global.css';
	import type { ComponentVariant } from '$lib/utils/utils';
	import type { HTMLProgressAttributes } from 'svelte/elements';
	import { tv } from '$lib/utils/tailwind-variants';

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
	const progressWrapperVariant = tv({
		base: ['inline-flex flex-col gap-1 items-center'],
		variants: {}
	});
	const progressIconWrapperVariant = tv({
		base: ['relative flex flex-col items-center gap-2'],
		variants: {}
	});
	const progressIconSvgVariant = tv({
		base: ['-rotate-90'],
		variants: {}
	});
	const progressIconTrackerVariant = tv({
		base: ['text-slate-950'],
		variants: {
			variant: {
				primary: 'stroke-blue-500',
				secondary: 'stroke-neutral-500',
				success: 'stroke-green-500',
				warning: 'stroke-yellow-500',
				danger: 'stroke-red-500'
			}
		}
	});
	const progressIconTextWrapperVariant = tv({
		base: ['absolute top-1/2 left-1/2 text-center text-xs text-[#333]'],
		variants: {}
	});
	const progressIconTextVariant = tv({
		base: ['block font-semibold'],
		variants: {}
	});
</script>

<div class={progressWrapperVariant({})}>
	<div
		role="progressbar"
		class={progressIconWrapperVariant({})}
		aria-atomic="true"
		{...$$restProps}
	>
		<svg class={progressIconSvgVariant({})} style={`width: ${size}px; height: ${size}px;`}>
			<circle
				class={progressIconTrackerVariant({ variant })}
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
		<div class={progressIconTextWrapperVariant({})} style="transform: translate(-50%, -50%);">
			{#if customInnerLabel}
				{customInnerLabel}
			{:else}
				<span class={progressIconTextVariant({})}>{progressIconText}</span>
			{/if}
		</div>
	</div>
	<slot />
</div>
