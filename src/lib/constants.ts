// Import necessary types
import type { Filter } from '$types';

// Constants representing default values used in the application.
export const DEFAULT_IMAGE_URL = 'https://source.unsplash.com/9IBqihqhuHc';
export const APPLICATION_TITLE = 'CSS Filter Test';

// Define an enum for filter modes
export enum FilterMode {
	Blur = 'blur',
	Brightness = 'brightness',
	Contrast = 'contrast',
	Grayscale = 'grayscale',
	HueRotate = 'hue-rotate',
	Invert = 'invert',
	Opacity = 'opacity',
	Saturate = 'saturate'
}

// Define an enum for filter value units
export enum FilterUnit {
	Pixels = 'px',
	Percent = '%',
	Degrees = 'deg',
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
	},
	{
		mode: FilterMode.Brightness,
		unit: FilterUnit.None,
		min: 0,
		max: 2,
		step: FilterStep.Float
	},
	{
		mode: FilterMode.Contrast,
		unit: FilterUnit.None,
		min: 0,
		max: 2,
		step: FilterStep.Float
	},
	{
		mode: FilterMode.Grayscale,
		unit: FilterUnit.None,
		min: 0,
		max: 1,
		step: FilterStep.Float
	},
	{
		mode: FilterMode.HueRotate,
		unit: FilterUnit.Degrees,
		min: 0,
		max: 360
	},
	{
		mode: FilterMode.Invert,
		unit: FilterUnit.None,
		min: 0,
		max: 1,
		step: FilterStep.Float
	},
	{
		mode: FilterMode.Opacity,
		unit: FilterUnit.None,
		min: 0,
		max: 1,
		step: FilterStep.Float
	},
	{
		mode: FilterMode.Saturate,
		unit: FilterUnit.None,
		min: 0,
		max: 1,
		step: FilterStep.Float
	}
];

// Comments explaining the purpose of constants and enums
