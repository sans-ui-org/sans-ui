
export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export type ComponentSize = 'sm' | 'md' | 'lg';

export type ComponentColorType =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "indigo";

export type FontSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type FontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";
  export function getFontWeight(bold: FontWeight) {
	switch (bold) {
	  case "bold":
		return "font-bold";
	  case "thin":
		return "font-thin";
	  case "extralight":
		return "font-extralight";
	  case "light":
		return "font-light";
	  case "normal":
		return "font-normal";
	  case "medium":
		return "font-medium";
	  case "semibold":
		return "font-semibold";
	  case "extrabold":
		return "font-extrabold";
	  case "black":
		return "font-black";
	}
  }
  
  export function getFontSize(size: FontSize) {
	switch (size) {
	  case "xs":
		return "text-xs";
	  case "sm":
		return "text-sm";
	  case "md":
		return "text-md";
	  case "lg":
		return "text-lg";
	  case "xl":
		return "text-xl";
	  case "2xl":
		return "text-2xl";
	  case "3xl":
		return "text-3xl";
	  case "4xl":
		return "text-4xl";
	  case "5xl":
		return "text-5xl";
	  case "6xl":
		return "text-6xl";
	  case "7xl":
		return "text-7xl";
	  case "8xl":
		return "text-xl";
	  case "9xl":
		return "text-9xl";
	}
  }
  
  export function getTypeTextColor(type: ComponentColorType) {
	switch (type) {
	  case "primary":
		return "text-blue-500";
	  case "secondary":
		return "text-neutral-500";
	  case "success":
		return "text-green-500";
	  case "warning":
		return "text-yellow-500";
	  case "danger":
		return "text-red-500";
	  case "indigo":
		return "text-indigo-500";
	}
  }
  

/**
 * Concatenate the className string array into one string which separated by a white space.
 */
export function cx(classNameArr: string[]) {
	return classNameArr.join(' ');
}
