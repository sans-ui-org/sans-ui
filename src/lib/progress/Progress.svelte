<script lang="ts">
	import '$lib/global.css';
	import type { ComponentVariant } from '$lib/utils/utils';
	import type { HTMLProgressAttributes } from 'svelte/elements';
	import { tv } from '$lib/utils/tv';

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
	const progressVariant = tv({
		slots: {
			wrapper: ['inline-flex flex-col gap-1 items-center'],
			base: ['relative flex flex-col items-center gap-2'],
			progressIcon: ['-rotate-90'],
			tracker: ['text-slate-950'],
			progressTextWrapper: ['absolute top-1/2 left-1/2 text-center text-xs text-[#333]'],
			progressText: ['block font-semibold']
		},
		variants: {
			variant: {
				primary: { tracker: ['stroke-blue-500'] },
				secondary: { tracker: ['stroke-neutral-500'] },
				success: { tracker: ['stroke-green-500'] },
				warning: { tracker: ['stroke-yellow-500'] },
				danger: { tracker: ['stroke-red-500'] }
			}
		}
	});
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
