<script lang="ts" context="module">
	export type ModalSize = 'sm' | 'md' | 'lg' | 'full';
</script>

<script lang="ts">
	import { autoFocus, focusTrap } from '../../actions/focus';
	import { createEventDispatcher, setContext } from 'svelte';
	import { modalVariant } from './Modal';
	import { cn } from '../../utils/cn';
	import { fly } from 'svelte/transition';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props {
		open?: boolean;
		title?: string;
		size?: ModalSize;
		dismissible?: boolean;
		animation?: boolean;
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
	/**
	 * Property that whether this modal has animation.
	 */
	export let animation: boolean = true;

	// tailwind-variants
	const slots = modalVariant({ open, size });

	const dispatcher = createEventDispatcher();

	// handlers
	const hide = (e: Event) => {
		e.preventDefault();
		open = false;
	};

	const onOutsideClose = (e: MouseEvent) => {
		const target: Element = e.target as Element;
		if (target === e.currentTarget && dismissible) {
			hide(e); // close on click outside
			dispatcher('mousedown', e);
		}
	};
	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			hide(e);
			dispatcher('keydown', e);
		}
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
		on:keydown={onKeyDown}
		on:mousedown={onOutsideClose}
		transition:fly={{ y: animation ? 200 : 0, duration: animation ? 600 : 0 }}
		use:focusTrap
		use:autoFocus
		{...$$restProps}
	>
		<div class={cn(slots.wrapper({ size, open }))} data-testid="modal-area">
			<slot />
		</div>
	</div>
{/if}
