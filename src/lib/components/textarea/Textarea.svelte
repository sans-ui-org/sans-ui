<script lang="ts">
	import type {
		ComponentRounded,
		ComponentSize,
		ComponentVariant,
		SlotsToClasses
	} from '../../utils/utils';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';
	import { textareaVariant, type TextareaSlots } from '../../components/textarea/Textarea';
	import { cn } from '../../utils/cn';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends HTMLTextareaAttributes {
		id?: string;
		value?: string | number;
		variant?: ComponentVariant;
		size?: ComponentSize;
		rounded?: ComponentRounded;
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		// required?: boolean;
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
	 * Property that defines the roundness of the textarea.
	 */
	export let rounded: ComponentRounded = 'none';
	/**
	 * Property that defines the placeholder of the textarea.
	 */
	export let placeholder: string | undefined = undefined;
	/**
	 * Property that defines if the textarea is required.
	 */
	// export let required: boolean = false;
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

	// slots
	const slots = textareaVariant({ variant, size, rounded, invalid, animation, disabled });

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
