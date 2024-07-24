// eslint-disable-next-line no-restricted-imports
import { createTV } from 'tailwind-variants';
// eslint-disable-next-line no-restricted-imports
import type { VariantProps } from 'tailwind-variants';
import { twMergeConfig } from '$lib/utils/tailwind-merge';

export type { VariantProps };

export const tv = createTV({
	twMergeConfig
});
