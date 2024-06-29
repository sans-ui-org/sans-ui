<script lang="ts">
	import { Button } from '$lib';
	import Modal from '$lib/modal/Modal.svelte';
	import type { ModalSize } from '$lib/modal/Modal';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ModalSize = 'sm';
	/**
	 * Property that whether this modal is able to be closed by clicking outside of it.
	 */
	export let dismissible: boolean = true;

	/**
	 * The prop that only for this story.
	 */
	let popupModal = false;

	const onClick = () => {
		popupModal = !popupModal;
	};
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up notification</Button>

<Modal {size} {dismissible} bind:open={popupModal}>
	<div class="text-center flex flex-col justify-between">
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">This is Notification!</h3>
		<div class="flex flex-row justify-center gap-6">
			<Button variant="secondary" class="me-2" on:click={onClick}>Cancel</Button>
			<Button variant="primary" on:click={onClick}>Close</Button>
		</div>
	</div>
</Modal>
