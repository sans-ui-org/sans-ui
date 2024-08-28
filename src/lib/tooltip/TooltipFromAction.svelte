<script lang="ts">
	type $$Props = {
		title: string;
		x: number;
		y: number;
	};

	export let title: $$Props['title'];
	export let x: $$Props['x'];
	export let y: $$Props['y'];
</script>

<div
	style="
		top: {y + 5}px;
		left: {x + 5}px;"
>
	{title}
</div>

<style>
	div {
		border: 1px solid #ddd;
		box-shadow: 1px 1px 1px #ddd;
		background: white;
		border-radius: 4px;
		padding: 4px;
		position: absolute;
	}
</style>
