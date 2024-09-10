<script lang="ts">
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';
	import { checkboxVariant, type CheckboxSlots } from '$lib/checkbox/Checkbox';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends $$BaseProps {
		id?: string;
		variant?: ComponentVariant;
		size?: ComponentSize;
		value?: string;
		disabled?: boolean;
		checked?: boolean;
		indeterminate?: boolean;
		animation?: boolean;
		classes?: SlotsToClasses<CheckboxSlots>;
	}

	/**
	 * Property that define the id for the checkbox.
	 */
	export let id: string = '';
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
	 * Property that defines the checked state of the checkbox.
	 */
	export let checked: boolean = false;
	/**
	 * Property that defines the disabled state of the checkbox.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines the indeterminate state of the checkbox.
	 */
	export let indeterminate: boolean = false;
	/**
	 * Property that defines the disabled state of the checkbox.
	 */
	export let animation: boolean = true;
	/**
	 * Property that defines the class names of the checkbox.
	 */
	export let classes: SlotsToClasses<CheckboxSlots> = {};

	const dispatcher = createEventDispatcher();

	// tailwind-variant
	const slots = checkboxVariant({ size, variant, disabled, checked, indeterminate });

	// --- Stateful logic ---
	const onchange = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		if (disabled || indeterminate) {
			return;
		}
		checked = !checked;
		dispatcher('change', e);
	};
</script>

<input
	{...$$restProps}
	{id}
	type="checkbox"
	{disabled}
	{checked}
	{indeterminate}
	{value}
	aria-checked={checked}
	aria-disabled={disabled}
	on:change={onchange}
	class:animation
	class={cn(
		slots.base({ size, variant, disabled, checked, indeterminate }),
		classes.base,
		$$restProps.class
	)}
/>

<!-- TODO: Let's use Tailwind-->
<style>
	input::before {
		clip-path: polygon(20% 50%, 40% 70%, 85% 20%, 100% 35%, 40% 90%, 0% 60%);
		transform: scale(0);
	}
	input.animation::before {
		transform-origin: bottom left;
		transition: 200ms transform ease-in-out;
		transition-delay: 75ms;
	}
	input:checked::before {
		transform: scale(1);
	}

	input:indeterminate::before {
		clip-path: polygon(15% 42%, 15% 60%, 85% 60%, 85% 42%);
		transform: scale(1);
	}
</style>
