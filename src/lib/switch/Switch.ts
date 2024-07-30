import { tv } from '$lib/utils/tv';

export const switchVariant = tv({
	slots: {
		label: ['font-normal'],
		base: ['flex flex-col gap-2 font-normal'],
		wrapper: ['flex flex-row gap-2 items-center'],
		switch: ['rounded-full flex items-center transition-colors duration-300 ease-in-out'],
		switchChip: ['border border-gray-400 rounded-full transition-all duration-300 ease'],
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
				switch: ['w-[35px] h-[20px] px-1'],
				switchChip: ['w-[14px] h-[14px]']
			},
			md: {
				label: ['text-sm'],
				switch: ['w-[45px] h-[25px] px-1'],
				switchChip: ['w-[19px] h-[19px]']
			},
			lg: {
				label: ['text-base'],
				switch: ['w-[65px] h-[35px] px-1.5'],
				switchChip: ['w-[26px] h-[26px]']
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
			class: { switchChip: ['translate-x-[13px]'] }
		},
		{
			toggled: true,
			size: 'md',
			class: { switchChip: ['translate-x-[18px]'] }
		},
		{
			toggled: true,
			size: 'lg',
			class: { switchChip: ['translate-x-[27px]'] }
		}
	]
});

export type SwitchSlots = keyof ReturnType<typeof switchVariant>;
