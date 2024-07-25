<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { switchVariant } from '$lib/switch/Switch';

	type $$BaseProps = HTMLBaseAttributes;

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

	$: toggled = defaultToggled;
	$: toggleLabel = toggled ? textForOn : textForOff;

	// tailwind-variants
	const slots = switchVariant({ size, variant, disabled, readonly, toggled, invalid });

	// handlers
	const onToggle = () => {
		if (!disabled && !readonly) {
			toggled = !toggled;
		}
	};
	const onKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			onToggle();
		}
	};
</script>

<div class={slots.base({})}>
	<!-- Label -->
	{#if label}
		<label class={slots.label({ size, invalid })} for={id}>{label}</label>
	{/if}
	<!-- Switch -->
	<div class={slots.wrapper({})}>
		<div
			{id}
			aria-checked={toggled}
			aria-readonly={readonly}
			aria-disabled={disabled}
			{...$$restProps}
			role="switch"
			tabindex="0"
			class={slots.switch({ size, variant, disabled, readonly, toggled })}
			on:click={onToggle}
			on:keypress={onKeyPress}
		>
			<div class={slots.switchChip({ size, disabled, toggled })} />
		</div>
		<span class={slots.switchText({})}>{toggleLabel}</span>
	</div>
	<!-- Invalid -->
	{#if invalid && invalidText && invalidText !== ''}
		<p class={slots.invalidText({})}>{invalidText}</p>
	{/if}
</div>
