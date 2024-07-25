<script lang="ts" context="module">
	export type ModalSize = 'sm' | 'md' | 'lg' | 'full';
</script>

<script lang="ts">
	import '$lib/global.css';
	import { autoFocus, focusTrap } from '$lib/actions/focus';
	import ModalContent from './ModalContent.svelte';
	import ModalHeader from './ModalHeader.svelte';
	import ModalBody from './ModalBody.svelte';
	import { setContext } from 'svelte';
	import { modalVariant } from './Modal';

	interface $$Props {
		open?: boolean;
		title?: string;
		size?: ModalSize;
		dismissible?: boolean;
	}

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ModalSize = 'md';
	/**
	 * Property that defines the modal is open.
	 */
	export let open: boolean = false;
	/**
	 * Property that defines the title of the modal.
	 */
	export let title: string | undefined = undefined;
	/**
	 * Property that whether this modal is able to be closed by clicking outside of it.
	 */
	export let dismissible: boolean = true;

	// set context
	setContext('size', size);

	// tailwind-variants
	const slots = modalVariant({ open, size });

	// handlers
	const onOutsideClose = (e: MouseEvent) => {
		const target: Element = e.target as Element;
		if (target === e.currentTarget && dismissible) hide(e); // close on click outside
	};
	const hide = (e: Event) => {
		e.preventDefault();
		open = false;
	};
	const handleKeys = (e: KeyboardEvent) => {
		if (e.key === 'Escape') return hide(e);
	};
</script>

<!-- backdrop -->
<div role="presentation" class={slots.overlay({ open })} />
<!-- dialog -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	role="dialog"
	aria-modal="true"
	tabindex="-1"
	class={slots.base({ open, size })}
	on:keydown={handleKeys}
	on:mousedown={onOutsideClose}
	use:focusTrap
	use:autoFocus
	{...$$restProps}
>
	<ModalContent bind:open>
		{#if title}
			<ModalHeader {title} on:hide={hide} />
		{/if}
		<ModalBody on:keydown={handleKeys}>
			<slot />
		</ModalBody>
	</ModalContent>
</div>
