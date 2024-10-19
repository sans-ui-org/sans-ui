---
layout: componentLayout
title: Switch
description: The Switch component provides a toggle switch, allowing users to switch between two states. It is useful for settings and options.
category: component
githubFolder: /switch/Switch.svelte
storybookFolder: switch
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'default-toggled', title: 'Default Toggled', level: 1 },
			{ slug: 'disabled', title: 'Disabled', level: 1 },
			{ slug: 'readonly', title: 'ReadOnly', level: 1 },
			{ slug: 'invalid', title: 'Invalid', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'switch-props', title: 'Switch Props', level: 1 },
			{ slug: 'switch-handlers', title: 'Switch Handlers', level: 1 },
			{ slug: 'switch-slots', title: 'Switch Slots', level: 1 },
		]
prevButton: { title: 'Spinner', slug: '/components/spinner' }
nextButton: { title: 'Textarea', slug: '/components/textarea' }
---

<script>
	import { Switch } from '$lib';
	import SwitchTemplate from "../../../../stories/switch/templates/SwitchTemplate.svelte"
	import { PropertyTable, SlotTable, HandlerTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { switchProps, switchHandlers, switchSlots } from "./switch-props.ts"
</script>

## Set Up

Import the Switch component into your Svelte file:

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>
```

</CodeBlockWrapper>

## Usage

Here’s a simple example of how to implement the Switch component:

<SwitchTemplate  />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>

<label class="field">
	This is an switch
	<Switch />
</label>
```

</CodeBlockWrapper>

## Variant

Switch has `variant` prop to decide the color theme of it.

<div class="flex flex-col gap-4">
	<SwitchTemplate variant="primary" defaultToggled={true} />
	<SwitchTemplate variant="secondary" defaultToggled={true} />
	<SwitchTemplate variant="success" defaultToggled={true} />
	<SwitchTemplate variant="warning" defaultToggled={true} />
	<SwitchTemplate variant="danger" defaultToggled={true} />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>

<label class="field">
	This is an switch
	<Switch variant="primary" defaultToggled={true} />
</label>
<label class="field">
	This is an switch
	<Switch variant="secondary" defaultToggled={true} />
</label>
<label class="field">
	This is an switch
	<Switch variant="success" defaultToggled={true} />
</label>
<label class="field">
	This is an switch
	<Switch variant="warning" defaultToggled={true} />
</label>
<label class="field">
	This is an switch
	<Switch variant="danger" defaultToggled={true} />
</label>
```

</CodeBlockWrapper>

## Size

Adjust the `size` of the switch using the size prop.

<div class="flex flex-col gap-4">
	<SwitchTemplate size="sm" label="This is sm" defaultToggled={true} />
	<SwitchTemplate size="md" label="This is md" defaultToggled={true} />
	<SwitchTemplate size="lg" label="This is lg" defaultToggled={true} />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>

<label class="field">
	This is sm
	<Switch size="sm" defaultToggled={true} />
</label>
<label class="field">
	This is md
	<Switch size="md" defaultToggled={true} />
</label>
<label class="field">
	This is lg
	<Switch size="lg" defaultToggled={true} />
</label>
```

</CodeBlockWrapper>

## Default Toggled

Use the `defaultToggled` prop to set the initial toggled state of the switch.

<SwitchTemplate defaultToggled={true} />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>

<label class="field">
	This is a switch
	<Switch defaultToggled={true} />
</label>
```

</CodeBlockWrapper>

## Disabled

The `disabled` prop makes the switch non-interactive.

<SwitchTemplate disabled={true} />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>

<label class="field">
	This is a switch
	<Switch disabled={true} />
</label>
```

</CodeBlockWrapper>

## Read Only

The `readonly` prop makes the switch read-only, meaning it cannot be toggled.

<SwitchTemplate readonly={true} />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>

<label class="field">
	This is a switch
	<Switch readonly={true} />
</label>
```

</CodeBlockWrapper>

## Invalid

Use the `invalid` prop to indicate that the switch's state is invalid. The `invalidText` prop allows you to provide an error message.

<SwitchTemplate invalid={true} invalidText="This is invalid text." />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>

<label class="field">
	This is a switch
	<Switch invalid={true} invalidText="This is invalid text." />
</label>
```

</CodeBlockWrapper>

## Animation

Control whether the switch has an animation with the `animation` prop.

<SwitchTemplate animation={false} />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui/core';
</script>

<label class="field">
	This is a switch
	<Switch animation={false} invalidText="This is invalid text." />
</label>
```

</CodeBlockWrapper>

## Accessibility

<ul class="flex flex-col gap-3 ml-10 mt-4">
	<AccessibilityListItem>Built with a native HTML input element.</AccessibilityListItem>
	<AccessibilityListItem>Full support for browser features like form autofill.</AccessibilityListItem>
	<AccessibilityListItem>Keyboard focus management and cross browser normalization.</AccessibilityListItem>
	<AccessibilityListItem>Keyboard event support for "Tab" and "Space" keys.</AccessibilityListItem>
	<AccessibilityListItem>Labeling support for assistive technology.</AccessibilityListItem>
</ul>

## API

Switch provides APIs(Properties) that is necessary for you to configure a Switch compponent.

### Switch Props

<PropertyTable properties={switchProps} />

### Switch Handlers

<HandlerTable handlers={switchHandlers} />

### Switch Slots

<SlotTable slots={switchSlots} />
