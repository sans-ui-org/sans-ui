<script lang="ts">
	import { tv } from '$lib/utils/tv';
	import { createEventDispatcher } from 'svelte';
	import CloseButtonIcon from '$lib/modal/icons/CloseButtonIcon.svelte';

	type $$Props = {
		title?: string;
	};

	export let title: string = '';

	const dispatch = createEventDispatcher();

	// taiwlind-variants
	const modalHeaderVariant = tv({
		slots: {
			headerWrapper: [
				'bg-white text-gray-500 border-gray-200 divide-gray-200 flex justify-between items-center'
			],
			base: ['text-lg font-semibold text-gray-900 px-5 py-4'],
			closeIcon: ['cursor-pointer p-2 mr-4 rounded hover:bg-gray-300']
		},
		variants: {}
	});
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
