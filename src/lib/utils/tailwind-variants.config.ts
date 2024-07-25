export const COMMON_UNITS = ['small', 'medium', 'large'];

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
// export const twMergeConfig: Partial<Config> = {
// 	theme: {
// 		opacity: ['disabled'],
// 		spacing: ['divider'],
// 		borderWidth: COMMON_UNITS,
// 		borderRadius: COMMON_UNITS
// 	},
// 	classGroups: {
// 		shadow: [{ shadow: COMMON_UNITS }],
// 		'font-size': [{ text: ['tiny', ...COMMON_UNITS] }],
// 		'bg-image': ['bg-stripe-gradient']
// 	}
// };
