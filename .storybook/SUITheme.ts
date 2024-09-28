import { create } from '@storybook/theming/create';

export default create({
	base: 'light',
	// Typography
	fontBase: '"Raleway", "Roboto", "Helvetica Neue"',
	fontCode: 'monospace',

	brandTitle: 'SanS-UI release 0.0.1',
	brandUrl: 'https://example.com',
	// TODO: Can be created by Canva: https://www.canva.com/
	// brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
	brandImage: 'https://sans-ui-org.s3.amazonaws.com/SanS_nunito.svg',
	brandTarget: '_self',

	//
	colorPrimary: '#3A10E5',
	colorSecondary: 'rgb(59 130 246)',

	// UI
	appBg: 'rgb(239 246 255)',
	appContentBg: '#fff',
	appPreviewBg: '#fff',
	appBorderColor: 'rgb(147 197 253)',
	appBorderRadius: 4,

	// Text colors
	textColor: '#10162F',
	textInverseColor: '#ffffff',

	// Toolbar default and active colors
	barTextColor: '#9E9E9E',
	barSelectedColor: 'rgb(59 130 246)',
	barHoverColor: 'rgb(59 130 246)',
	barBg: '#ffffff',

	// Form colors
	inputBg: '#ffffff',
	inputBorder: '#10162F',
	inputTextColor: '#10162F',
	inputBorderRadius: 2
});
