<script lang="ts">
	import '$lib/styles/global.css';
	import type { ComponentSize, ComponentVariant, underlineType } from '$lib/utils/utils';
    import { useLink } from './hooks/useLink';
	/**
	 * Property that define the variant of the link.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the size of the link.
	 */
	export let size: ComponentSize = 'md';

	/**
	 * Property that defines the decoration(underline) of the link.
	 */
    export let underline: underlineType = 'always';

    /**
	 * Property that defines if the link is disalbe.
	 */
     export let isDisabled: boolean = false;

	/**
	 * Property that defines the label of the link.
	 */
	export let url: string = '';

    $: className = $$props.class;
	$: isDisabled = $$props.isDisabled;
	$: linkProps = useLink({ className, isDisabled, variant, size, underline});
</script>

<a  href="{url}"
    class={linkProps.slots.base}>
    Here is the link to storybook.js.org
</a>

