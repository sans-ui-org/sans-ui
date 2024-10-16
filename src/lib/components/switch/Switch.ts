import { tv } from '$lib/utils/tv';

export const switchVariant = tv({
	slots: {
		base: ['sans-ui--switch--base', 'relative rounded-full inline-block overflow-hidden'],
		switch: ['sans-ui--switch--switch', 'opacity-0 w-0 h-0 rounded-full'],
		// chip: ['sans-ui--switch--switchChip', 'border border-gray-400 rounded-full'],
		chip: [
			'sans-ui--switch--switchChip',
			'absolute bg-gray-400 top-0 left-0 right-0 bottom-0',
			"before:content-[''] before:absolute before:bg-white before:rounded-full before:shadow-md",
			'before:focus:outline'
		],
		invalid: ['sans-ui--switch--invalid', 'text-sm text-red-500 mt-1']
	},
	variants: {
		variant: {
			primary: { chip: ['bg-blue-500'] },
			secondary: { chip: ['bg-neutral-500'] },
			success: { chip: ['bg-green-500'] },
			warning: { chip: ['bg-yellow-500'] },
			danger: { chip: ['bg-red-500'] }
		},
		size: {
			sm: {
				base: ['w-[35px] h-[20px] px-1'],
				chip: ['before:top-[4px] before:left-[4px] before:h-[12px] before:w-[12px]']
			},
			md: {
				base: ['w-[45px] h-[25px] px-1'],
				chip: ['before:top-[4px] before:left-[5px] before:h-[17px] before:w-[17px]']
			},
			lg: {
				base: ['w-[65px] h-[35px] px-1.5'],
				chip: ['before:top-[6px] before:left-[6px] before:w-[23px] before:h-[23px]']
			}
		},
		disabled: {
			true: { base: 'cursor-not-allowed bg-gray-300', chip: 'before:bg-gray-500' },
			false: { base: 'cursor-pointer' }
		},
		readonly: {
			true: { base: 'cursor-default' },
			false: ''
		},
		toggled: {
			true: '',
			false: { chip: 'bg-gray-400' }
		},
		invalid: {
			true: '',
			false: ''
		},
		animation: {
			true: { chip: 'transition-all duration-300 before:transition-all before:duration-300' },
			false: {}
		}
	},
	compoundVariants: [
		{
			toggled: true,
			size: 'sm',
			class: { chip: ['before:translate-x-[14px]'] }
		},
		{
			toggled: true,
			size: 'md',
			class: { chip: ['before:translate-x-[18px]'] }
		},
		{
			toggled: true,
			size: 'lg',
			class: { chip: ['before:translate-x-[29px]'] }
		}
	]
});

export type SwitchSlots = keyof ReturnType<typeof switchVariant>;
