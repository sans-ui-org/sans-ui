<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { createEventDispatcher } from 'svelte';
	import CheckIcon from '$lib/checkbox/icons/CheckIcon/CheckIcon.svelte';
	import IndeterminateIcon from '$lib/checkbox/icons/InderminateIcon/IndeterminateIcon.svelte';
	import { getCheckBoxSlots } from '$lib/checkbox/Checkbox';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	interface $$Props extends $$BaseProps {
		variant?: ComponentVariant;
		size?: ComponentSize;
		label?: string;
		value?: string;
		disabled?: boolean;
		defaultChecked?: boolean;
		indeterminate?: boolean;
		animation?: boolean;
	}

	/**
	 * Property that define the variant of the checkbox.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines the size of the checkobx.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Value for the checkbox
	 */
	export let value: string = '';
	/**
	 * Property that defines the disabled state of the checkbox.
	 */
	export let disabled: boolean = false;
	/**
	 * Specify whether the input should be checked by default.
	 */
	export let defaultChecked: boolean = false;
	/**
	 * Property that defines the indeterminate state of the checkbox.
	 */
	export let indeterminate: boolean = false;
	/**
	 * Property that defines the disabled state of the checkbox.
	 */
	export let animation: boolean = true;

	let checked = defaultChecked;
	let inputElement: HTMLInputElement;
	const dispatcher = createEventDispatcher();

	let className = $$restProps.class;

	// slots
	$: slots = getCheckBoxSlots({
		className,
		disabled,
		variant,
		size,
		animation
	});

	// TODO: Extractable?
	// --- Stateful logic ---
	const onclick = (e: MouseEvent) => {
		e.preventDefault(); // prevent the cascade of onchange event.
		if (disabled || indeterminate) return;
		checked = !checked;
		dispatcher('click', e);
	};
	const onkeydown = (
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		if (disabled || indeterminate) return;
		if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
			inputElement && inputElement.click();
		}
		dispatcher('keydown', e);
	};
	const onchange = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		if (disabled || indeterminate) return;
		checked = !checked;
		dispatcher('change', e);
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<div
	{...$$restProps}
	role="checkbox"
	class={slots.base}
	tabindex="0"
	aria-checked={checked}
	aria-disabled={disabled}
	on:click={onclick}
	on:keydown={onkeydown}
>
	<input
		bind:this={inputElement}
		{value}
		{disabled}
		{checked}
		type="checkbox"
		class="hidden"
		on:change={onchange}
	/>
	{#if indeterminate}
		<IndeterminateIcon {variant} {size} {disabled} />
	{:else}
		<CheckIcon {variant} {size} {disabled} {animation} {checked} />
	{/if}
</div>
