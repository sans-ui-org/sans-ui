<script lang="ts">
	import { Input } from '$lib';
	import type { InputSlots } from '$lib/components/input/Input';
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
		value?: string | number | undefined;
		variant?: ComponentVariant;
		size?: ComponentSize;
		label?: string;
		disabled?: boolean;
		readonly?: boolean;
		clearable?: boolean;
		animation?: boolean;
		rounded?: ComponentRounded;
		placeholder?: string;
		maxCount?: number;
		invalid?: boolean;
		invalidText?: string;
		classes?: SlotsToClasses<InputSlots>;
	}

	export let label = 'This is an input';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="field">
	{label}
	<Input {...$$props} />
</label>

<style>
	.field {
		display: flex;
		flex-direction: column;
		align-items: self-start;
		gap: 2px;
		font-size: 14px;
		width: 100%;
	}
</style>
