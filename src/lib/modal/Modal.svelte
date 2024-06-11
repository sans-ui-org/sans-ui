<script lang="ts">
	import '$lib/styles/global.css';
	import { getModalSlots, type ModalSize } from '$lib/modal/Modal';
	import { autoFocus, focusTrap } from '$lib/modal/actions';
	import CloseButtonIcon from '$lib/modal/icons/CloseButtonIcon.svelte';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ModalSize;
	/**
	 * Property that defines the modal is open.
	 */
	export let open: boolean;
	/**
	 * Property that defines the title of the modal.
	 */
	export let title: string;
	/**
	 * Property that whether this modal is able to be closed by clicking outside of it.
	 */
	export let dismissable: boolean = false;

	let className = $$props.class;
	$: modalSlots = getModalSlots({ className, open, size });

	const onOutsideClose = (e: MouseEvent) => {
		const target: Element = e.target as Element;
		if (target === e.currentTarget) hide(e); // close on click outside
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
	<div
		role="presentation"
		class="fixed inset-0 z-40 bg-gray-900 bg-slate-950/20 transition-all duration-300 ease-out"
	/>
	<!-- dialog -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		class="fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex justify-center items-cente transition-all duration-300 ease-out"
		on:keydown={handleKeys}
		on:mousedown={onOutsideClose}
		use:focusTrap
		use:autoFocus
	>
		<div class="flex relative max-w-2xl w-full max-h-full">
			<div
				class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 shadow-md relative flex flex-col mx-auto w-full divide-y"
			>
				<!-- Modal header -->
				{#if title}
					<div
						class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 flex justify-between items-center rounded"
					>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white px-5 py-2">
							{title}
						</h3>
						<CloseButtonIcon
							class="cursor-pointer p-2 mr-1 rounded hover:bg-gray-300"
							tabindex="1"
							on:click={hide}
						/>
					</div>
				{/if}
				<!-- Modal body -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<div
					role="document"
					class="p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain"
					on:keydown|stopPropagation={handleKeys}
					on:wheel|stopPropagation|passive
				>
					{#if dismissable && !title}
						<CloseButtonIcon name="Close modal" class="absolute top-3 end-2.5" on:click={hide} />
					{/if}
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}
