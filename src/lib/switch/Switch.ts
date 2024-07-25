import { tv } from '$lib/utils/tv';

export const switchVariant = tv({
	slots: {
		label: ['font-normal'],
		base: ['flex flex-col gap-2 font-normal'],
		wrapper: ['flex flex-row gap-2 items-center'],
		switch: ['rounded-full flex items-center p-1.5 transition-colors duration-300 ease-in-out'],
		switchChip: ['rounded-full transition-all duration-300 ease'],
		switchText: ['font-normal'],
		invalidText: ['text-sm text-red-500 mt-1']
	},
	variants: {
		variant: {
			primary: { switch: ['bg-blue-500'] },
			secondary: { switch: ['bg-neutral-500'] },
			success: { switch: ['bg-green-500'] },
			warning: { switch: ['bg-yellow-500'] },
			danger: { switch: ['bg-red-500'] }
		},
		size: {
			sm: {
				label: ['text-xs'],
				switch: ['w-[40px] h-[20px]'],
				switchChip: ['w-[10px] h-[10px]']
			},
			md: {
				label: ['text-sm'],
				switch: ['w-[60px] h-[30px]'],
				switchChip: ['w-[20px] h-[20px]']
			},
			lg: {
				label: ['text-base'],
				switch: ['w-[80px] h-[40px]'],
				switchChip: ['w-[30px] h-[30px]']
			}
		},
		disabled: {
			true: { switch: 'cursor-not-allowed bg-gray-300', switchChip: 'bg-gray-500' },
			false: { switch: 'cursor-pointer', switchChip: 'bg-white' }
		},
		readonly: {
			true: { switch: 'cursor-default' },
			false: ''
		},
		toggled: {
			true: '',
			false: { switch: 'bg-gray-400', switchChip: 'translate-x-0' }
		},
		invalid: {
			true: { label: ['text-red-500'] }
		}
	},
	compoundVariants: [
		{
			toggled: true,
			size: 'sm',
			class: { switchChip: ['translate-x-[20px]'] }
		},
		{
			toggled: true,
			size: 'md',
			class: { switchChip: ['translate-x-[30px]'] }
		},
		{
			toggled: true,
			size: 'lg',
			className: { switchChip: ['translate-x-[40px]'] }
		}
	]
});
