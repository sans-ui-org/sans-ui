<script lang="ts">
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props extends $$BaseProps {
		variant?: ComponentVariant;
		size?: ComponentSize;
		value?: string;
		checked?: boolean;
		disabled?: boolean;
		defaultChecked?: boolean;
		indeterminate?: boolean;
		animation?: boolean;
	}
</script>

<div class="canvas">
	<label class="field" for="my-checkbox">
		<Checkbox id="my-checkbox" {...$$props} />
		This is a checkbox
	</label>
</div>

<style>
	.canvas {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.field {
		display: flex;
		flex-direction: row;
		gap: 8px;
		align-items: center;
	}
</style>
