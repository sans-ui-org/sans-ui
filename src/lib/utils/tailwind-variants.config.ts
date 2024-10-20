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
