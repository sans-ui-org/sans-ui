import type { ClassValue } from 'tailwind-variants';

/**
 * @description Common type that we utilize to define the variant of a component.
 */
export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

/**
 * @description Common type that we utilize to define the size of a component.
 */
export type ComponentSize = 'sm' | 'md' | 'lg';

/**
 * @description Common type that we utilize to define the roundness of a component.
 */
export type ComponentRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

/**
 * This Typescript utility transform a list of slots into a list of {slot: classes}
 */
export type SlotsToClasses<S extends string> = {
	[key in S]?: ClassValue;
};
