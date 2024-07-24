---
layout: componentLayout
title: Switch
description: Switch express an unspecified wait time or display the length of a process.
category: Components
---

<script>
	import { Switch } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import switchProps from "./switch-props.ts"
</script>

## Set Up

Import a Switch component in the script tag.

```svelte
<script>
	import { Switch } from '$lib';
</script>
```

## Usage

<Switch label="This is label" textForOn="On" textForOff="Off" />

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch label="This is label" textForOn="On" textForOff="Off" />
```

## Variant

Switch has `variant` prop to decide the color theme of it.

<div class="flex flex-col gap-8">
	<Switch variant="primary" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch variant="secondary" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch variant="success" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch variant="warning" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
	<Switch variant="danger" label="This is label" textForOn="On" textForOff="Off" defaultToggled={true} />
</div>

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

## Default Toggled

Switch has `defaultToggled` prop that defines the default toggled value of the switch.

<Switch defaultToggled={true} label="This is label" textForOn="On" textForOff="Off"  />

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch defaultToggled={true} label="This is label" textForOn="On" textForOff="Off" />
```

## Disabled

Switch has `disabled` prop that defines readonly state of the switch.

<Switch disabled={true} label="This is label" textForOn="On" textForOff="Off"  />

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch disabled={true} label="This is label" textForOn="On" textForOff="Off" />
```

## Read Only

Switch has `readonly` prop that defines readonly state of the switch.

<Switch readonly={true} label="This is label" textForOn="On" textForOff="Off"  />

```svelte
<script>
	import { Switch } from '$lib';
</script>

<Switch readonly={true} label="This is label" textForOn="On" textForOff="Off" />
```

## Invalid

Switch has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<Switch invalid={true} invalidText="This is invalid text." label="This is label" textForOn="On" textForOff="Off"  />

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

## API

Switch provides APIs(Properties) that is necessary for you to configure a Switch compponent.

### Switch Props

<PropertyTable properties={switchProps} id="switch-table" />
