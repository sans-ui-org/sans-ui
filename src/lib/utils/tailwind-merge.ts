// eslint-disable-next-line no-restricted-imports
import { extendTailwindMerge } from 'tailwind-merge';

export const twMergeConfig = {
	extend: {
		classGroups: {
			'font-size': [{ text: ['10', '11', '12', '14', '16', '20', '32'] }]
		}
	},
	override: {
		conflictingClassGroups: {
			'font-size': []
		}
	}
};

export const twMerge = extendTailwindMerge(twMergeConfig);
