<script lang="ts">
	import '$lib/styles/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { createEventDispatcher } from 'svelte';
	import { useCheckBox } from './hooks/useCheckbox';
	import CheckIcon from './icons/CheckIcon/CheckIcon.svelte';
	import IndeterminateIcon from './icons/InderminateIcon/IndeterminateIcon.svelte';

	/**
	 * Property that define the variant of the checkbox.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the size of the checkobx.
	 */
	export let size: ComponentSize = 'md';

	/**
	 * Property that defines the label of the checkbox.
	 */
	export const label: string = '';

	/**
	 * Value for the checkbox
	 */
	export let value: string = '';

	/**
	 * Specify whether the input should be checked by default.
	 */
	export const isDefaultChecked: boolean = false;

	/**
	 * Property that defines the indeterminate state of the checkbox.
	 */
	export let isIndeterminate: boolean = false;

	/**
	 * Property that defines the disabled state of the checkbox.
	 */
	export let isAnimation: boolean = false;

	let checked = isDefaultChecked;
	let inputElement: HTMLInputElement;
	const dispatcher = createEventDispatcher();

	const { className, disabled } = $$props;

	// --- Stateless logic ---
	$: checkboxProps = useCheckBox({
		className,
		disabled,
		variant,
		size,
		isAnimation
	});

	// TODO: Extractable?
	// --- Stateful logic ---
	const onclick = (e: MouseEvent) => {
		if (disabled || isIndeterminate) return;
		checked = !checked;
		dispatcher('click', e);
	};
	const onkeydown = (
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLLabelElement;
		}
	) => {
		if (disabled || isIndeterminate) return;
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
		if (disabled || isIndeterminate) return;
		checked = !checked;
		dispatcher('change', e);
	};
</script>

<label
	{...$$restProps}
	class={checkboxProps.slots.base}
	tabindex="0"
	aria-checked={checked}
	aria-disabled={disabled}
	on:click={onclick}
	on:keydown={onkeydown}
>
	<input bind:this={inputElement} {value} type="checkbox" class="hidden" on:change={onchange} />
	{#if isIndeterminate}
		<IndeterminateIcon {...checkboxProps.indeterminateIconProps} />
	{:else}
		<CheckIcon {...checkboxProps.checkIconProps} {checked} {isAnimation} />
	{/if}
	<slot />
</label>
