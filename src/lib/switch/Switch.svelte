<script lang="ts">
	import '$lib/styles/global.css';
	import type { ComponentVariant } from '$lib/utils/utils';
	import { getSwitchSlots } from './Switch';

	/**
	 * Property that defines the id of the switch.
	 */
	export let id: string;

	/**
	 * Property that defines the label for A position.
	 */
	export let optionA: string;
	/**
	 * Specify the label for the "off" position.(B)
	 */
	export let optionB: string;
	/**
	 * Provide the text that will be read by a screen reader when visiting this control.
	 */
	export let label: string;
	/**
	 * Specify the size of the Toggle.
	 */
	export let size: 'sm' | 'md';
	/**
	 * Switch type.
	 */
	export let variant: ComponentVariant;
	/**
	 * Property that defines readonly state of the switch.
	 */
	export let readonly: boolean;
	/**
	 * Property that defines if the switch is disabled.
	 */
	export let disabled: boolean;
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
	export let defaultToggled: boolean;

	let toggled = defaultToggled;

	$: toggled = false;
	$: toggleLabel = toggled ? optionA : optionB;
	$: className = $$props.class;
	$: disabled = $$props.disabled;
	$: slots = getSwitchSlots({
		className,
		size,
		variant,
		readonly,
		disabled,
		toggled,
		invalid,
		invalidText
	});

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

<div class={slots.base}>
	{#if label}
		<label class={slots.label} for={id}>{label}</label>
	{/if}
	<div class={slots.switchWrapper}>
		<div
			{id}
			role="switch"
			tabindex="0"
			class={slots.switch}
			aria-checked={toggled}
			aria-readonly={readonly}
			aria-disabled={disabled}
			on:click={onToggle}
			on:keypress={onKeyPress}
		>
			<div class={slots.switchChip} />
		</div>
		<span class={slots.switchLabel}>{toggleLabel}</span>
	</div>
	<!-- Invalid -->
	{#if invalid && invalidText && invalidText !== ''}
		<p class={slots.invalidText}>{invalidText}</p>
	{/if}
</div>
