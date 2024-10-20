import { tv } from '../../utils/tv';

export const buttonVariant = tv({
	slots: {
		base: [
			'sans-ui--button--base inline-flex items-center outline-offset-4',
			'disabled:bg-gray-400 disabled:text-neutral-350 disabled:cursor-not-allowed'
		]
	},
	variants: {
		variant: {
			primary: '',
			secondary: '',
			success: '',
			warning: '',
			danger: ''
		},
		size: {
			sm: '',
			md: '',
			lg: ''
		},
		rounded: {
			none: { base: 'rounded-none' },
			sm: { base: 'rounded-sm' },
			md: { base: 'rounded-md' },
			lg: { base: 'rounded-lg' },
			full: { base: 'rounded-full' }
		},
		kind: {
			solid: { base: 'text-white' },
			bordered: { base: 'border-2' },
			flat: '',
			shadow: { base: 'text-white' }
		},
		iconOnly: {
			true: { base: '' },
			false: { base: '' }
		},
		disabled: {
			true: { base: '' },
			false: { base: '' }
		},
		href: {
			true: { base: '' },
			false: { base: '' }
		},
		animation: {
			true: { base: 'transition duration-200' },
			false: {}
		}
	},
	compoundVariants: [
		{
			size: 'sm',
			iconOnly: false,
			class: { base: 'text-sm py-2 px-4 h-8' }
		},
		{
			size: 'md',
			iconOnly: false,
			class: { base: 'text-base py-2 px-5 h-10' }
		},
		{
			size: 'lg',
			iconOnly: false,
			class: { base: 'text-lg py-2 px-6 h-12' }
		},
		// icon only
		{
			size: 'sm',
			iconOnly: true,
			class: { base: 'p-2' }
		},
		{
			size: 'md',
			iconOnly: true,
			class: { base: 'p-3' }
		},
		{
			size: 'lg',
			iconOnly: true,
			class: { base: 'p-4' }
		},
		// solid / shadow
		{
			variant: 'primary',
			kind: ['solid', 'shadow'],
			class: { base: 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600' }
		},
		{
			variant: 'secondary',
			kind: ['solid', 'shadow'],
			class: { base: 'bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-600' }
		},
		{
			variant: 'success',
			kind: ['solid', 'shadow'],
			class: { base: 'bg-green-500 hover:bg-green-400 active:bg-green-600' }
		},
		{
			variant: 'warning',
			kind: ['solid', 'shadow'],
			class: { base: 'bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600' }
		},
		{
			variant: 'danger',
			kind: ['solid', 'shadow'],
			class: { base: 'bg-red-500 hover:bg-red-400 active:bg-red-600' }
		},
		// bordered
		{
			variant: 'primary',
			kind: 'bordered',
			class: { base: 'border-blue-500 text-blue-500 hover:bg-blue-100/10 active:bg-blue-100/10' }
		},
		{
			variant: 'secondary',
			kind: 'bordered',
			class: {
				base: 'border-neutral-500 text-neutral-500 hover:bg-neutral-100 active:bg-neutral-100'
			}
		},
		{
			variant: 'success',
			kind: 'bordered',
			class: { base: 'border-green-500 text-green-500 hover:bg-green-100 active:bg-green-100' }
		},
		{
			variant: 'warning',
			kind: 'bordered',
			class: { base: 'border-yellow-500 text-yellow-500 hover:bg-yellow-100 active:bg-yellow-100' }
		},
		{
			variant: 'danger',
			kind: 'bordered',
			class: { base: 'border-red-500 text-red-500 hover:bg-red-100 active:bg-red-100' }
		},
		// flat
		{
			variant: 'primary',
			kind: 'flat',
			class: { base: 'bg-blue-100 text-blue-500 hover:bg-blue-200 active:bg-blue-200' }
		},
		{
			variant: 'secondary',
			kind: 'bordered',
			class: { base: 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200 active:bg-neutral-200' }
		},
		{
			variant: 'success',
			kind: 'bordered',
			class: { base: 'bg-green-100 text-green-500 hover:bg-green-200 active:bg-green-200' }
		},
		{
			variant: 'warning',
			kind: 'bordered',
			class: { base: 'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 active:bg-yellow-200' }
		},
		{
			variant: 'danger',
			kind: 'bordered',
			class: { base: 'bg-red-100 text-red-500 hover:bg-red-200 active:bg-red-200' }
		},
		// shadow
		{
			variant: 'primary',
			kind: 'shadow',
			class: { base: 'shadow-lg shadow-blue-500/50' }
		},
		{
			variant: 'secondary',
			kind: 'shadow',
			class: {
				class: { base: 'shadow-lg shadow-neutral-500/50' }
			}
		},
		{
			variant: 'success',
			kind: 'shadow',
			class: {
				class: { base: 'shadow-lg shadow-green-500/50' }
			}
		},
		{
			variant: 'warning',
			kind: 'shadow',
			class: {
				class: { base: 'shadow-lg shadow-yellow-500/50' }
			}
		},
		{
			variant: 'danger',
			kind: 'shadow',
			class: {
				class: { base: 'shadow-lg shadow-red-500/50' }
			}
		},
		{
			href: true,
			disabled: true,
			class: { base: 'pointer-events-none' }
		},
		{
			disabled: true,
			class: { base: 'bg-gray-400 cursor-not-allowed' }
		}
	]
});

export type ButtonSlots = keyof ReturnType<typeof buttonVariant>;
