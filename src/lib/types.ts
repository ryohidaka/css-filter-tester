import type { Mode, Step, Unit } from '$constants';

// Define the 'Filter' type, which represents filter configuration options.
export type Filter =
	| {
			mode: Mode; // The mode of the filter (e.g., 'blur').
			unit: Unit; // The unit for filter values ('px' or '%').
			min?: number; // Optional: Minimum allowed value.
			max?: number; // Optional: Maximum allowed value.
			default?: number; // Optional: Default value.
			step?: Step;
	  }
	| {
			mode: Mode; // The mode of the filter (e.g., 'blur').
			unit: '%'; // When the unit is '%', default values are specific.
			min?: 0; // Minimum allowed value for '%' unit.
			max?: 100; // Maximum allowed value for '%' unit.
			default?: 50; // Default value for '%' unit.
			step?: Step.Int;
	  };
