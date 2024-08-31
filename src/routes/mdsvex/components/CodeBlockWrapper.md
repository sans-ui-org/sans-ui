<script lang="ts">
	import { Tooltip } from "$lib";
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';
	import SvelteIcon from "../../icons/SvelteIcon.svelte";
	import BashIcon from "../../icons/BashIcon.svelte";

	type $$Props = HTMLBaseAttributes & {
		title?: string
		icon?: "svelte" | "bash"
	};

	export let title: $$Props["title"] = "Example.svelte"
	export let icon: $$Props["icon"] = "svelte"

	const icons = { 
		svelte: SvelteIcon,
		bash: BashIcon 
	};

	let codeContainer: HTMLElement;

	const onCopyCodeBlock = async (e: MouseEvent) => {
		const tooltip = document.querySelector('[data-tooltip="true"]') as HTMlDivElement;
		const code = codeContainer.childNodes[2].children[0];

		// Copy and paste
		const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = code.innerText.replace(REG_HEX, function (_match, group1) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

		await window.navigator.clipboard.writeText(decodedText);

		// Change text to "Copied!" temporarily.absolute
    if (tooltip) {
			const tooltipContent = tooltip.childNodes[0];
      tooltipContent.textContent = 'Copied !';
      setTimeout(() => (tooltipContent.textContent = 'Copy this code'), 3000);
    }
	}
</script>

<div bind:this={codeContainer} {...$$restProps} class={cn("py-4 pl-6 pr-4 mt-4 rounded-lg border border-neutral-300 dark:border-neutral-500 bg-neutral-800", $$restProps.class)}>
	<div class="flex justify-between items-center pb-3">
		<div class="inline-flex gap-2 items-center text-red-500">
			<svelte:component this={icons[icon]} class="w-[16px] h-[16px] text-red-500"/>
			<span class="text-neutral-300 text-sm">{title}</span>
		</div>
		<Tooltip variant="secondary" size="sm" title="Copy this code">
			<button
					class="p-1.5 text-sm text-white border-2 border-gray-300 rounded-lg bg-gray-700 hover:bg-gray-500 transition duration-200"
					on:click={onCopyCodeBlock}
				>
				<svg class="w-[12px] h-[12px] cursor-pointer" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_1222_36543)">
						<path d="M10 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V10C0.5 10.5523 0.947715 11 1.5 11H10C10.5523 11 11 10.5523 11 10V1.5C11 0.947715 10.5523 0.5 10 0.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M13.5 3.5V12.5C13.5 12.7652 13.3946 13.0196 13.2071 13.2071C13.0196 13.3946 12.7652 13.5 12.5 13.5H3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
					</g>
				</svg>
			</button>
		</Tooltip>
	</div>

  <slot />

</div>
