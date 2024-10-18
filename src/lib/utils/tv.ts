import type { VariantProps } from 'tailwind-variants';
import { createTV } from 'tailwind-variants';
import { twMergeConfig } from './tailwind-variants.config';

export type { VariantProps };

export const tv = createTV({
	twMergeConfig: twMergeConfig
});
