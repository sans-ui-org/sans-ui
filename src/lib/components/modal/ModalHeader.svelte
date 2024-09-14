<script lang="ts">
	import { getContext } from 'svelte';
	import CloseButtonIcon from '$lib/components/modal/icons/CloseButtonIcon.svelte';
	import { modalHeaderVariant, type ModalHeaderSlots } from '$lib/components/modal/Modal';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';
	import type { SlotsToClasses } from '$lib/utils/utils';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLBaseAttributes & {
		title?: string;
		classes?: SlotsToClasses<ModalHeaderSlots>;
	};

	/**
	 * Property that defines the title of the modal
	 */
	export let title: string = '';
	/**
	 * Property that defines the classes of the modal
	 */
	export let classes: SlotsToClasses<ModalHeaderSlots> = {};

	// taiwlind-variants
	const slots = modalHeaderVariant({});

	// handler
	const hide = getContext('hide') as (e: Event) => void;
</script>

<div class={cn(slots.headerWrapper({}), classes.base)}>
	<h3 class={cn(slots.base({}), classes.base)}>
		{title}
	</h3>
	<CloseButtonIcon
		class={cn(slots.closeIcon({}), classes.closeIcon, $$restProps.class)}
		tabindex="0"
		on:click={hide}
	/>
</div>
