<script lang="ts">
	import { type ComponentVariant } from '$lib/utils/utils';
	import { useIndeterminateIcon, type CheckboxIconSize } from './useIndeterminateIcon';

	export let disabled: boolean = false;
	export let size: CheckboxIconSize = 'md';
	export let variant: ComponentVariant = 'primary';

	$: indeterminateIconProps = useIndeterminateIcon({ disabled, size, variant });
</script>

<svg class={indeterminateIconProps.slots.base} viewBox="0 0 100 100" fill="white">
	<path
		class={'box'}
		stroke-width={7}
		d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
	/>
	<line stroke="white" stroke-width={7} x1="70" x2="30" y1="50" y2="50" />
</svg>

<style></style>
