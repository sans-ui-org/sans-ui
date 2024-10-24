import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: [
		'../src/**/*.mdx',
		'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
		'../src/stories/**/*.mdx',
		'../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-designs'
		// Other Storybook addons
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	}
};
export default config;
