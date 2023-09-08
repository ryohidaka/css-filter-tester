import type { Filter } from '$types';

/**
 * Generate a CSS filter string based on the selected filter and value.
 * @param value - The numeric value for the filter.
 * @param selectedFilter - The selected filter configuration.
 * @returns A CSS filter string or an empty string if no filter is selected.
 */
export function getFilterString(value: number, selectedFilter: Filter | null) {
	// Extract the mode and unit from the selected filter or set them to undefined if no filter is selected.
	const mode = selectedFilter ? selectedFilter.mode : undefined;
	const unit = selectedFilter ? selectedFilter.unit : undefined;

	// If both mode and unit are undefined, return an empty string as no filter is applied.
	if (!mode && !unit) return '';

	// Construct and return the CSS filter string.
	return `filter: ${mode}(${value}${unit});`;
}
