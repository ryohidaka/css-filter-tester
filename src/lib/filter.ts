import type { Filter } from '$types';

/**
 * Generate a CSS filter string based on the filter and value.
 * @param value - The numeric value for the filter.
 * @param filter - The filter configuration.
 * @returns A CSS filter string or an empty string if no filter is specified.
 */
export function getFilterString(value: number, filter: Filter | null) {
	// Extract the mode and unit from the filter or set them to undefined if no filter is specified.
	const mode = filter?.mode;
	const unit = filter?.unit;

	// Check if both mode and unit are undefined, return an empty string as no filter is applied.
	if (!mode && !unit) {
		return '';
	}

	// Construct and return the CSS filter string.
	const filterString = `filter: ${mode}(${value}${unit});`;
	return filterString;
}
