import { tv } from '$lib/utils/tv';

export const switchVariant = tv({
	slots: {
		wrapper: ['s-ui--switch--wrapper', 'flex flex-col gap-2 font-normal'],
		label: ['s-ui--switch--label', 'font-medium text-neutral-600 dark:text-neutral-200'],
		switchWrapper: ['s-ui--switch--swtichWrapper', 'flex flex-row gap-2 items-center'],
		base: ['s-ui--switch--base', 'rounded-full flex items-center'],
		switchChip: ['s-ui--switch--switchChip', 'border border-gray-400 rounded-full'],
		switchText: ['s-ui--switch--switchText', 'font-medium text-neutral-600 dark:text-neutral-200'],
		invalid: ['s-ui--switch--invalid', 'text-sm text-red-500 mt-1']
	},
	variants: {
		variant: {
			primary: { base: ['bg-blue-500'] },
			secondary: { base: ['bg-neutral-500'] },
			success: { base: ['bg-green-500'] },
			warning: { base: ['bg-yellow-500'] },
			danger: { base: ['bg-red-500'] }
		},
		size: {
			sm: {
				label: ['text-xs'],
				base: ['w-[35px] h-[20px] px-1'],
				switchChip: ['w-[14px] h-[14px]'],
				switchText: ['text-sm']
			},
			md: {
				label: ['text-sm'],
				base: ['w-[45px] h-[25px] px-1'],
				switchChip: ['w-[19px] h-[19px]'],
				switchText: ['text-sm']
			},
			lg: {
				label: ['text-base'],
				base: ['w-[65px] h-[35px] px-1.5'],
				switchChip: ['w-[26px] h-[26px]'],
				switchText: ['text-base']
			}
		},
		disabled: {
			true: { base: 'cursor-not-allowed bg-gray-300', switchChip: 'bg-gray-500' },
			false: { base: 'cursor-pointer', switchChip: 'bg-white' }
		},
		readonly: {
			true: { base: 'cursor-default' },
			false: ''
		},
		toggled: {
			true: '',
			false: { base: 'bg-gray-400', switchChip: 'translate-x-0' }
		},
		invalid: {
			true: { label: ['text-red-500 dark:text-red-500'] }
		},
		animation: {
			true: { switchChip: 'transition-all duration-300 ease' },
			false: {}
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
