import { tv } from '$lib/utils/tv';

export const modalVariant = tv({
	slots: {
		overlay: [
			'fixed top-0 left-0 w-[100vw] h-[100vh] justify-center items-center bg-slate-950/20 text-base font-bold font-black transition-all duration-300 ease-out'
		],
		base: [
			'fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full flex justify-center items-center transition-all duration-300 ease-out'
		]
	},
	variants: {
		open: {
			true: { overlay: 'flex', base: 'visible' },
			false: { overlay: 'hidden', base: 'invisible' }
		},
		size: { full: { base: '' }, lg: { base: 'p-4' }, md: { base: 'p-4' }, sm: { base: 'p-4' } }
	}
});

export const modalBodyVariant = tv({
	slots: {
		base: ['p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain']
	},
	variants: {}
});

export const modalContentVariant = tv({
	slots: {
		base: ['transition-all duration-300 ease-out flex relative overflow-y'],
		content: [
			'bg-white text-gray-500 rounded border-gray-200 dark:border-gray-700 divide-gray-200 shadow-md relative flex flex-col mx-auto w-full divide-y'
		]
	},
	variants: {
		open: {
			true: { base: 'opacity-1 translate-y-0' },
			false: { base: 'opacity-0 -translate-y-[20px]' }
		},
		size: {
			sm: { base: 'w-[60%] h-[40%]' },
			md: { base: 'w-[70%] h-[50%]' },
			lg: { base: 'w-[80%] h-[60%]' },
			full: { base: 'w-full h-full' }
		}
	}
});

export const modalHeaderVariant = tv({
	slots: {
		headerWrapper: [
			'bg-white text-gray-500 border-gray-200 divide-gray-200 flex justify-between items-center'
		],
		base: ['text-lg font-semibold text-gray-900 px-5 py-4'],
		closeIcon: ['cursor-pointer p-2 mr-4 rounded hover:bg-gray-300']
	},
	variants: {}
});
