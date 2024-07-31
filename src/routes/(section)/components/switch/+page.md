---
layout: componentLayout
title: Switch
description: Switch express an unspecified wait time or display the length of a process.
category: component
githubFolder: /switch/Switch.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'default-toggled', title: 'Default Toggled', level: 0 },
			{ slug: 'disabled', title: 'Disabled', level: 0 },
			{ slug: 'readonly', title: 'ReadOnly', level: 0 },
			{ slug: 'invalid', title: 'Invalid', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'switch-props', title: 'Switch Props', level: 1 },
		]
---

<script>
	import { Switch } from '$lib';
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import switchProps from "./switch-props.ts"
</script>

## Set Up

Import a Switch component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

<Switch label="This is label" textForOn="On" textForOff="Off" />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch label="This is label" textForOn="On" textForOff="Off" />
```

</CodeBlockWrapper>

## Variant

Switch has `variant` prop to decide the color theme of it.

<div class="flex flex-col gap-8">
	<Switch variant="primary" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch variant="secondary" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch variant="success" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch variant="warning" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch variant="danger" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch
	variant="primary"
	label="This is label"
	textForOn="On"
	textForOff="Off"
	defaultToggled={true}
/>
<Switch
	variant="secondary"
	label="This is label"
	textForOn="On"
	textForOff="Off"
	defaultToggled={true}
/>
<Switch
	variant="success"
	label="This is label"
	textForOn="On"
	textForOff="Off"
	defaultToggled={true}
/>
<Switch
	variant="warning"
	label="This is label"
	textForOn="On"
	textForOff="Off"
	defaultToggled={true}
/>
<Switch
	variant="danger"
	label="This is label"
	textForOn="On"
	textForOff="Off"
	defaultToggled={true}
/>
```

</CodeBlockWrapper>

## Size

Switch has `size` prop to decide the sizes of it.

<div class="flex flex-col gap-8">
	<Switch size="sm" label="This is sm" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch size="md" label="This is md" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch size="lg" label="This is lg" textForOn="On" textForOff="Off" defaultToggled={true} />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch size="sm" label="This is sm" textForOn="On" textForOff="Off" defaultToggled={true} />
<Switch size="md" label="This is md" textForOn="On" textForOff="Off" defaultToggled={true} />
<Switch size="lg" label="This is lg" textForOn="On" textForOff="Off" defaultToggled={true} />
```

</CodeBlockWrapper>

## Default Toggled

Switch has `defaultToggled` prop that defines the default toggled value of the switch.

<Switch defaultToggled={true} label="This is label" textForOn="On" textForOff="Off"  />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch defaultToggled={true} label="This is label" textForOn="On" textForOff="Off" />
```

</CodeBlockWrapper>

## Disabled

Switch has `disabled` prop that defines readonly state of the switch.

<Switch disabled={true} label="This is label" textForOn="On" textForOff="Off"  />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch disabled={true} label="This is label" textForOn="On" textForOff="Off" />
```

</CodeBlockWrapper>

## Read Only

Switch has `readonly` prop that defines readonly state of the switch.

<Switch readonly={true} label="This is label" textForOn="On" textForOff="Off"  />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch readonly={true} label="This is label" textForOn="On" textForOff="Off" />
```

</CodeBlockWrapper>

## Invalid

Switch has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<Switch invalid={true} invalidText="This is invalid text." label="This is label" textForOn="On" textForOff="Off"  />

<CodeBlockWrapper>

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch
	invalid={true}
	invalidText="This is invalid text."
	label="This is label"
	textForOn="On"
	textForOff="Off"
/>
```

</CodeBlockWrapper>

## API

Switch provides APIs(Properties) that is necessary for you to configure a Switch compponent.

### Switch Props

<PropertyTable properties={switchProps} id="switch-table" />
