<script lang="ts">
	import Button, { type ButtonKind } from '$lib/components/button/Button.svelte';
	import type { ComponentRounded, ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = (HTMLAnchorAttributes | HTMLButtonAttributes) & {
		variant?: ComponentVariant;
		size?: ComponentSize;
		disabled?: boolean;
		rippled?: boolean;
		kind?: ButtonKind;
		rounded?: ComponentRounded;
		iconOnly?: boolean;
		href?: string;
		animation?: boolean;
	};
</script>

<div class="canvas">
	{#if $$props.iconOnly}
		<Button {...$$props}>
			<svg
				class="w-[14px] h-[14px]"
				viewBox="0 0 14 14"
				fill="white"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_1222_36554)">
					<path
						d="M7 0.5V13.5"
						stroke="white"
						stroke-width="2px"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M0.5 6.95996H13.5"
						stroke="white"
						stroke-width="2px"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
			</svg>
		</Button>
	{:else}
		<Button {...$$props}>Button</Button>
	{/if}
</div>

<style>
	.canvas {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
