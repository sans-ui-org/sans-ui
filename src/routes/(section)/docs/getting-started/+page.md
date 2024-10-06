---
layout: componentLayout
title: Introduction
description: This is the introduction section for you to start using SanS UI library.
category: documentation
toc: [
			{ slug: 'what-is-SanS UI?', title: 'What is SanS UI?', level: 0 },
			{ slug: 'contributing', title: 'Contributing', level: 0 },
			{ slug: 'license', title: 'License', level: 0 },
			{ slug: 'faq', title: 'FAQ', level: 0 },
			{ slug: 'does-SanS UI-use-typescript?', title: 'SanS UI & TypeScript', level: 1 },
			{ slug: 'SanS UI-taking-tailwind-classes-conflicts-into-account?', title: 'Tailwind Class Conflict', level: 1 },
			{ slug: 'SanS UI-compiles-css-during-runtime?', title: 'CSS Compilation Time', level: 1 },
		]
nextButton: { title: 'Installation', slug: '/docs/installation' }
prevButton: null
---

<script>
	import { Link } from '$lib';
	import * as Component from "../../../mdsvex/+layout.svelte"
</script>

## What is SanS UI?

SanS UI is a UI library for Svelte that empowers you to build clean and accessible user interfaces using <Link href="https://tailwindcss.com/" external>Tailwind CSS</Link>. As a new and growing library, we eagerly invite contributions and innovative ideas from the community to enhance and expand our offerings. Our goal is to foster a vibrant development community and establish SanS UI as a cherished tool within the <Link href="https://svelte.dev/" external>Svelte</Link> ecosystem.

## Contributing

SanS UI is an open-source Svelte UI component library. Whether you're new to <Link href="https://svelte.dev/" external>Svelte</Link> or an experienced developer, your ideas and contributions are invaluable. Please refer to <Link href="https://github.com/sans-ui-org/sans-ui/blob/development/CONTRIBUTING.md">our contributing guide</Link> to discover how you can get involved and make a difference in our open-source community 💪

## License

SanS UI is a free and open-source UI component library, licensed under <Link href="https://github.com/sans-ui-org/sans-ui/blob/development/LICENSE">the MIT License</Link>.

## FAQ

### Does SanS UI use TypeScript?

Yes, SanS UI is developed using TypeScript in conjunction with Svelte.

### SanS UI taking Tailwind classes conflicts into account?

Yes, we utilize a Tailwind extension library called <Link href="https://www.tailwind-variants.org/" external>tailwind-variants</Link>, which automatically manages Tailwind CSS class conflicts. We would like to thank and send respect to <Link href="https://nextui.org/" external >NextUI</Link> community 🙌

### SanS UI compiles CSS during runtime?

No, SanS UI is built on top of Tailwind CSS, TailwindCSS as its style engine, it generates CSS at build time. You need to set up Tailwind CSS first on your project in order to start to use SanS UI components library.
