---
layout: componentLayout
title: Modal
description: Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles.
category: Components
---

<script>
	import { Button, Modal } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import ModalTemplate from "../../../../stories/modal/examples/ModalTemplate.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import modalProps from "./modal-props.ts"

</script>

## Set Up

Import a Modal component in the script tag.

```svelte
<script>
	import { Modal } from '$lib';
</script>
```

## Usage

Modal visibility (open/close) is controlled by the `open` property. You can bind it to a variable that other element (usually button) will toggle.

<ModalTemplate size="md" title="Modal Title" />

```svelte
<script lang="ts">
	import { Button, Modal } from '$lib';

	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal size="md" title="Modal Title" bind:open={popupModal}>
	<!-- Here you can write your own code! -->
</Modal>
```

## Size

Modal has `size` prop to decide the size of it.

<ModalTemplate size="lg" title="Modal Title" />

```svelte
<script lang="ts">
	import { Button, Modal } from '$lib';

	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal size="lg" title="ModalTitle" bind:open={popupModal}>
	<!-- Here you can write your own code! -->
</Modal>
```

## Dismissible

Set the `dismissible` property to `false` to prevent the modal from closing when clicking on the overlay.

<ModalTemplate size="md" title="Modal Title" dismissible={false} />

```svelte
<script lang="ts">
	import { Button, Modal } from '$lib';

	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal {size} {title} {dismissible} bind:open={popupModal}>
	<!-- Here you can write your own code! -->
</Modal>
```

## API

Modal provides APIs(Properties) that is necessary for you to configure a Modal compponent.

### Modal Props

<PropertyTable properties={modalProps} />
