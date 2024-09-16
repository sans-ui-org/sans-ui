---
layout: componentLayout
title: Switch
description: Switch express an unspecified wait time or display the length of a process.
category: component
githubFolder: /switch/Switch.svelte
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
---

<script>
	import { Switch } from '$lib';
	import SwitchTemplate from "../../../../stories/switch/templates/SwitchTemplate.svelte"
	import { PropertyTable, SlotTable, HandlerTable, CodeBlockWrapper, AccessibilityIcon }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { switchProps, switchHandlers, switchSlots } from "./switch-props.ts"
</script>

## Set Up

Import a Switch component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

<SwitchTemplate  />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui';
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
	import { Switch } from '@sans-ui';
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

Switch has `size` prop to decide the sizes of it.

<div class="flex flex-col gap-4">
	<SwitchTemplate size="sm" label="This is sm" defaultToggled={true} />
	<SwitchTemplate size="md" label="This is md" defaultToggled={true} />
	<SwitchTemplate size="lg" label="This is lg" defaultToggled={true} />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui';
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

Switch has `defaultToggled` prop that defines the default toggled value of the switch.

<SwitchTemplate defaultToggled={true} />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui';
</script>

<label class="field">
	This is a switch
	<Switch defaultToggled={true} />
</label>
```

</CodeBlockWrapper>

## Disabled

Switch has `disabled` prop that defines readonly state of the switch.

<SwitchTemplate disabled={true} />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui';
</script>

<label class="field">
	This is a switch
	<Switch disabled={true} />
</label>
```

</CodeBlockWrapper>

## Read Only

Switch has `readonly` prop that defines readonly state of the switch.

<SwitchTemplate readonly={true} />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui';
</script>

<label class="field">
	This is a switch
	<Switch readonly={true} />
</label>
```

</CodeBlockWrapper>

## Invalid

Switch has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<SwitchTemplate invalid={true} invalidText="This is invalid text." />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui';
</script>

<label class="field">
	This is a switch
	<Switch invalid={true} invalidText="This is invalid text." />
</label>
```

</CodeBlockWrapper>

## Animation

Switch has `animation` prop that defines if the input has animation.

<SwitchTemplate animation={false} />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '@sans-ui';
</script>

<label class="field">
	This is a switch
	<Switch animation={false} invalidText="This is invalid text." />
</label>
```

</CodeBlockWrapper>

## Accessibility

- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Built with a native HTML input element.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Full support for browser features like form autofill.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Keyboard focus management and cross browser normalization.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Keyboard event support for `Tab` and `Space` keys.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Labeling support for assistive technology.</div>

## API

Switch provides APIs(Properties) that is necessary for you to configure a Switch compponent.

### Switch Props

<PropertyTable properties={switchProps} />

### Switch Handlers

<HandlerTable handlers={switchHandlers} />

### Switch Slots

<SlotTable slots={switchSlots} />
