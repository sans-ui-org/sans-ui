<script lang="ts">
	import type { ComponentSize } from '$lib/utils/utils';
	import { getSelectSlots, type Option } from './Select';
	import { close, select, listbox } from './actions/select';
	import SelectCheckIcon from './icons/SelectCheckIcon.svelte';
	import SelectChevronIcon from './icons/SelectChevronIcon.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	interface $$Props extends $$BaseProps {
		id?: string;
		size?: ComponentSize;
		defaultSelected?: Option;
		options?: Option[];
		label?: string;
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		required?: boolean;
		invalid?: boolean;
		invalidText?: string;
	}

	/**
	 * Property that defines the id of the select.
	 */
	export let id: string = '';
	/**
	 * Property that defines the size of the select.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Property that defines the default selected value of the select.
	 */
	export let defaultSelected: Option | undefined = undefined;
	/**
	 * Property that defines the options of the select.
	 */
	export let options: Option[] = [];
	/**
	 * Property that defines the label of the select.
	 */
	export let label: string | undefined = undefined;
	/**
	 * Property that defines the placeholder of the select.
	 */
	export let placeholder: string | undefined = undefined;
	/**
	 * Property that defines if the select is disabled.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines if the select is readonly.
	 */
	export let readonly: boolean = false;
	/**
	 * Property that defines if the select is required.
	 */
	export let required: boolean = false;
	/**
	 * TODO: Property that defines if the select is invalid.
	 */
	// export let animation: boolean = true;
	/**
	 * Property that defines if the select is invalid.
	 */
	export let invalid: boolean = false;
	/**
	 * Property that defines the text message shows under this component if the select is invalid.
	 */
	export let invalidText: string | undefined = undefined;

	let containerElement: HTMLDivElement;
	let open: boolean;
	let selected: Option | null;
	let focus: number | null;

	$: open = false;
	$: selected = options.find((option) => option.value === defaultSelected?.value) || null;
	$: focus = null;

	const onToggle = () => {
		open = !open;
		if (!open) focus = null;
	};
	const onCloseByClickingOutside = (e: MouseEvent) => {
		if (open && !containerElement.contains(e.target as Node)) {
			open = false;
		}
	};
	const onSelectByClicking = (option: Option) => {
		if (readonly) return;
		selected = selected !== option ? option : null;
		open = false;
		focus = null;
	};
	const onClose = () => {
		open = false;
	};
	const onSelect = () => {
		if (readonly) return;
		if (focus !== null) {
			const option = options[focus];
			selected = selected !== option ? option : null;
			focus = null;
		}
	};
	const onMoveDown = () => {
		const index =
			focus !== null ? focus : options.findIndex((option) => option.value === selected?.value);
		if (index < options.length - 1) focus = index + 1;
	};
	const onMoveUp = () => {
		const index =
			focus !== null ? focus : options.findIndex((option) => option.value === selected?.value);
		if (index > 0) focus = index - 1;
	};

	$: className = $$props.class;
	$: slots = getSelectSlots({ className, size, open, readonly, disabled, invalid, invalidText });
</script>

<!-- Label -->
{#if label && label !== ''}
	<label class={slots.label} for={id} aria-labelledby={id}>{label}</label>
{/if}
<div
	{id}
	aria-label={id}
	role="combobox"
	aria-controls="listbox"
	aria-expanded={open}
	aria-disabled={disabled}
	aria-readonly={readonly}
	aria-invalid={invalid}
	class={slots.base}
	bind:this={containerElement}
>
	<!-- Trigger -->
	<button
		aria-disabled={disabled}
		class={slots.trigger}
		on:click={onToggle}
		use:close={onCloseByClickingOutside}
		{disabled}
		{...$$restProps}
	>
		<div class={slots.placeholderContainer}>
			<span class={slots.placeholder}>{(selected && selected.label) || placeholder}</span>
		</div>
		<SelectChevronIcon size={20} />
	</button>

	{#if open}
		<!-- TODO: Extract -->
		<!-- Listbox -->
		<ul
			role="listbox"
			class={slots.listbox}
			use:listbox={{ onClose, onMoveDown, onMoveUp, onSelect }}
		>
			{#each options as option, i}
				<li
					role="listitem"
					class={slots.option}
					class:selected={selected && selected.value === option.value}
					class:focus={i === focus}
					use:select={() => onSelectByClicking(option)}
				>
					<div class={slots.optionTextWrapper}>
						<span class={slots.optionText}>{option.label}</span>
					</div>
					{#if selected && selected.value === option.value}
						<SelectCheckIcon size={18} />
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>
<!-- Invalid -->
{#if invalid && invalidText && invalidText !== ''}
	<p class={slots.invalidText}>{invalidText}</p>
{/if}

<!-- Reactive CSS styles only *we want to eliminate these codes as much as possible... -->
<style>
	li.selected {
		background-color: #f5f5f5;
	}
	li.focus {
		border: solid 1px #3b82f6;
	}
</style>
