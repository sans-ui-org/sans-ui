<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseButtonIcon from '$lib/modal/icons/CloseButtonIcon.svelte';
	import { modalHeaderVariant } from '$lib/modal/Modal';

	type $$Props = {
		title?: string;
	};

	export let title: string = '';

	const dispatch = createEventDispatcher();

	// taiwlind-variants
	const slots = modalHeaderVariant({});

	// handler
	const hide = () => dispatch('hide');
</script>

<div class={slots.headerWrapper({})}>
	<h3 class={slots.base({})}>
		{title}
	</h3>
	<CloseButtonIcon class={slots.closeIcon({})} tabindex="1" on:click={hide} />
</div>
