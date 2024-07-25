// eslint-disable-next-line no-restricted-imports
import { extendTailwindMerge } from 'tailwind-merge';
import { twMergeConfig } from '$lib/utils/tailwind-variants.config';

export const cn = extendTailwindMerge(twMergeConfig);
