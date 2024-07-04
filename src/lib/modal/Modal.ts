import { cx } from '$lib/utils/utils';

export type ModalSize = 'sm' | 'md' | 'lg' | 'full';

export type ModalProps = {
	className: string;
	size: ModalSize;
	open: boolean;
};

export function getModalSlots({ className, size, open }: ModalProps) {
	const getModalSize = () => {
		switch (size) {
			case 'sm':
				return 'w-[60%] h-[70%]';
			case 'md':
				return 'w-[70%] h-[80%]';
			case 'lg':
				return 'w-[80%] h-[90%]';
			case 'full':
				return 'w-full h-full';
		}
	};

	// slots
	return {
		overlay: cx([
			open ? 'flex' : 'hidden',
			'fixed top-0 left-0 w-[100vw] h-[100vh] justify-center items-center bg-slate-950/20',
			'text-base font-bold font-black',
			'transition-all duration-300 ease-out'
		]),
		dialog: cx([
			open ? 'visible' : 'invisible',
			'fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex justify-center items-cente transition-all duration-300 ease-out'
		]),
		modalContentWrapper: cx([
			open ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-[20px]',
			'transition-all duration-300 ease-out',
			'flex relative',
			getModalSize(),
			className
		]),
		modalContent:
			'bg-white text-gray-500 rounded border-gray-200 dark:border-gray-700 divide-gray-200 shadow-md relative flex flex-col mx-auto w-full divide-y',
		modalHeaderWrapper:
			'bg-white text-gray-500 border-gray-200 divide-gray-200 flex justify-between items-center',
		modalHeader: 'text-lg font-semibold text-gray-900 px-5 py-2',
		modalHeaderCloseIcon: 'cursor-pointer p-2 mr-1 rounded hover:bg-gray-300',
		modalBody: 'p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain',
		modalBodyCloseIcon: 'absolute top-3 end-2.5'
	};
}
