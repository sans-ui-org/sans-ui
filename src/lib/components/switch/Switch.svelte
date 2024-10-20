<script lang="ts">
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '../../utils/utils';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { switchVariant, type SwitchSlots } from '../../components/switch/Switch';
	import { cn } from '../../utils/cn';
	import { createEventDispatcher } from 'svelte';

	type $$BaseProps = HTMLBaseAttributes;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends $$BaseProps {
		size?: ComponentSize;
		variant?: ComponentVariant;
		readonly?: boolean;
		disabled?: boolean;
		invalid?: boolean;
		invalidText?: string;
		defaultToggled?: boolean;
		animation?: boolean;
		classes?: SlotsToClasses<SwitchSlots>;
	}

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
	/**
	 * Property that defines the classes of the switch.
	 */
	export let classes: SlotsToClasses<SwitchSlots> = {};
	/**
	 * Property that defines the animation of the switch.
	 */
	export let animation: boolean = true;

	$: toggled = defaultToggled;

	// tailwind-variants
	const slots = switchVariant({ size, variant, disabled, readonly, toggled, invalid });

	// handlers
	const dispatcher = createEventDispatcher();
	const onToggle = (event: MouseEvent) => {
		if (!disabled && !readonly) {
			toggled = !toggled;
		}
		dispatcher('toggle', { toggled });
		dispatcher('click', { toggled, event });
	};
</script>

<!-- Switch -->
<label
	data-testid="sans-ui--switch-base"
	class={cn(
		slots.base({ size, variant, readonly, disabled, toggled, invalid, animation }),
		classes.base
	)}
>
	<input
		type="checkbox"
		role="switch"
		aria-checked={toggled}
		aria-readonly={readonly}
		aria-disabled={disabled}
		aria-invalid={invalid}
		class={cn(
			slots.switch({ size, variant, readonly, disabled, toggled, invalid, animation }),
			classes.switch
		)}
		on:click={onToggle}
	/>
	<span
		data-testid="sans-ui--switch-chip"
		class={cn(slots.chip({ size, variant, readonly, disabled, toggled, invalid, animation }))}
	/>
</label>
<!-- Invalid -->
{#if invalid && invalidText && invalidText !== ''}
	<p
		class={cn(
			slots.invalid({ size, variant, readonly, disabled, toggled, invalid, animation }),
			classes.invalid
		)}
	>
		{invalidText}
	</p>
{/if}

<style>
	input:focus-visible + span:before {
		outline: 2px solid #3b82f6;
	}
</style>
