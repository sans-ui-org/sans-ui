<script lang="ts">
	import '$lib/global.css';
	import InputContent from '$lib/inputContent/InputContent.svelte';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { SvelteComponent } from 'svelte';
	import { tv } from '$lib/utils/tv';
	import { cn } from '$lib/utils/cn';

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
	$: charCounter = value ? value.toString().length : 0;
	$: counterText = `${charCounter}/${maxCount}`;

	// tailwind-variant
	const inputVariant = tv({
		slots: {
			base: ['font-normal bg-gray-100 w-full pl-3 pr-10 border-gray-200 focus:outline-0 border-2'],
			labelWrapper: ['flex flex-row items-center justify-between w-full'],
			label: ['font-normal'],
			inputWrapper: ['relative font-normal bg-gray-100 mt-2 w-full'],
			startContent: ['absolute h-10 w-10 flex flex-row items-center justify-center top-1 left-0'],
			endContent: ['absolute h-10 w-10 flex flex-row items-center justify-center top-1 left-0']
		},
		variants: {
			variant: {
				primary: {
					base: 'focus-visible:border-blue-500',
					startContent: 'focus-visible:border-blue-500',
					endContent: 'focus-visible:border-blue-500'
				},
				secondary: {
					base: 'focus-visible:border-neutral-500',
					startContent: 'focus-visible:border-neutral-500',
					endContent: 'focus-visible:border-neutral-500'
				},
				success: {
					base: 'focus-visible:border-green-500',
					startContent: 'focus-visible:border-green-500',
					endContent: 'focus-visible:border-green-500'
				},
				warning: {
					base: 'focus-visible:border-yellow-500',
					startContent: 'focus-visible:border-yellow-500',
					endContent: 'focus-visible:border-yellow-500'
				},
				danger: {
					base: 'focus-visible:border-red-500',
					startContent: 'focus-visible:border-red-500',
					endContent: 'focus-visible:border-red-500'
				}
			},
			size: {
				sm: {
					base: 'h-10'
				},
				md: {
					base: 'h-12'
				},
				lg: {
					base: 'h-14'
				}
			},
			invalid: {
				true: {
					base: 'border-red-500 focus-visible:border-red-500',
					label: 'text-red-500',
					startContent: 'focus-visible:border-red-500',
					endContent: 'focus-visible:border-red-500'
				},
				false: { base: '' }
			},
			animation: { true: { base: 'transition-all duration-300 ease-in' }, false: { base: '' } },
			disabled: {
				true: {
					base: 'cursor-not-allowed text-gray-500',
					inputWrapper: 'cursor-not-allowed bg-gray-500'
				},
				false: { base: 'cursor-text text-black', inputWrapper: 'cursor-text text-black' }
			},
			clearable: {
				true: {
					startContent: 'focus:outline-0 focus:border-2',
					endContent: 'focus:outline-0 focus:border-2'
				},
				false: ''
			}
		}
	});
	const slots = inputVariant({ variant, size, invalid, animation, disabled });

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
<!-- Input -->
<div class={slots.inputWrapper({ disabled })}>
	{#if startContent}
		<InputContent
			class={slots.startContent({ variant, clearable, disabled, invalid })}
			content={startContent}
			{clearable}
		/>
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
		class={cn(
			slots.base({ size, variant, invalid, animation, disabled, clearable }),
			$$restProps.class
		)}
	/>
	{#if endContent}
		<InputContent
			class={slots.endContent({ variant, clearable, disabled, invalid })}
			content={endContent}
			{clearable}
		/>
	{:else if clearable && value && value !== '' && !disabled && !readonly}
		<button
			class={slots.endContent({ variant, clearable, disabled, invalid })}
			disabled={disabled || readonly}
			on:click={onClear}
		>
			<InputContent content={null} {clearable} />
		</button>
	{/if}
</div>

<!-- Error text -->
{#if invalid && invalidText && invalidText !== ''}
	<span class="text-sm text-red-500 mt-1">{invalidText}</span>
{/if}
