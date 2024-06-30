<script lang="ts">
	import { Button } from '$lib';
	import Modal from '$lib/modal/Modal.svelte';
	/**
	 * The prop that only for this story.
	 */
	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal dismissible={true} bind:open={popupModal}>
	<div class="text-center">
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">This is Hello world!</h3>
		<div class="flex flex-row justify-center gap">
			<Button color="red" class="me-2">Yes</Button>
			<Button color="alternative">No</Button>
		</div>
	</div>
</Modal>
