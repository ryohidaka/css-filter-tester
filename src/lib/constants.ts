// Import the 'Filter' type from the '$types' module.
import type { Filter } from '$types';

// This constant represents the default image URL used in the application.
export const DEFAULT_IMAGE = 'https://source.unsplash.com/9IBqihqhuHc';

// Define an enum for filter modes
export enum Mode {
	Blur = 'blur'
}

// Define an enum for filter value units
export enum Unit {
	Px = 'px',
	Percent = '%'
}

// Define a filter object with default values
export const FILTERS = [
	{
		mode: Mode.Blur,
		unit: Unit.Px,
		min: 0,
		max: 20
	}
] as const;

// The 'DEFAULT_IMAGE' constant is used as the default image URL in the application.
// The 'FILTERS' array contains filter configurations, with the first one being a 'blur' filter.
