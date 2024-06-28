<script lang="ts">
	import '$lib/styles/global.css';
	import { getModalSlots, type ModalSize } from '$lib/modal/Modal';
	import { autoFocus, focusTrap } from '$lib/modal/actions/focus';
	import CloseButtonIcon from '$lib/modal/icons/CloseButtonIcon.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		open?: boolean;
		title?: string;
		size: ModalSize;
		dismissible?: boolean;
	}

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ModalSize;
	/**
	 * Property that defines the modal is open.
	 */
	export let open: boolean = false;
	/**
	 * Property that defines the title of the modal.
	 */
	export let title: string = '';
	/**
	 * Property that whether this modal is able to be closed by clicking outside of it.
	 */
	export let dismissible: boolean = true;

	let className = $$props.class;

	// slots
	$: slots = getModalSlots({ className, open, size });

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

{#if open}
	<!-- backdrop -->
	<div role="presentation" class={slots.overlay} />
	<!-- dialog -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		{...$$restProps}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		class={slots.dialog}
		on:keydown={handleKeys}
		on:mousedown={onOutsideClose}
		use:focusTrap
		use:autoFocus
	>
		<!-- modal content -->
		<div class={slots.modalContentWrapper}>
			<div class={slots.modalContent}>
				<!-- Modal header -->
				{#if title}
					<div class={slots.modalHeaderWrapper}>
						<h3 class={slots.modalHeader}>
							{title}
						</h3>
						<CloseButtonIcon class={slots.modalHeaderCloseIcon} tabindex="1" on:click={hide} />
					</div>
				{/if}
				<!-- Modal body -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<div
					role="document"
					class={slots.modalBody}
					on:keydown|stopPropagation={handleKeys}
					on:wheel|stopPropagation|passive
				>
					{#if dismissible && !title}
						<CloseButtonIcon name="Close modal" class={slots.modalBodyCloseIcon} on:click={hide} />
					{/if}
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}
