<script lang="ts">
	import { Textarea } from '$lib';
	import type { TextareaSlots } from '$lib/components/textarea/Textarea';
	import type {
		ComponentRounded,
		ComponentSize,
		ComponentVariant,
		SlotsToClasses
	} from '$lib/utils/utils';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends HTMLTextareaAttributes {
		id?: string;
		value?: string | number;
		variant?: ComponentVariant;
		label?: string;
		size?: ComponentSize;
		rounded?: ComponentRounded;
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		// required?: boolean;
		animation?: boolean;
		maxCount?: number;
		invalid?: boolean;
		invalidText?: string;
		rows?: number;
		classes?: SlotsToClasses<TextareaSlots>;
	}

	export let label = $$props.label ?? 'This is an switch';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="field">
	{label}
	<Textarea {...$$props} />
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
