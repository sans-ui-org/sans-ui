<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { getTextAreaSlots } from '$lib/textArea/TextArea';
	import { createEventDispatcher } from 'svelte';

	interface $$Props extends HTMLTextareaAttributes {
		id?: string;
		value?: string | number;
		variant?: ComponentVariant;
		size?: ComponentSize;
		label?: string;
		disabled?: boolean;
		readonly?: boolean;
		required?: boolean;
		clearable?: boolean;
		animation?: boolean;
		maxCount?: number;
		invalid?: boolean;
		invalidText?: string;
		defaultToggled?: boolean;
		rows?: number;
	}

	/**
	 * Property that defines the id of the textarea.
	 */
	export let id: string = "";
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
	 * Property that defines if the textarea is clearable.
	 */
	export let clearable: boolean = true;
	/**
	 * Property that defines if the textarea has animation.
	 */
	export let animation: boolean = true;
	/**
	 * Property that defines the maximum count of the textarea.
	 */
	export let maxCount: number | undefined = undefined;
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

	let className = $$props.class;
	const dispatch = createEventDispatcher();

	$: charCounter = value ? value.toString().length : 0;
	$: counterText = `${charCounter}/${maxCount}`;

	// slots
	$: slots = getTextAreaSlots({
		className,
		variant,
		size,
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

		dispatch('input', e); // client event
	};
</script>

<!-- Label -->
{#if label}
	<div class={slots.labelWrapper}>
		<label for={id} class={slots.label}>{label}</label>
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
	aria-disabled={disabled}
	aria-readonly={readonly}
	aria-invalid={invalid}
	class:animation={animation && !invalid}
	class={slots.textArea}
/>

<!-- Error Text -->
{#if invalid && invalidText && invalidText !== ''}
	<span class={slots.invalidText}>{invalidText}</span>
{/if}

<style>
	.animation:focus-visible {
		--_i: 100%;
	}
	.animation {
		-webkit-mask:
			conic-gradient(from 180deg at top 8px right 8px, #0000 90deg, #000 0) var(--_i, 200%) 0 /200% var(
					--_i,
					8px
				) border-box no-repeat,
			conic-gradient(at bottom 8px left 8px, #0000 90deg, #000 0) 0 var(--_i, 200%) / var(--_i, 8px)
				200% border-box no-repeat,
			linear-gradient(#000 0 0) padding-box no-repeat;
		mask:
			conic-gradient(from 180deg at top 8px right 8px, #0000 90deg, #000 0) var(--_i, 200%) 0 /200% var(
					--_i,
					8px
				) border-box no-repeat,
			conic-gradient(at bottom 8px left 8px, #0000 90deg, #000 0) 0 var(--_i, 200%) / var(--_i, 8px)
				200% border-box no-repeat,
			linear-gradient(#000 0 0) padding-box no-repeat;
		transition:
			0.4s,
			-webkit-mask-position 0.4s;
	}
</style>
