---
layout: componentLayout
title: Select
description: The Select component presents a collapsible list of options, enabling users to choose one or more items from a dropdown menu.
category: component
githubFolder: /select/Select.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'rounded', title: 'Rounded', level: 1 },
			{ slug: 'default-selected', title: 'Default Selected', level: 1 },
			{ slug: 'disabled', title: 'Disabled', level: 1 },
			{ slug: 'readonly', title: 'ReadOnly', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'invalid', title: 'Invalid', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'select-props', title: 'Select Props', level: 1 },
			{ slug: 'select-handlers', title: 'Select Handlers', level: 1 },
			{ slug: 'select-slots', title: 'Select Slots', level: 1 },
		]
---

<script>
	import { Button, Select } from '$lib';
	import SelectTemplate from "../../../../stories/select/templates/SelectTemplate.svelte"
	import { PropertyTable, SlotTable, HandlerTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { selectProps, selectHandlers, selectSlots } from "./select-props.ts"

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' },
	]

	let defaultSelected = options[0]
</script>

## Set Up

To use the Select component, import it into your Svelte file:

<CodeBlockWrapper>

```svelte
<script>
	import { Select } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

The Select component allows users to select from multiple options presented in a dropdown list.

<div class="w-[350px]">
	<SelectTemplate {options} label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Select } from '@sans-ui';

	let popupSelect = false;
	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Variant

The Select component supports various color themes through the `variant` prop.

<div class="flex flex-col gap-4">
	<div class="w-[350px]">
		<SelectTemplate variant="primary" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<SelectTemplate variant="secondary" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<SelectTemplate variant="success" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<SelectTemplate variant="warning" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<SelectTemplate variant="danger" {options} label="This is a label" placeholder="Select an option" />
	</div>
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select variant="primary" {options} placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select variant="secondary" {options} placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select variant="success" {options} placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select variant="warning" {options} placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select variant="danger" {options} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Size

The `size` prop determines the size of the Select component.

<div class="flex flex-col gap-4">
	<div class="w-[250px]">
		<SelectTemplate {options} size="sm" label='This is sm' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} size="md" label='This is md' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} size="lg" label='This is lg' placeholder='Select an option' />
	</div>
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} size="sm" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="md" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="lg" placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Rounded

Adjust the border-radius of the Select component using the `rounded` prop.

<div class="flex flex-col gap-4">
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="none" label='This is rounded none' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="sm" label='This is rounded sm' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="md" label='This is rounded md' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="lg" label='This is rounded lg' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="full" label='This is rounded full' placeholder='Select an option' />
	</div>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<label class="field">
	"This is a label"
	<Select {options} size="none" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="sm" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="md" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="lg" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="full" placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Default Selected

Set a default selected value with the `defaultSelected` prop.

<div class="w-[350px]">
	<SelectTemplate {options} defaultSelected={defaultSelected} placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
	let defaultSelected = options[0];
</script>

<label class="field">
	"This is a label"
	<Select {options} {defaultSelected} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Disabled

The `disabled` prop can be used to disable the Select component.

<div class="w-[350px]">
	<SelectTemplate {options} disabled label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} disabled={true} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Read Only

Use the `readonly` prop to make the Select component read-only.

<div class="w-[350px]">
	<SelectTemplate {options} readonly label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} readonly={true} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Animation

Toggle animations for the Select component with the `animation` prop.

<div class="w-[350px]">
	<SelectTemplate {options} animation={false} label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} animation={false} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Invalid

Set the `invalid` prop to mark the Select component as invalid, and use `invalidText` to display an error message.

<div class="w-[350px]">
	<SelectTemplate {options} invalid invalidText="This is invalid text." label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select
		{options}
		invalid={true}
		invalidText="This is invalid text."
		placeholder="Select an option"
	/>
</label>
```

</CodeBlockWrapper>

## Accessibility

<ul class="flex flex-col gap-2 ml-6">
	<AccessibilityListItem>Support for selecting a single option.</AccessibilityListItem>
	<AccessibilityListItem>Support for disabled options.</AccessibilityListItem>
	<AccessibilityListItem>Support for sections.</AccessibilityListItem>
	<AccessibilityListItem>Labeling support for accessibility.</AccessibilityListItem>
	<AccessibilityListItem>Support for description and error message help text linked to the input via ARIA.</AccessibilityListItem>
	<AccessibilityListItem>Support for mouse, touch, and keyboard interactions.</AccessibilityListItem>
	<AccessibilityListItem>Tab stop focus management.</AccessibilityListItem>
</ul>

## API

Select provides APIs(Properties) that is necessary for you to configure a Select compponent.

### Select Props

<PropertyTable properties={selectProps} />

### Select Handlers

<HandlerTable handlers={selectHandlers} />

### Select Slots

<SlotTable slots={selectSlots} />
