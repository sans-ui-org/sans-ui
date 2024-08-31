<script lang="ts" context="module">
	export type Option = {
		label: string;
		value: string | number | boolean | symbol;
	};
</script>

<script lang="ts">
	import '$lib/global.css';
	import type {
		ComponentRounded,
		ComponentSize,
		ComponentVariant,
		SlotsToClasses
	} from '$lib/utils/utils';
	import { close, select, listbox } from '$lib/select/actions/select';
	import SelectCheckIcon from '$lib/select/icons/SelectCheckIcon.svelte';
	import SelectChevronIcon from '$lib/select/icons/SelectChevronIcon.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { selectVariant, type SelectSlots } from '$lib/select/Select';
	import { cn } from '$lib/utils/cn';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	interface $$Props extends $$BaseProps {
		id?: string;
		size?: ComponentSize;
		variant?: ComponentVariant;
		rounded?: ComponentRounded;
		defaultSelected?: Option;
		options: Option[];
		label?: string;
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		required?: boolean;
		animation?: boolean;
		invalid?: boolean;
		invalidText?: string;
		classes?: SlotsToClasses<SelectSlots>;
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
	 * Property that defines the variant of the select.
	 */
	export let variant: ComponentVariant = 'primary';
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
	export let placeholder: string = '';
	/**
	 * Property that defines if the select is disabled.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines the roundness of the select.
	 */
	export let rounded: ComponentRounded = 'none';
	/**
	 * Property that defines if the select is readonly.
	 */
	export let readonly: boolean = false;
	/**
	 * Property that defines if the select is required.
	 */
	export let required: boolean = false;
	/**
	 * Property that defines if the select has animation.
	 */
	export let animation: boolean = true;
	/**
	 * Property that defines if the select is invalid.
	 */
	export let invalid: boolean = false;
	/**
	 * Property that defines the text message shows under this component if the select is invalid.
	 */
	export let invalidText: string = '';
	/**
	 * Property that defines the class names of the select.
	 */
	export let classes: SlotsToClasses<SelectSlots> = {};

	let containerElement: HTMLDivElement;
	let open: boolean;
	let selected: Option | null;
	let focus: number | null;

	$: open = false;
	$: selected = options.find((option) => option.value === defaultSelected?.value) || null;
	$: focus = null;

	// tailwind-variants
	const slots = selectVariant({
		variant,
		size,
		rounded,
		open,
		readonly,
		disabled,
		animation,
		invalid
	});

	// handlers
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
		if (!open) return;
		const index =
			focus !== null ? focus : options.findIndex((option) => option.value === selected?.value);
		if (index < options.length - 1) focus = index + 1;
	};
	const onMoveUp = () => {
		if (!open) return;
		const index =
			focus !== null ? focus : options.findIndex((option) => option.value === selected?.value);
		if (index > 0) focus = index - 1;
	};
</script>

<!-- Label -->
{#if label && label !== ''}
	<label class={cn(slots.label({ size, invalid }), classes.label)} for={id} aria-labelledby={id}
		>{label}</label
	>
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
	class={cn(slots.base({ invalid }), classes.base)}
	bind:this={containerElement}
>
	<!-- Trigger -->
	<button
		aria-disabled={disabled}
		class={cn(slots.trigger({ variant, size, invalid, disabled }), classes.trigger)}
		on:click={onToggle}
		use:close={onCloseByClickingOutside}
		{disabled}
		{...$$restProps}
	>
		<div class={cn(slots.placeholderWrapper({}), classes.placeholderWrapper)}>
			<span class={cn(slots.placeholder({}), classes.placeholder)}
				>{(selected && selected.label) || placeholder}</span
			>
		</div>
		<SelectChevronIcon bind:open size={20} {animation} />
	</button>

	<!-- Listbox -->
	<ul
		role="menu"
		class={cn(slots.listbox({ open, animation }), classes.listbox)}
		use:listbox={{ onClose, onMoveDown, onMoveUp, onSelect }}
	>
		{#each options as option, i}
			<li
				role="option"
				class={cn(
					slots.option({ open, readonly }),
					selected && selected.value === option.value && 'bg-neutral-200 dark:bg-neutral-700',
					i === focus && 'border-blue-500 dark:border-blue-500',
					classes.option
				)}
				aria-selected={selected && selected.value === option.value}
				use:select={() => onSelectByClicking(option)}
				data-testid="opt{i}"
				value={i}
			>
				<div class={cn(slots.optionTextWrapper({}), classes.optionTextWrapper)}>
					<span class={cn(slots.optionText({}), classes.optionText)}>{option.label}</span>
				</div>
				{#if selected && selected.value === option.value}
					<SelectCheckIcon {variant} size={18} />
				{/if}
			</li>
		{/each}
	</ul>
</div>
<!-- Invalid -->
{#if invalid && invalidText && invalidText !== ''}
	<p class={cn(slots.invalidText({}), classes.invalidText)}>{invalidText}</p>
{/if}
