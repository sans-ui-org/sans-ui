<script lang="ts">
	import '$lib/styles/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
    import { useLink } from './hooks/useLink';
	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ComponentSize = 'md';

	/**
	 * Property that defines the label of the button.
	 */
	export let url: string = '';

    $: className = $$props.class;
	$: disabled = $$props.disabled;
	$: linkProps = useLink({ className, disabled, variant, size });
</script>

<a  href="{url}"
    class={linkProps.slots.base}>
    I am a link
</a>

