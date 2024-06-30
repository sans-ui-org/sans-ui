<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { getSwitchSlots } from './Switch';

	type $$BaseProps = Omit<HTMLDivElement, 'size' | 'id'>;

	interface $$Props extends $$BaseProps {
		id?: string;
		optionA?: string;
		optionB?: string;
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
	 * Property that defines the label for A position.
	 */
	export let optionA: string = '';
	/**
	 * Specify the label for the "off" position.(B)
	 */
	export let optionB: string = '';
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
	$: toggleLabel = toggled ? optionA : optionB;

	let className = $$props.class;

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
			aria-checked={toggled}
			aria-readonly={readonly}
			aria-disabled={disabled}
			{...$$restProps}
			role="switch"
			tabindex="0"
			class={slots.switch}
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
