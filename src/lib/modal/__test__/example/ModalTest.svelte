<script lang="ts">
	import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '$lib';
	import type { ComponentSize } from '$lib/utils/utils';

	export let title: string = 'This is Modal';
	export let size: ComponentSize = 'md';

	/**
	 * The prop that only for this story.
	 */
	let popupModal = false;
</script>

<Button
	rippled={false}
	on:click={() => (popupModal = !popupModal)}
	data-testid="popup-triggered-button">Pop-up modal</Button
>

<Modal {size} dismissible={true} bind:open={popupModal}>
	<ModalContent>
		<ModalHeader title="Title" />
		<ModalBody>
			<div class="text-center">
				<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
					{title}
				</h3>
				<div class="flex flex-row justify-center gap">
					<Button color="red" class="me-2">Yes</Button>
					<Button color="alternative">No</Button>
				</div>
			</div>
		</ModalBody>
	</ModalContent>
</Modal>
