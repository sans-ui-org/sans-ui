<script>
	import { Button, ripple } from '$lib';
	import Modal from '$lib/modal/Modal.svelte';

	let popupModal = false;
</script>

<Button on:click={() => (popupModal = true)}>Notification modal</Button>

<Modal size="md" bind:open={popupModal}>
	<div class="text-center">
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">This is Hello world!</h3>
		<Button color="red" class="me-2">Yes</Button>
		<Button color="alternative">No</Button>
	</div>
</Modal>
