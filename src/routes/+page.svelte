<script>
	import Button from '$lib/button/Button.svelte';

	const onClick = () => {
		console.log('Button clicked');
	};
	const onBlur = () => {
		console.log('Button onblur');
	};
</script>

<h1>Welcome to S-UI</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Button component</h2>
<Button
	class="hello"
	label="Hello"
	size="lg"
	variant="primary"
	on:click={onClick}
	on:blur={onBlur}
/>

<!-- TODO: You can list the component, after you migrate the component -->
