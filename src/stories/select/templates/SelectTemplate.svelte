<script lang="ts">
	import { Select } from '$lib';
	import type { SelectSlots } from '$lib/components/select/Select';
	import type { Option } from '$lib/components/select/Select.svelte';
	import type {
		ComponentRounded,
		ComponentSize,
		ComponentVariant,
		SlotsToClasses
	} from '$lib/utils/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends $$BaseProps {
		id?: string;
		size?: ComponentSize;
		variant?: ComponentVariant;
		rounded?: ComponentRounded;
		label?: string;
		defaultSelected?: Option;
		options: Option[];
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		animation?: boolean;
		invalid?: boolean;
		invalidText?: string;
		classes?: SlotsToClasses<SelectSlots>;
	}

	export let label = $$props.label ?? 'This is an select';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="field">
	{label}
	<Select {...$$restProps} options={$$props.options} />
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
