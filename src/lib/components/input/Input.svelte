<script lang="ts">
	import InputContent from '../../components/inputContent/InputContent.svelte';
	import type {
		ComponentRounded,
		ComponentSize,
		ComponentVariant,
		SlotsToClasses
	} from '../../utils/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '../../utils/cn';
	import { inputVariant, type InputSlots } from '../../components/input/Input';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends $$BaseProps {
		id?: string;
		value?: string | number | undefined;
		variant?: ComponentVariant;
		size?: ComponentSize;
		// required?: boolean;
		disabled?: boolean;
		readonly?: boolean;
		clearable?: boolean;
		animation?: boolean;
		rounded?: ComponentRounded;
		placeholder?: string;
		maxCount?: number;
		invalid?: boolean;
		invalidText?: string;
		// startContent?: typeof SvelteComponent;
		// endContent?: typeof SvelteComponent;
		classes?: SlotsToClasses<InputSlots>;
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
	 * Property that defines the rounded corners of the input.
	 */
	export let rounded: ComponentRounded = 'none';
	/**
	 * Property that defines if the input is required.
	 */
	// export let required: boolean = false;
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
	export let clearable: boolean = false;
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
	// export let startContent: typeof SvelteComponent | undefined = undefined;
	/**
	 * Property that defines the end content of the input.
	 */
	// export let endContent: typeof SvelteComponent | undefined = undefined;
	/**
	 * Property that defines the class names of the input.
	 */
	export let classes: SlotsToClasses<InputSlots> = {};

	// tailwind-variant
	const slots = inputVariant({ variant, size, invalid, rounded, animation, disabled });

	// handlers
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

<!-- Input -->
<div class={cn(slots.inputWrapper({ disabled }), classes.inputWrapper)}>
	<!-- {#if startContent}
		<InputContent
			class={cn(
				slots.startContent({ variant, clearable, disabled, invalid }),
				classes.startContent
			)}
			content={startContent}
			{clearable}
		/>
	{/if} -->
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
		class={cn(
			slots.base({ size, variant, invalid, animation, disabled, clearable }),
			classes.base,
			$$restProps.class
		)}
	/>
	<!-- {#if endContent}
		<InputContent
			class={cn(slots.endContent({ variant, clearable, disabled, invalid }), classes.endContent)}
			content={endContent}
			{clearable}
		/> -->
	{#if clearable && value && value !== '' && !disabled && !readonly}
		<button
			class={cn(slots.endContent({ variant, clearable, disabled, invalid }), classes.endContent)}
			disabled={disabled || readonly}
			on:click={onClear}
		>
			<InputContent content={null} {clearable} />
		</button>
	{/if}
</div>

<!-- Invalid -->
{#if invalid && invalidText && invalidText !== ''}
	<span class={cn(slots.invalid({}), classes.invalid)}>{invalidText}</span>
{/if}
