<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { createEventDispatcher } from 'svelte';
	import CheckIcon from './icons/CheckIcon/CheckIcon.svelte';
	import IndeterminateIcon from './icons/InderminateIcon/IndeterminateIcon.svelte';
	import { getCheckBoxSlots } from './Checkbox';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLLabelElement> {
		id?: string;
		variant?: ComponentVariant;
		size?: ComponentSize;
		label?: string;
		value?: string;
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
	 * Property that defines the label of the checkbox.
	 */
	export let label: string = '';
	/**
	 * Value for the checkbox
	 */
	export let value: string = '';
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

	console.log('default', defaultChecked);
	let checked = defaultChecked;
	let inputElement: HTMLInputElement;
	const dispatcher = createEventDispatcher();

	const { className, disabled } = $$restProps;
	const indeterminateIconProps = {
		disabled,
		size,
		variant
	};
	const checkIconProps = {
		...indeterminateIconProps,
		animation
	};

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
		if (disabled || indeterminate) return;
		checked = !checked;
		dispatcher('click', e);
	};
	const onkeydown = (
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLLabelElement;
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
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label
	{...$$restProps}
	class={slots.base}
	tabindex="0"
	aria-checked={checked}
	aria-disabled={disabled}
	on:click={onclick}
	on:keydown={onkeydown}
>
	<input bind:this={inputElement} {value} type="checkbox" class="hidden" on:change={onchange} />
	{#if indeterminate}
		<IndeterminateIcon {...indeterminateIconProps} />
	{:else}
		<CheckIcon {...checkIconProps} bind:checked {animation} />
	{/if}
	<slot />
</label>
