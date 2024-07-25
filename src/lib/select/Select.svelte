<script lang="ts" context="module">
	export type Option = {
		label: string;
		value: string | number | boolean | symbol;
	};
</script>

<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { close, select, listbox } from '$lib/select/actions/select';
	import SelectCheckIcon from '$lib/select/icons/SelectCheckIcon.svelte';
	import SelectChevronIcon from '$lib/select/icons/SelectChevronIcon.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { tv } from '$lib/utils/tv';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	interface $$Props extends $$BaseProps {
		id?: string;
		size?: ComponentSize;
		variant?: ComponentVariant;
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

	let containerElement: HTMLDivElement;
	let open: boolean;
	let selected: Option | null;
	let focus: number | null;

	$: open = false;
	$: selected = options.find((option) => option.value === defaultSelected?.value) || null;
	$: focus = null;

	// tailwind-variants
	const selectVariant = tv({
		slots: {
			label: ['font-normal'],
			base: ['relative border mt-1'],
			trigger: ['w-full flex px-4 py-2 justify-between items-center bg-white'],
			placeholderWrapper: ['w-full truncate flex items-start'],
			placeholder: ['placeholder:text-neutral-500 truncate'],
			listbox: ['border absolute overflow-auto max-h-40 min-w-[160px] mt-1 w-full origin-top'],
			option: [
				'items-center px-4 py-2 justify-between gap-1 items-center border border-transparent bg-white ',
				'hover:bg-gray-100'
			],
			optionTextWrapper: ['w-full truncate flex items-start'],
			optionText: ['truncate'],
			invalidText: ['text-sm text-red-500 mt-1']
		},
		variants: {
			variant: {
				primary: { trigger: 'focus-visible:outline-blue-500' },
				secondary: { trigger: 'focus-visible:outline-gray-500' },
				danger: { trigger: 'focus-visible:outline-red-500' },
				warning: { trigger: 'focus-visible:outline-yellow-500' },
				success: { trigger: 'focus-visible:outline-green-500' }
			},
			size: {
				sm: { label: ['text-xs'], trigger: ['h-8'] },
				md: { label: ['text-sm'], trigger: ['h-10'] },
				lg: { label: ['text-base'], trigger: ['h-12'] }
			},
			open: {
				true: { listbox: 'scale-y-1 shadow-lg', option: 'flex' },
				false: { listbox: 'scale-y-0 opacity-0', option: 'none' }
			},
			readonly: {
				true: { option: 'cursor-not-allowed text-gray-500' },
				false: { option: 'cursor-pointer' }
			},
			disabled: {
				true: { trigger: 'cursor-not-allowed text-gray-500 bg-gray-100' },
				false: { trigger: 'cursor-pointer' }
			},
			animation: { true: { listbox: 'transition-all duration-200' }, false: { listbox: '' } },
			invalid: {
				true: { label: ['text-red-500'], base: ['border-red-500'], trigger: 'outline-none' },
				false: {}
			}
		}
	});
	const slots = selectVariant({ variant, size, open, readonly, disabled, animation, invalid });

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
	<label class={slots.label({ size, invalid })} for={id} aria-labelledby={id}>{label}</label>
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
	class={slots.base({ invalid })}
	bind:this={containerElement}
>
	<!-- Trigger -->
	<button
		aria-disabled={disabled}
		class={slots.trigger({ variant, size, invalid, disabled })}
		on:click={onToggle}
		use:close={onCloseByClickingOutside}
		{disabled}
		{...$$restProps}
	>
		<div class={slots.placeholderWrapper({})}>
			<span class={slots.placeholder({})}>{(selected && selected.label) || placeholder}</span>
		</div>
		<SelectChevronIcon bind:open size={20} {animation} />
	</button>

	<!-- Listbox -->
	<ul
		role="menu"
		class={slots.listbox({ open, animation })}
		use:listbox={{ onClose, onMoveDown, onMoveUp, onSelect }}
	>
		{#each options as option, i}
			<li
				role="option"
				class={slots.option({ open, readonly })}
				class:selected={selected && selected.value === option.value}
				class:focus={i === focus}
				aria-selected={selected && selected.value === option.value}
				use:select={() => onSelectByClicking(option)}
			>
				<div class={slots.optionTextWrapper({})}>
					<span class={slots.optionText({})}>{option.label}</span>
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
	<p class={slots.invalidText({})}>{invalidText}</p>
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
