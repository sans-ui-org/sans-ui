<script lang="ts">
	import { tv } from '$lib/utils/tailwind-variants';
	import { createEventDispatcher } from 'svelte';
	import CloseButtonIcon from '$lib/modal/icons/CloseButtonIcon.svelte';

	type $$Props = {
		title?: string;
	};

	export let title: string = '';

	const dispatch = createEventDispatcher();

	// taiwlind-variants
	const modalHeaderWrapperVariant = tv({
		base: [
			'bg-white text-gray-500 border-gray-200 divide-gray-200 flex justify-between items-center'
		],
		variants: {}
	});
	const modalHeaderVariant = tv({
		base: ['text-lg font-semibold text-gray-900 px-5 py-4'],
		variants: {}
	});
	const modalHeaderCloseIconVariant = tv({
		base: ['cursor-pointer p-2 mr-4 rounded hover:bg-gray-300'],
		variants: {}
	});

	// handler
	const hide = () => dispatch('hide');
</script>

<div class={modalHeaderWrapperVariant({})}>
	<h3 class={modalHeaderVariant({})}>
		{title}
	</h3>
	<CloseButtonIcon class={modalHeaderCloseIconVariant({})} tabindex="1" on:click={hide} />
</div>
