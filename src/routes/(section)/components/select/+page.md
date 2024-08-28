---
layout: componentLayout
title: Select
description: A select displays a collapsible list of options and allows a user to select one or more of them.
category: component
githubFolder: /select/Select.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'default-selected', title: 'Default Selected', level: 0 },
			{ slug: 'disabled', title: 'Disabled', level: 0 },
			{ slug: 'readonly', title: 'ReadOnly', level: 0 },
			{ slug: 'animation', title: 'Animation', level: 0 },
			{ slug: 'invalid', title: 'Invalid', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'select-props', title: 'Select Props', level: 1 },
			{ slug: 'select-slots', title: 'Select Slots', level: 1 },
		]
---

<script>
	import { Button, Select } from '$lib';
	import SlotTable from "../../../mdsvex/components/SlotTable.svelte"
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { selectProps, selectSlots } from "./select-props.ts"

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' },
	]

	let defaultSelected = options[0]
</script>

## Set Up

Import a Select component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Select } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list

<div class="w-[350px]">
	<Select {options} label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Select } from '$lib';

	let popupSelect = false;
	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<Select {options} label="This is a label" placeholder="Select an option" />
```

</CodeBlockWrapper>

## Variant

Select has `variant` prop to decide the color theme of it.

<div class="flex flex-col gap-4">
	<div class="w-[350px]">
		<Select variant="primary" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<Select variant="secondary" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<Select variant="success" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<Select variant="warning" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<Select variant="danger" {options} label="This is a label" placeholder="Select an option" />
	</div>
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Select } from '$lib';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<Select variant="primary" {options} label="This is a label" placeholder="Select an option" />
<Select variant="secondary" {options} label="This is a label" placeholder="Select an option" />
<Select variant="success" {options} label="This is a label" placeholder="Select an option" />
<Select variant="warning" {options} label="This is a label" placeholder="Select an option" />
<Select variant="danger" {options} label="This is a label" placeholder="Select an option" />
```

</CodeBlockWrapper>

## Size

Select has `size` prop to decide the size of it.

<div class="flex flex-row gap-4">
	<div class="w-[250px]">
		<Select {options} size="sm" label='This is sm' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<Select {options} size="md" label='This is md' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<Select {options} size="lg" label='This is lg' placeholder='Select an option' />
	</div>
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '$lib';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<Select {options} size="sm" label="This is sm" placeholder="Select an option" />
<Select {options} size="md" label="This is md" placeholder="Select an option" />
<Select {options} size="lg" label="This is lg" placeholder="Select an option" />
```

</CodeBlockWrapper>

## Default Selected

Select has `defaultSelected` prop that defines the default selected value of the select.

<div class="w-[350px]">
	<Select {options} defaultSelected={defaultSelected} label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '$lib';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
	let defaultSelected = options[0];
</script>

<Select {options} {defaultSelected} label="This is a label" placeholder="Select an option" />
```

</CodeBlockWrapper>

## Disabled

Select has `disabled` prop that defines if the select is disabled.

<div class="w-[350px]">
	<Select {options} disabled label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '$lib';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<Select {options} disabled={true} label="This is a label" placeholder="Select an option" />
```

</CodeBlockWrapper>

## Read Only

Select has `readonly` prop that defines if the select is readonly.

<div class="w-[350px]">
	<Select {options} readonly label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '$lib';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<Select {options} readonly={true} label="This is a label" placeholder="Select an option" />
```

</CodeBlockWrapper>

## Animation

Select has `animation` prop that defines if the select has animation.

<div class="w-[350px]">
	<Select {options} animation={false} label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '$lib';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<Select {options} animation={false} label="This is a label" placeholder="Select an option" />
```

</CodeBlockWrapper>

## Invalid

Select has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<div class="w-[350px]">
	<Select {options} invalid invalidText="This is invalid text." label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '$lib';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<Select
	{options}
	invalid={true}
	invalidText="This is invalid text."
	label="This is a label"
	placeholder="Select an option"
/>
```

</CodeBlockWrapper>

## API

Select provides APIs(Properties) that is necessary for you to configure a Select compponent.

### Select Props

<PropertyTable properties={selectProps} />

### Select Slots

<SlotTable slots={selectSlots} />
