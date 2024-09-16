<script lang="ts">
	import { Switch } from '$lib';
	import type { SwitchSlots } from '$lib/components/switch/Switch';
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import type { HTMLBaseAttributes } from 'svelte/elements';

	type $$BaseProps = HTMLBaseAttributes;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends $$BaseProps {
		id?: string;
		size?: ComponentSize;
		label?: string;
		variant?: ComponentVariant;
		readonly?: boolean;
		disabled?: boolean;
		invalid?: boolean;
		invalidText?: string;
		defaultToggled?: boolean;
		animation?: boolean;
		classes?: SlotsToClasses<SwitchSlots>;
	}

	export let label = $$props.label ?? 'This is an switch';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="field">
	{label}
	<Switch {...$$props} />
</label>

<style>
	.field {
		display: inline-flex;
		flex-direction: column;
		align-items: self-start;
		gap: 2px;
		font-size: 14px;
		width: 100%;
	}
</style>
