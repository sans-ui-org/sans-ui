---
layout: componentLayout
title: Link
description: Links allow users to click their way from page to page. This component is styled to resemble a hyperlink and semantically renders an anchor element.
category: component
githubFolder: /link/Link.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 1 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'font-size', title: 'Font Size', level: 1 },
			{ slug: 'font-weight', title: 'Font Weight', level: 1 },
			{ slug: 'underline-type', title: 'Underline Type', level: 1 },
			{ slug: 'disabled', title: 'Disabled', level: 1 },
			{ slug: 'external', title: 'External', level: 1 },
			{ slug: 'window-icon', title: 'Window Icon', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'link-props', title: 'Link Props', level: 1 },
			{ slug: 'link-slots', title: 'Link Slots', level: 1 },
		]
---

---

<script>
	import { Link } from '$lib';
	import { PropertyTable, SlotTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { linkProps, linkSlots } from "./link-props.ts"

</script>

## Set Up

Import a Link component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

The Link component allows users to navigate between pages. Below is an example of a link pointing to a GitHub page:

<Link href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
```

</CodeBlockWrapper>

## Variant

You can control the color theme of the Link component using the `variant` prop:

<div class="inline-flex flex-col gap-2">
	<Link variant="primary" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
	<Link variant="secondary" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
	<Link variant="success" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
	<Link variant="warning" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
	<Link variant="danger" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link variant="primary" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>This is link to the our Github page</Link
>
<Link variant="secondary" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>This is link to the our Github page</Link
>
<Link variant="success" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>This is link to the our Github page</Link
>
<Link variant="warning" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>This is link to the our Github page</Link
>
<Link variant="danger" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>This is link to the our Github page</Link
>
```

</CodeBlockWrapper>

## Font Size

Use the `size` prop to adjust the font size of the Link component. Available sizes range from `sm` to `7xl`:

<div class="inline-flex flex-col gap-2">
	<Link size="sm" href="https://github.com/s-ui-org/s-ui" target="_blank">This is sm</Link>
	<Link size="md" href="https://github.com/s-ui-org/s-ui" target="_blank">This is md</Link>
	<Link size="lg" href="https://github.com/s-ui-org/s-ui" target="_blank">This is lg</Link>
	<Link size="xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is xl</Link>
	<Link size="2xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 2xl</Link>
	<Link size="3xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 3xl</Link>
	<Link size="4xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 4xl</Link>
	<Link size="5xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 5xl</Link>
	<Link size="6xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 6xl</Link>
	<Link size="7xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 7xl</Link>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link size="sm" href="https://github.com/s-ui-org/s-ui" target="_blank">This is sm</Link>
<Link size="md" href="https://github.com/s-ui-org/s-ui" target="_blank">This is md</Link>
<Link size="lg" href="https://github.com/s-ui-org/s-ui" target="_blank">This is lg</Link>
<Link size="xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is xl</Link>
<Link size="2xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 2xl</Link>
<Link size="3xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 3xl</Link>
<Link size="4xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 4xl</Link>
<Link size="5xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 5xl</Link>
<Link size="6xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 6xl</Link>
<Link size="7xl" href="https://github.com/s-ui-org/s-ui" target="_blank">This is 7xl</Link>
```

</CodeBlockWrapper>

## Font Weight

Control the font weight using the `bold` prop, with options ranging from `thin` to `black`:

<div class="inline-flex flex-col gap-2">
	<Link bold="thin" href="https://github.com/s-ui-org/s-ui" target="_blank">This is thin</Link>
	<Link bold="extralight" href="https://github.com/s-ui-org/s-ui" target="_blank">This is extralight</Link>
	<Link bold="light" href="https://github.com/s-ui-org/s-ui" target="_blank">This is light</Link>
	<Link bold="normal" href="https://github.com/s-ui-org/s-ui" target="_blank">This is normal</Link>
	<Link bold="medium" href="https://github.com/s-ui-org/s-ui" target="_blank">This is medium</Link>
	<Link bold="semibold" href="https://github.com/s-ui-org/s-ui" target="_blank">This is semibold</Link>
	<Link bold="bold" href="https://github.com/s-ui-org/s-ui" target="_blank">This is bold</Link>
	<Link bold="extrabold" href="https://github.com/s-ui-org/s-ui" target="_blank">This is extrabold</Link>
	<Link bold="black" href="https://github.com/s-ui-org/s-ui" target="_blank">This is black</Link>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link bold="thin" href="https://github.com/s-ui-org/s-ui" target="_blank">This is thin</Link>
<Link bold="extralight" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>This is extralight</Link
>
<Link bold="light" href="https://github.com/s-ui-org/s-ui" target="_blank">This is light</Link>
<Link bold="normal" href="https://github.com/s-ui-org/s-ui" target="_blank">This is normal</Link>
<Link bold="medium" href="https://github.com/s-ui-org/s-ui" target="_blank">This is medium</Link>
<Link bold="semibold" href="https://github.com/s-ui-org/s-ui" target="_blank">This is semibold</Link
>
<Link bold="bold" href="https://github.com/s-ui-org/s-ui" target="_blank">This is bold</Link>
<Link bold="extrabold" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>This is extrabold</Link
>
<Link bold="black" href="https://github.com/s-ui-org/s-ui" target="_blank">This is black</Link>
```

</CodeBlockWrapper>

## Underline Type

The `underlineType` prop defines when the link should be underlined. Options include:

- `none`: No underline
- `hover`: Underlined on hover
- `always`: Always underlined
- `active`: Underlined when active

<div class="inline-flex flex-col gap-2">
	<Link underlineType="none" href="https://github.com/s-ui-org/s-ui" target="_blank"
		>underlineType is "none"</Link
	>
	<Link underlineType="hover" href="https://github.com/s-ui-org/s-ui" target="_blank"
		>underlineType is "hover"</Link
	>
	<Link underlineType="always" href="https://github.com/s-ui-org/s-ui" target="_blank"
		>underlineType is "always"</Link
	>
	<Link underlineType="active" href="https://github.com/s-ui-org/s-ui" target="_blank"
		>underlineType is "active"</Link
	>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link underlineType="none" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>underlineType is "none"</Link
>
<Link underlineType="hover" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>underlineType is "hover"</Link
>
<Link underlineType="always" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>underlineType is "always"</Link
>
<Link underlineType="active" href="https://github.com/s-ui-org/s-ui" target="_blank"
	>underlineType is "active"</Link
>
```

</CodeBlockWrapper>

## Disabled

The `disabled` prop disables the link, making it non-clickable:

<Link disabled href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link disabled={true} href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
```

</CodeBlockWrapper>

## External

Use the `external` prop to indicate an external link, which typically opens in a new tab:

<Link external={true} href="https://github.com/s-ui-org/s-ui">This is an External link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link external={true} href="https://github.com/s-ui-org/s-ui"
	>This is an External link to the our Github page</Link
>
```

</CodeBlockWrapper>

## Window Icon

Enable the `windowIcon` prop to display an icon indicating that the link will open in a new window or tab:

<Link windowIcon external href="https://github.com/s-ui-org/s-ui">This is link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link windowIcon external href="https://github.com/s-ui-org/s-ui"
	>This is link to the our Github page</Link
>
```

</CodeBlockWrapper>

## Animation

Control link animations using the `animation` prop. By default, animations are enabled. Set `animation={false}` to disable them:

<Link href="https://github.com/s-ui-org/s-ui" animation={false}>This is link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '@sans-ui';
</script>

<Link disabled href="https://github.com/s-ui-org/s-ui" animation={false}
	>This is link to the our Github page</Link
>
```

</CodeBlockWrapper>

## Accessibility

<ul class="flex flex-col gap-2">
	<AccessibilityListItem>Built with a native input element.</AccessibilityListItem>
	<AccessibilityListItem>Visual and ARIA labeling support.</AccessibilityListItem>
	<AccessibilityListItem>Change, clipboard, composition, selection, and input event support.</AccessibilityListItem>
	<AccessibilityListItem>Required and invalid states exposed to assistive technology via ARIA.</AccessibilityListItem>
	<AccessibilityListItem>Support for description and error message help text linked to the input via ARIA.</AccessibilityListItem>
</ul>

## API

Link provides APIs(Properties) that is necessary for you to configure a Link compponent.

### Link Props

<PropertyTable properties={linkProps} />

### Link Slots

<SlotTable slots={linkSlots} />
