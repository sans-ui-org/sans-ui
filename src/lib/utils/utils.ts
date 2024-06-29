export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type ComponentSize = 'sm' | 'md' | 'lg';


/**
 * Concatenate the className string array into one string which separated by a white space.
 */
export function cx(classNameArr: string[]) {
	return classNameArr.join(' ');
}
