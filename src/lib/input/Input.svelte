<script lang="ts">
	import InputContent from '$lib/inputContent/InputContent.svelte';
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { getInputSlots } from '$lib/input/Input';
	import type { SvelteComponent } from 'svelte';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	interface $$Props extends $$BaseProps {
		id?: string;
		value?: string | number | undefined;
		variant?: ComponentVariant;
		size?: ComponentSize;
		label?: string;
		required?: boolean;
		disabled?: boolean;
		readonly?: boolean;
		clearable?: boolean;
		animation?: boolean;
		placeholder?: string;
		maxCount?: number;
		invalid?: boolean;
		invalidText?: string;
		startContent?: typeof SvelteComponent;
		endContent?: typeof SvelteComponent;
	}

	/**
	 * Property that defines the id of the input.
	 */
	export let id: string = '';
	/**
	 * Property that defines the value of the input.
	 */
	export let value: string | number | undefined = undefined;
	/**
	 * Property that defines the variant of the input.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines the size of the input.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Property that defines the label of the input.
	 */
	export let label: string | undefined = undefined;
	/**
	 * Property that defines if the input is required.
	 */
	export let required: boolean = false;
	/**
	 * Property that defines if the input is disabled.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines if the input is readonly.
	 */
	export let readonly: boolean = false;
	/**
	 * Property that defines if the input is clearable.
	 */
	export let clearable: boolean = true;
	/**
	 * Property that defines if the input has animation.
	 */
	export let animation: boolean = true;
	/**
	 * Property that defines the placeholder of the input.
	 */
	export let placeholder: string = '';
	/**
	 * Property that defines the maximum count of the input.
	 */
	export let maxCount: number | undefined = 0;
	/**
	 * Property that defines if the input is invalid.
	 */
	export let invalid: boolean = false;
	/**
	 * Property that defines the text message shows under this component if the input is invalid.
	 */
	export let invalidText: string = '';
	/**
	 * Property that defines the start content of the input.
	 */
	export let startContent: typeof SvelteComponent | undefined = undefined;
	/**
	 * Property that defines the end content of the input.
	 */
	export let endContent: typeof SvelteComponent | undefined = undefined;

	let charCounter: number;
	let className = $$props.class;

	$: charCounter = value ? value.toString().length : 0;
	$: counterText = `${charCounter}/${maxCount}`;

	// slots
	$: slots = getInputSlots({
		className,
		variant,
		size,
		clearable,
		disabled,
		animation,
		invalid,
		invalidText
	});

	const onInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		if (maxCount && target.value.length > maxCount) {
			target.value = target.value.slice(0, maxCount);
		}
		value = target.value;

		$$props.onChange && $$props.onInput(e);
	};
	const onClear = () => {
		if (readonly || disabled) return;
		value = '';
	};
</script>

<!-- Label -->
{#if label || maxCount}
	<div class={slots.labelWrapper}>
		{#if label}
			<label for={id} class={slots.label}>{label}</label>
		{:else}
			<label for={id} />
		{/if}
		{#if maxCount}
			<span>{counterText}</span>
		{/if}
	</div>
{/if}
<!-- Input -->
<div class={slots.inputWrapper}>
	{#if startContent}
		<InputContent class={slots.startContent} content={startContent} {clearable} />
	{/if}
	<input
		{...$$restProps}
		bind:value
		on:input={onInput}
		{id}
		{disabled}
		{readonly}
		{placeholder}
		aria-disabled={disabled}
		aria-readonly={readonly}
		aria-invalid={invalid}
		class:animation={animation && !invalid}
		class={slots.input}
	/>
	{#if endContent}
		<InputContent class={slots.endContent} content={endContent} {clearable} />
	{:else if clearable && value && value !== '' && !disabled && !readonly}
		<button class={slots.endContent} disabled={disabled || readonly} on:click={onClear}>
			<InputContent content={null} {clearable} />
		</button>
	{/if}
</div>

<!-- Error text -->
{#if invalid && invalidText && invalidText !== ''}
	<span class={slots.invalidText}>{invalidText}</span>
{/if}
