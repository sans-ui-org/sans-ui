<script lang="ts">
	import { modalBodyVariant } from '../../components/modal/Modal';
	import { cn } from '../../utils/cn';
	import type { HTMLBaseAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLBaseAttributes;

	// taiwlind-variants
	const slots = modalBodyVariant({});
</script>

<div role="document" class={cn(slots.base({}), $$restProps.class)}>
	<slot />
</div>
