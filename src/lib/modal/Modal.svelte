<script lang="ts" context="module">
	export type ModalSize = 'sm' | 'md' | 'lg' | 'full';
</script>

<script lang="ts">
	import '$lib/global.css';
	import { autoFocus, focusTrap } from '$lib/actions/focus';
	import { setContext } from 'svelte';
	import { modalVariant } from './Modal';
	import { cn } from '$lib/utils/cn';
	import { fly } from 'svelte/transition';

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
	 * Property that whether this modal is able to be closed by clicking outside of it.
	 */
	export let dismissible: boolean = true;

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

	// set context
	setContext('hide', hide);
</script>

<!-- backdrop -->
<div role="presentation" class={slots.overlay({ open })} />
<!-- dialog -->
{#if open}
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		role="dialog"
		aria-modal="true"
		class={slots.base({ open, size })}
		on:keydown={handleKeys}
		on:mousedown={onOutsideClose}
		transition:fly={{ y: 200, duration: 600 }}
		use:focusTrap
		use:autoFocus
		{...$$restProps}
	>
		<div class={cn(slots.wrapper({ size, open }))} data-testid="modal-area">
			<slot />
		</div>
	</div>
{/if}
