<script lang="ts">
	import { Button, Modal } from '$lib';
	import type { ModalSize } from '$lib/modal/Modal.svelte';

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
	<div class="flex flex-col justify-between gap-8 p-8">
		<div>
			<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
				This is Hello world!
			</h3>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum
			</p>
		</div>
		<div class="flex flex-row justify-center gap-8">
			<Button variant="secondary">Cancel</Button>
			<Button>Submit</Button>
		</div>
	</div>
</Modal>
