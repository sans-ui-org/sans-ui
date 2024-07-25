<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { tv } from '$lib/utils/tv';
	import { cn } from '$lib/utils/cn';
	import { base } from '$app/paths';

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
	const switchVariant = tv({
		slots: {
			label: ['font-normal'],
			base: ['flex flex-col gap-2 font-normal'],
			wrapper: ['flex flex-row gap-2 items-center'],
			switch: ['rounded-full flex items-center p-1.5 transition-colors duration-300 ease-in-out'],
			switchChip: ['rounded-full transition-all duration-300 ease'],
			switchText: ['font-normal'],
			invalidText: ['text-sm text-red-500 mt-1']
		},
		variants: {
			variant: {
				primary: { switch: ['bg-blue-500'] },
				secondary: { switch: ['bg-neutral-500'] },
				success: { switch: ['bg-green-500'] },
				warning: { switch: ['bg-yellow-500'] },
				danger: { switch: ['bg-red-500'] }
			},
			size: {
				sm: {
					label: ['text-xs'],
					switch: ['w-[40px] h-[20px]'],
					switchChip: ['w-[10px] h-[10px]']
				},
				md: {
					label: ['text-sm'],
					switch: ['w-[60px] h-[30px]'],
					switchChip: ['w-[20px] h-[20px]']
				},
				lg: {
					label: ['text-base'],
					switch: ['w-[80px] h-[40px]'],
					switchChip: ['w-[30px] h-[30px]']
				}
			},
			disabled: {
				true: { switch: 'cursor-not-allowed bg-gray-300', switchChip: 'bg-gray-500' },
				false: { switch: 'cursor-pointer', switchChip: 'bg-white' }
			},
			readonly: {
				true: { switch: 'cursor-default' },
				false: ''
			},
			toggled: {
				true: '',
				false: { switch: 'bg-gray-400', switchChip: 'translate-x-0' }
			},
			invalid: {
				true: { label: ['text-red-500'] }
			}
		},
		compoundVariants: [
			{
				toggled: true,
				size: 'sm',
				class: { switchChip: ['translate-x-[20px]'] }
			},
			{
				toggled: true,
				size: 'md',
				class: { switchChip: ['translate-x-[30px]'] }
			},
			{
				toggled: true,
				size: 'lg',
				className: { switchChip: ['translate-x-[40px]'] }
			}
		]
	});
	const slots = switchVariant({ size, variant, disabled, readonly, toggled, invalid });

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

<div class={slots.base({})}>
	<!-- Label -->
	{#if label}
		<label class={slots.label({ size, invalid })} for={id}>{label}</label>
	{/if}
	<!-- Switch -->
	<div class={slots.wrapper({})}>
		<div
			{id}
			aria-checked={toggled}
			aria-readonly={readonly}
			aria-disabled={disabled}
			{...$$restProps}
			role="switch"
			tabindex="0"
			class={slots.switch({ size, variant, disabled, readonly, toggled })}
			on:click={onToggle}
			on:keypress={onKeyPress}
		>
			<div class={slots.switchChip({ size, disabled, toggled })} />
		</div>
		<span class={slots.switchText({})}>{toggleLabel}</span>
	</div>
	<!-- Invalid -->
	{#if invalid && invalidText && invalidText !== ''}
		<p class={slots.invalidText({})}>{invalidText}</p>
	{/if}
</div>
