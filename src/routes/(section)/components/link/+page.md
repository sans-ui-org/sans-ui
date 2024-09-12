---
layout: componentLayout
title: Link
description: Links allow users to click their way from page to page. This component is styled to resemble a hyperlink and semantically renders an anchor element.
category: component
githubFolder: /link/Link.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'font-size', title: 'Font Size', level: 0 },
			{ slug: 'font-weight', title: 'Font Weight', level: 0 },
			{ slug: 'underline-type', title: 'Underline Type', level: 0 },
			{ slug: 'disabled', title: 'Disabled', level: 0 },
			{ slug: 'external', title: 'External', level: 0 },
			{ slug: 'window-icon', title: 'Window Icon', level: 0 },
			{ slug: 'animation', title: 'Animation', level: 0 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'link-props', title: 'Link Props', level: 1 },
			{ slug: 'link-slots', title: 'Link Slots', level: 1 },
		]
---

---

<script>
	import { Link } from '$lib';
	import { PropertyTable, SlotTable, CodeBlockWrapper, AccessibilityIcon }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { linkProps, linkSlots } from "./link-props.ts"

</script>

## Set Up

Import a Link component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

Buttons allow users to perform actions and choose with a single tap. You can deactivate the ripple effect, so we will state that later on.

<Link href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
```

</CodeBlockWrapper>

## Variant

Link has `variant` prop to decide the color theme of it.

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
	import { Link } from '$lib';
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

Link has `size` prop to decide the font size of Link component.

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
	import { Link } from '$lib';
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

Link has `bold` prop to decide the font weight of Link component.

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
	import { Link } from '$lib';
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

Link has `underline` prop to decide the text decoration(underline) of the link.

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
	import { Link } from '$lib';
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

Link has `disabled` prop to defines if the link is disalbe.

<Link disabled href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link disabled={true} href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
```

</CodeBlockWrapper>

## External

Link has `external` prop to defines if the Link is an extrnal link.

<Link external={true} href="https://github.com/s-ui-org/s-ui">This is an External link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link external={true} href="https://github.com/s-ui-org/s-ui"
	>This is an External link to the our Github page</Link
>
```

</CodeBlockWrapper>

## Window Icon

Link has `windowIcon` prop to defines if the Link has a window icon.

<Link windowIcon external href="https://github.com/s-ui-org/s-ui">This is link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link windowIcon external href="https://github.com/s-ui-org/s-ui"
	>This is link to the our Github page</Link
>
```

</CodeBlockWrapper>

## Animation

Link has `animation` prop to defines if the link's animation is disabled or not.

<Link href="https://github.com/s-ui-org/s-ui" animation={false}>This is link to the our Github page</Link>

<CodeBlockWrapper>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link disabled href="https://github.com/s-ui-org/s-ui" animation={false}
	>This is link to the our Github page</Link
>
```

</CodeBlockWrapper>

## Accessibility

- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Built with a native input element.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Visual and ARIA labeling support.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Change, clipboard, composition, selection, and input event support.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Required and invalid states exposed to assistive technology via ARIA.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Support for description and error message help text linked to the input via ARIA.</div>

## API

Link provides APIs(Properties) that is necessary for you to configure a Link compponent.

### Link Props

<PropertyTable properties={linkProps} />

### Link Slots

<SlotTable slots={linkSlots} />
