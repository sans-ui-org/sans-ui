<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';
	import { tv } from '$lib/utils/tv';

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

	const dispatch = createEventDispatcher();

	$: charCounter = value ? value.toString().length : 0;
	$: counterText = `${charCounter}/${maxCount}`;

	// slots
	const textareaVariant = tv({
		slots: {
			labelWrapper: ['flex flex-row items-center justify-between w-full'],
			label: ['font-normal'],
			base: [
				'font-normal bg-gray-100 hover:bg-gray-200 focus-visible:bg-gray-100 border-gray-200 px-3 py-2 mt-2 w-full resize-none border-2 focus-visible:outline-0'
			],
			invalidText: ['text-sm text-red-500 mt-1']
		},
		variants: {
			variant: {
				primary: { base: 'focus-visible:border-blue-500' },
				secondary: { base: 'focus-visible:border-neutral-500' },
				success: { base: 'focus-visible:border-green-500' },
				warning: { base: 'focus-visible:border-yellow-500' },
				danger: { base: 'focus-visible:border-red-500' }
			},
			size: {
				sm: { labelWrapper: ['text-xs'], base: ['text-xs'] },
				md: { labelWrapper: ['text-sm'], base: ['text-sm'] },
				lg: { labelWrapper: ['text-base'], base: ['text-base'] }
			},
			invalid: {
				true: { label: 'text-red-500', base: ['border-red-500', 'focus-visible:border-red-500'] }
			},
			animation: {
				true: { base: ['transition-all duration-300 ease-in-out'] }
			},
			disabled: {
				true: { base: ['text-gray-500 cursor-not-allowed'] },
				false: { base: ['text-black cursor-text'] }
			}
		}
	});
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
	<div class={slots.labelWrapper({ size })}>
		{#if label}
			<label for={id} class={slots.label({ invalid })}>{label}</label>
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
	class:animation={animation && !invalid}
	class={slots.base({ variant, size, invalid, animation, disabled })}
/>

<!-- Invalid -->
{#if invalid && invalidText && invalidText !== ''}
	<span class={slots.invalidText({})}>{invalidText}</span>
{/if}
