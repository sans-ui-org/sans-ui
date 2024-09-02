<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { switchVariant, type SwitchSlots } from '$lib/switch/Switch';
	import { cn } from '$lib/utils/cn';
	import { createEventDispatcher } from 'svelte';

	type $$BaseProps = HTMLBaseAttributes;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends $$BaseProps {
		id?: string;
		textForOn?: string;
		textForOff?: string;
		label?: string;
		size?: ComponentSize;
		variant?: ComponentVariant;
		readonly?: boolean;
		disabled?: boolean;
		invalid?: boolean;
		invalidText?: string;
		defaultToggled?: boolean;
		animation?: boolean;
		classes?: SlotsToClasses<SwitchSlots>;
	}

	/**
	 * Property that defines the id of the switch.
	 */
	export let id: string = '';
	/**
	 * Property that defines the label text for the switch is ON.
	 */
	export let textForOn: string = '';
	/**
	 * Property that defines the label text when the switch is OFF.
	 */
	export let textForOff: string = '';
	/**
	 * Provide the text that will be read by a screen reader when visiting this control.
	 */
	export let label: string | undefined = undefined;
	/**
	 * Specify the size of the Toggle.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Switch type.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines readonly state of the switch.
	 */
	export let readonly: boolean = false;
	/**
	 * Property that defines if the switch is disabled.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines if the switch is invalid.
	 */
	export let invalid: boolean = false;
	/**
	 * Property that defines the text message shows under this component if the switch is invalid.
	 */
	export let invalidText: string = '';
	/**
	 * Property that defines the default toggled value of the switch.
	 */
	export let defaultToggled: boolean = false;
	/**
	 * Property that defines the classes of the switch.
	 */
	export let classes: SlotsToClasses<SwitchSlots> = {};
	/**
	 * Property that defines the animation of the switch.
	 */
	export let animation: boolean = true;

	$: toggled = defaultToggled;
	$: toggleLabel = toggled ? textForOn : textForOff;

	// tailwind-variants
	const slots = switchVariant({ size, variant, disabled, readonly, toggled, invalid });

	// handlers
	const dispatcher = createEventDispatcher();
	const onToggle = (event: MouseEvent) => {
		if (!disabled && !readonly) {
			toggled = !toggled;
		}
		dispatcher('toggle', { toggled });
		dispatcher('click', { toggled, event });
	};
	const onKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			if (!disabled && !readonly) {
				toggled = !toggled;
			}
		}
		dispatcher('toggle', { toggled });
		dispatcher('click', { toggled, event });
	};
</script>

<div
	class={cn(
		slots.wrapper({ size, variant, readonly, disabled, toggled, invalid, animation }),
		classes.wrapper
	)}
>
	<!-- Label -->
	{#if label}
		<label
			class={cn(
				slots.label({ size, variant, readonly, disabled, toggled, invalid, animation }),
				classes.label
			)}
			for={id}>{label}</label
		>
	{/if}
	<!-- Switch -->
	<div
		class={cn(
			slots.switchWrapper({ size, variant, readonly, disabled, toggled, invalid, animation }),
			classes.switchWrapper
		)}
	>
		<div
			{id}
			aria-checked={toggled}
			aria-readonly={readonly}
			aria-disabled={disabled}
			{...$$restProps}
			role="switch"
			tabindex="0"
			class={cn(
				slots.base({ size, variant, readonly, disabled, toggled, invalid, animation }),
				classes.base
			)}
			on:click={onToggle}
			on:keypress={onKeyPress}
		>
			<div
				class={cn(
					slots.switchChip({ size, variant, readonly, disabled, toggled, invalid, animation }),
					classes.switchChip
				)}
			/>
		</div>
		{#if toggleLabel}
			<span
				class={cn(
					slots.switchText({ size, variant, readonly, disabled, toggled, invalid, animation }),
					classes.switchText
				)}
				data-testid="label-text">{toggleLabel}</span
			>
		{/if}
	</div>
	<!-- Invalid -->
	{#if invalid && invalidText && invalidText !== ''}
		<p
			class={cn(
				slots.invalid({ size, variant, readonly, disabled, toggled, invalid, animation }),
				classes.invalid
			)}
		>
			{invalidText}
		</p>
	{/if}
</div>
