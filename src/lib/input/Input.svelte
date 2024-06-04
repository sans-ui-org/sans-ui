<script lang="ts">
	import InputContent from '$lib/inputContent/InputContent.svelte';
	import '$lib/styles/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { getInputSlots } from './Input';

	export let id: string;
	export let variant: ComponentVariant = 'primary';
	export let size: ComponentSize = 'md';
	export let label: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let clearable: boolean = true;
	export let animation: boolean = true;
	export let placeholder: string = '';
	export let maxCount: number;
	export let invalid: boolean = false;
	export let invalidText: string = '';
	export let startContent;
	export let endContent;

	let charCounter: number;
	let input: string;
	$: charCounter = input ? input.length : 0;
	$: counterText = `${charCounter}/${maxCount}`;
	$: className = $$props.class;
	$: slots = getInputSlots({
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
		input = target.value;

		$$props.onChange && $$props.onInput(e);
	};
	const onClear = () => {
		if (readonly || disabled) return;
		input = '';
	};
</script>

<div class={slots.labelWrapper}>
	<label for={id} class={slots.label}>{label}</label>
	{#if maxCount}
		<span>{counterText}</span>
	{/if}
</div>

<div class={slots.inputWrapper}>
	{#if startContent}
		<InputContent class={slots.startContent} content={startContent} {clearable} />
	{/if}
	<input
		{...$$restProps}
		bind:value={input}
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
	{:else if clearable}
		<button class={slots.endContent} disabled={disabled || readonly} on:click={onClear}>
			<InputContent content={null} {clearable} />
		</button>
	{/if}
</div>

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
