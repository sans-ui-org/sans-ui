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
			open ? 'visible' : 'invisible',
			'fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-slate-950/20',
			'text-md font-bold font-black',
			'transition-all duration-300 ease-out'
		]),
		modalContent: cx([
			'relative flex flex-col border rounded shadow bg-white',
			'transition-all duration-300 ease-out',
			open ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-[20px]',
			getModalSize(),
			className
		])
	};
}
