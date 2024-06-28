<script lang="ts">
	import { Button } from '$lib';
	import Modal from '$lib/modal/Modal.svelte';
	import type { ModalSize } from '$lib/modal/Modal';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ModalSize = 'lg';
	/**
	 * Property that defines the title of the modal.
	 */
	export let title: string = '';
	/**
	 * Property that whether this modal is able to be closed by clicking outside of it.
	 */
	export let dismissible: boolean = true;

	/**
	 * The prop that only for this story.
	 */
	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal {size} {title} {dismissible} bind:open={popupModal}>
	<div class="text-center">
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">This is Hello world!</h3>
		<Button color="red" class="me-2">Yes</Button>
		<Button color="alternative">No</Button>
	</div>
</Modal>
