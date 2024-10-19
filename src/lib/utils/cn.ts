import { extendTailwindMerge } from 'tailwind-merge';
import { twMergeConfig } from './tailwind-variants.config';

export const cn = extendTailwindMerge(twMergeConfig);
