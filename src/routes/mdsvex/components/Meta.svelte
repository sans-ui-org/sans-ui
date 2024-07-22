<script lang="ts">
	type Twitter = {
		handle: string;
		cardType: string;
		title: string;
		description: string;
		image: string;
		imageAlt: string;
	};
	type OpenGraph = {
		url: string;
		title: string;
		description: string;
		images: {
			url: string;
			alt?: string;
			width?: number;
			height?: number;
			secureUrl?: string;
			type?: string;
		}[];
	};

	export let title: string = '';
	export let description: string = '';
	export let keywords: string[] = [];
	export let languageAlternates: { hrefLang: string; href: string }[] = [];
	export let twitter: Twitter | undefined = undefined;
	export let openGraph: OpenGraph | undefined = undefined;
</script>

<svelte:head>
	<title>{title}</title>
	<!-- <meta name="robots" content="{robots}{robotsParams}" /> -->
	<meta name="description" content={description} />

	{#if keywords?.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	{#if languageAlternates && languageAlternates.length}
		{#each languageAlternates as languageAlternate}
			<link rel="alternate" hrefLang={languageAlternate.hrefLang} href={languageAlternate.href} />
		{/each}
	{/if}

	{#if twitter}
		<meta name="twitter:card" content={twitter.cardType} />
		<meta name="twitter:creator" content={twitter.handle} />
		<meta name="twitter:title" content={twitter.title} />
		<meta name="twitter:description" content={twitter.description} />
		<meta name="twitter:image" content={twitter.image} />
		<meta name="twitter:image:alt" content={twitter.imageAlt} />
	{/if}

	{#if openGraph}
		<meta property="og:url" content={openGraph.url} />
		<meta property="og:title" content={openGraph.title} />
		<meta property="og:description" content={openGraph.description || description} />

		{#if openGraph.images && openGraph.images.length}
			{#each openGraph.images as image}
				<meta property="og:image" content={image.url} />
				{#if image.alt}
					<meta property="og:image:alt" content={image.alt} />
				{/if}
				{#if image.width}
					<meta property="og:image:width" content={image.width.toString()} />
				{/if}
				{#if image.height}
					<meta property="og:image:height" content={image.height.toString()} />
				{/if}
				{#if image.secureUrl}
					<meta property="og:image:secure_url" content={image.secureUrl.toString()} />
				{/if}
				{#if image.type}
					<meta property="og:image:type" content={image.type.toString()} />
				{/if}
			{/each}
		{/if}
	{/if}
</svelte:head>
