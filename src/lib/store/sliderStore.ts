// Import the 'writable' function from the 'svelte/store' module.
import { writable } from 'svelte/store';

// Create a Svelte writable store named 'sliderValue' initialized with the default value of 0.
export const sliderValue = writable(0);

// This store is used to manage and share the value of a slider component in your Svelte application.
