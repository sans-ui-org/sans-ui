<script lang="ts">
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$BaseProps = Omit<HTMLInputAttributes, 'size'>;

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

	console.log($$props.checked);
</script>

<div class="canvas">
	<div class="field">
		<Checkbox id="my-checkbox" {...$$props} />
		<label for="my-checkbox">Checkbox</label>
	</div>
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
