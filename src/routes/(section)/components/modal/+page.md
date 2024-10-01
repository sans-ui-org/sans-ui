---
layout: componentLayout
title: Modal
description: Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles.
category: component
githubFolder: /modal/Modal.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'dismissible', title: 'Dismissible', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'modal-props', title: 'Modal Props', level: 1 },
			{ slug: 'modal-handlers', title: 'Modal Handlers', level: 1 },
			{ slug: 'modal-slots', title: 'Modal Slots', level: 1 },
		]
prevButton: { title: 'Link', slug: '/components/link' }
nextButton: { title: 'Progress', slug: '/components/progress' }
---

<script>
	import { Button, Modal } from '$lib';
	import { PropertyTable, SlotTable, HandlerTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import ModalTemplate from "../../../../stories/modal/templates/ModalTemplate.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { modalProps, modalHandlers, modalSlots } from "./modal-props.ts"

</script>

## Set Up

To use the Modal component, first import it in your script tag:

<CodeBlockWrapper>

```svelte
<script>
	import { Modal } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

The visibility of the modal is controlled by the `open` property, which you can bind to a variable that a button (or other element) will toggle.

<ModalTemplate size="md" title="Modal Title" />

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Modal } from '@sans-ui';

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

The `size` prop allows you to control the size of the modal. Available options include `sm`, `md`, `lg`, and `full`.

<ModalTemplate size="sm" title="Modal Title" triggerTitle="Modal sm" />
<ModalTemplate size="md" title="Modal Title" triggerTitle="Modal md"/>
<ModalTemplate size="lg" title="Modal Title" triggerTitle="Modal lg"/>
<ModalTemplate size="full" title="Modal Title" triggerTitle="Modal full"/>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Modal } from '@sans-ui';

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

Set the `dismissible` property to `false` to prevent the modal from closing when clicking the overlay.

<ModalTemplate size="md" title="Modal Title" dismissible={false} />

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Modal } from '@sans-ui';

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

Control the modal's animation by setting the `animation` property to `false` to disable it.

<ModalTemplate size="md" title="Modal Title" animation={false} />

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Modal } from '@sans-ui';

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

## Accessibility

<ul class="flex flex-col gap-3 ml-10 mt-4">
	<AccessibilityListItem>Content outside the modal is hidden from assistive technologies while it is open.</AccessibilityListItem>
	<AccessibilityListItem>The modal optionally closes when interacting outside, or pressing the "Esc" key.</AccessibilityListItem>
	<AccessibilityListItem>Focus is moved into the modal on mount, and restored to the trigger element on unmount.</AccessibilityListItem>
	<AccessibilityListItem>While open, focus is contained within the modal, preventing the user from tabbing outside.</AccessibilityListItem>
	<AccessibilityListItem>Scrolling the page behind the modal is prevented while it is open, including in mobile browsers.</AccessibilityListItem>
</ul>

## API

Modal provides APIs(Properties) that is necessary for you to configure a Modal compponent.

### Modal Props

<PropertyTable properties={modalProps} />

### Modal Handlers

<HandlerTable handlers={modalHandlers} />

### Modal Slots

<SlotTable slots={modalSlots} />
