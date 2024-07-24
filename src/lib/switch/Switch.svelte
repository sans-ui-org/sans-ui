<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { tv } from '$lib/utils/tailwind-variants';
	import { twMerge } from '$lib/utils/tailwind-merge';

	type $$BaseProps = HTMLBaseAttributes;

	interface $$Props extends $$BaseProps {
		id?: string;
		textForOn?: string;
		textForOff?: string;
		label?: string;
		size?: ComponentSize;
		variant?: ComponentVariant;
		readonly?: boolean;
		disabled?: boolean;
		invalid?: boolean;
		invalidText?: string;
		defaultToggled?: boolean;
	}

	/**
	 * Property that defines the id of the switch.
	 */
	export let id: string = '';
	/**
	 * Property that defines the label text for the switch is ON.
	 */
	export let textForOn: string = '';
	/**
	 * Property that defines the label text when the switch is OFF.
	 */
	export let textForOff: string = '';
	/**
	 * Provide the text that will be read by a screen reader when visiting this control.
	 */
	export let label: string | undefined = undefined;
	/**
	 * Specify the size of the Toggle.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Switch type.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines readonly state of the switch.
	 */
	export let readonly: boolean = false;
	/**
	 * Property that defines if the switch is disabled.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines if the switch is invalid.
	 */
	export let invalid: boolean = false;
	/**
	 * Property that defines the text message shows under this component if the switch is invalid.
	 */
	export let invalidText: string = '';
	/**
	 * Property that defines the default toggled value of the switch.
	 */
	export let defaultToggled: boolean = false;

	$: toggled = defaultToggled;
	$: toggleLabel = toggled ? textForOn : textForOff;

	// tailwind-variants
	const baseVariant = tv({
		base: ['flex flex-col gap-2 font-normal'],
		variants: {}
	});
	const labelVariant = tv({
		base: ['font-normal'],
		variants: {
			size: {
				sm: ['text-xs'],
				md: ['text-sm'],
				lg: ['text-base']
			},
			invalid: {
				true: ['text-red-500']
			}
		}
	});
	const switchWrapperVariant = tv({
		base: ['flex flex-row gap-2 items-center'],
		variants: {}
	});
	const switchVariant = tv({
		base: ['rounded-full flex items-center p-1.5 transition-colors duration-300 ease-in-out'],
		variants: {
			size: {
				sm: ['w-[40px] h-[20px]'],
				md: ['w-[60px] h-[30px]'],
				lg: ['w-[80px] h-[40px]']
			},
			variant: {
				primary: ['bg-blue-500'],
				secondary: ['bg-neutral-500'],
				success: ['bg-green-500'],
				warning: ['bg-yellow-500'],
				danger: ['bg-red-500']
			},
			disabled: {
				true: 'cursor-not-allowed bg-gray-300',
				false: 'cursor-pointer'
			},
			readonly: {
				true: 'cursor-default',
				false: ''
			},
			toggled: {
				true: '',
				false: 'bg-gray-400'
			}
		}
	});
	const switchChipVariant = tv({
		base: ['rounded-full transition-all duration-300 ease'],
		variants: {
			size: {
				sm: 'w-[10px] h-[10px]',
				md: 'w-[20px] h-[20px]',
				lg: 'w-[30px] h-[30px]'
			},
			disabled: {
				true: 'bg-gray-500',
				false: 'bg-white'
			},
			toggled: {
				true: '',
				false: 'translate-x-0'
			}
		},
		compoundVariants: [
			{
				toggled: true,
				size: 'sm',
				className: ['translate-x-[20px]']
			},
			{
				toggled: true,
				size: 'md',
				className: ['translate-x-[30px]']
			},
			{
				toggled: true,
				size: 'lg',
				className: ['translate-x-[40px]']
			}
		]
	});
	const switchLabelVariant = tv({
		base: ['font-normal'],
		variants: {}
	});
	const invalidTextVariant = tv({
		base: ['text-sm text-red-500 mt-1'],
		variants: {}
	});

	// handlers
	const onToggle = () => {
		if (!disabled && !readonly) {
			toggled = !toggled;
		}
	};
	const onKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			onToggle();
		}
	};
</script>

<div class={baseVariant({})}>
	{#if label}
		<label class={labelVariant({ size, invalid })} for={id}>{label}</label>
	{/if}
	<div class={switchWrapperVariant({})}>
		<div
			{id}
			aria-checked={toggled}
			aria-readonly={readonly}
			aria-disabled={disabled}
			{...$$restProps}
			role="switch"
			tabindex="0"
			class={switchVariant({ size, variant, disabled, readonly, toggled })}
			on:click={onToggle}
			on:keypress={onKeyPress}
		>
			<div class={switchChipVariant({ size, disabled, toggled })} />
		</div>
		<span class={switchLabelVariant({})}>{toggleLabel}</span>
	</div>
	<!-- Invalid -->
	{#if invalid && invalidText && invalidText !== ''}
		<p class={invalidTextVariant({})}>{invalidText}</p>
	{/if}
</div>
