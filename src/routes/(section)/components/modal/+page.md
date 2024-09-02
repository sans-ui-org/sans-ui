---
layout: componentLayout
title: Modal
description: Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles.
category: component
githubFolder: /modal/Modal.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'dismissible', title: 'Dismissible', level: 0 },
			{ slug: 'animation', title: 'Animation', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'modal-props', title: 'Modal Props', level: 1 },
			{ slug: 'modal-slots', title: 'Modal Slots', level: 1 },
		]
---

<script>
	import { Button, Modal } from '$lib';
	import SlotTable from "../../../mdsvex/components/SlotTable.svelte"
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"
	import ModalTemplate from "../../../../stories/modal/examples/ModalTemplate.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { modalProps, modalSlots } from "./modal-props.ts"

</script>

## Set Up

Import a Modal component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Modal } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

Modal visibility (open/close) is controlled by the `open` property. You can bind it to a variable that other element (usually button) will toggle.

<ModalTemplate size="md" title="Modal Title" />

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Modal } from '$lib';

	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal size="md" bind:open={popupModal}>
	<ModalContent>
		<ModalHeader title="Modal Title" />
		<ModalBody>
			<!-- Here you can write your own code! -->
		</ModalBody>
	</ModalContent>
</Modal>
```

</CodeBlockWrapper>

## Size

Modal has `size` prop to decide the size of it.

<ModalTemplate size="sm" title="Modal Title" triggerTitle="Modal sm" />
<ModalTemplate size="md" title="Modal Title" triggerTitle="Modal md"/>
<ModalTemplate size="lg" title="Modal Title" triggerTitle="Modal lg"/>
<ModalTemplate size="full" title="Modal Title" triggerTitle="Modal full"/>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Modal } from '$lib';

	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal size="full" bind:open={popupModal}>
	<ModalContent>
		<ModalHeader title="Modal Title" />
		<ModalBody>
			<!-- Here you can write your own code! -->
		</ModalBody>
	</ModalContent>
</Modal>
```

</CodeBlockWrapper>

## Dismissible

Set the `dismissible` property to `false` to prevent the modal from closing when clicking on the overlay.

<ModalTemplate size="md" title="Modal Title" dismissible={false} />

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Modal } from '$lib';

	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal size="md" dismissible={false} bind:open={popupModal}>
	<ModalContent>
		<ModalHeader title="Modal Title" />
		<ModalBody>
			<!-- Here you can write your own code! -->
		</ModalBody>
	</ModalContent>
</Modal>
```

</CodeBlockWrapper>

## Animation

Set the `animation` property to control the modal's animation.

<ModalTemplate size="md" title="Modal Title" animation={false} />

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Modal } from '$lib';

	let popupModal = false;
</script>

<Button on:click={() => (popupModal = !popupModal)}>Pop-up modal</Button>

<Modal size="md" animation={false} bind:open={popupModal}>
	<ModalContent>
		<ModalHeader title="Modal Title" />
		<ModalBody>
			<!-- Here you can write your own code! -->
		</ModalBody>
	</ModalContent>
</Modal>
```

</CodeBlockWrapper>

## API

Modal provides APIs(Properties) that is necessary for you to configure a Modal compponent.

### Modal Props

<PropertyTable properties={modalProps} />

### Modal Slots

<SlotTable slots={modalSlots} />
