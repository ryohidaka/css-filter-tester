// Import the 'FILTERS' constant from the '$constants' module.
import { FILTERS } from '$constants';

// Import the 'Filter' type from the '$types' module.
import type { Filter } from '$types';

// Import the 'writable' function and 'Writable' type from 'svelte/store'.
import { writable, type Writable } from 'svelte/store';

// Initialize the 'initialFilter' variable with the first filter from the 'FILTERS' constant.
const initialFilter: Filter = FILTERS[0];

// Create a Svelte writable store named 'selectedFilter' initialized with 'initialFilter'.
export const selectedFilter: Writable<Filter | null> = writable(initialFilter);

// The 'FILTERS' constant provides a list of available filter configurations.
// The 'selectedFilter' store is used to manage the currently selected filter in the application.
