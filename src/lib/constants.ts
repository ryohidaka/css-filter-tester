// Import necessary types
import type { Filter } from '$types';

// Constants representing default values used in the application.
export const DEFAULT_IMAGE_URL = 'https://source.unsplash.com/9IBqihqhuHc';
export const APPLICATION_TITLE = 'CSS Filter Test';

// Define an enum for filter modes
export enum FilterMode {
	Blur = 'blur'
}

// Define an enum for filter value units
export enum FilterUnit {
	Pixels = 'px',
	Percent = '%',
	None = ''
}

// Define an enum for step values
export enum FilterStep {
	Integer = 1,
	Float = 0.1
}

// Define filter configurations
export const FILTERS: Filter[] = [
	{
		mode: FilterMode.Blur,
		unit: FilterUnit.Pixels,
		min: 0,
		max: 20
	}
];

// Comments explaining the purpose of constants and enums
