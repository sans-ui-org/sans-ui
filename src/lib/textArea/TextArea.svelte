<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';
	import { textareaVariant, type TextareaSlots } from '$lib/textArea/TextArea';
	import { cn } from '$lib/utils/cn';

	interface $$Props extends HTMLTextareaAttributes {
		id?: string;
		value?: string | number;
		variant?: ComponentVariant;
		size?: ComponentSize;
		label?: string;
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		required?: boolean;
		animation?: boolean;
		maxCount?: number;
		invalid?: boolean;
		invalidText?: string;
		rows?: number;
		classes?: SlotsToClasses<TextareaSlots>;
	}

	/**
	 * Property that defines the id of the textarea.
	 */
	export let id: string = '';
	/**
	 * Property that defines the value of the textarea.
	 */
	export let value: string | number | undefined = undefined;
	/**
	 * Property that defines the variant of the textarea.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines the size of the textarea.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Property that defines the label of the textarea.
	 */
	export let label: string | undefined = undefined;
	/**
	 * Property that defines the placeholder of the textarea.
	 */
	export let placeholder: string | undefined = undefined;
	/**
	 * Property that defines if the textarea is required.
	 */
	export let required: boolean = false;
	/**
	 * Property that defines if the textarea is disabled.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines if the textarea is readonly.
	 */
	export let readonly: boolean = false;
	/**
	 * Property that defines if the textarea has animation.
	 */
	export let animation: boolean = true;
	/**
	 * Property that defines the maximum count of the textarea.
	 */
	export let maxCount: number | undefined = 0;
	/**
	 * Property that defines if the textarea is invalid.
	 */
	export let invalid: boolean = false;
	/**
	 * Property that defines the text message shows under this component if the textarea is invalid.
	 */
	export let invalidText: string = '';
	/**
	 * Property that defines the rows of the textarea.
	 */
	export let rows: number = 4;
	/**
	 * Property that defines the classes of the textarea.
	 */
	export let classes: SlotsToClasses<TextareaSlots> = {};

	const dispatch = createEventDispatcher();

	$: charCounter = value ? value.toString().length : 0;
	$: counterText = `${charCounter}/${maxCount}`;

	// slots
	const slots = textareaVariant({ variant, size, invalid, animation, disabled });

	// handler
	const onInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		if (maxCount && target.value.length > maxCount) {
			target.value = target.value.slice(0, maxCount);
		}
		value = target.value;

		dispatch('input', e); // client event
	};
</script>

<!-- Label -->
{#if label || maxCount}
	<div class={cn(slots.labelWrapper({ size }), classes.labelWrapper)}>
		{#if label}
			<label for={id} class={cn(slots.label({ invalid }), classes.label)}>{label}</label>
		{:else}
			<label for={id} />
		{/if}
		{#if maxCount}
			<span>{counterText}</span>
		{/if}
	</div>
{/if}

<!-- Textarea -->
<textarea
	{...$$restProps}
	bind:value
	on:input={onInput}
	{id}
	{disabled}
	{readonly}
	{rows}
	{placeholder}
	aria-disabled={disabled}
	aria-readonly={readonly}
	aria-invalid={invalid}
	class={cn(slots.base({ size, variant, invalid, animation, disabled }), classes.base)}
/>

<!-- Invalid -->
{#if invalid && invalidText && invalidText !== ''}
	<span
		class={cn(
			slots.invalidText({ size, variant, invalid, animation, disabled }),
			classes.invalidText
		)}>{invalidText}</span
	>
{/if}
