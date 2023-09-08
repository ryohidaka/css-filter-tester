import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

// Define a writable Svelte store to hold the selected image.
export const selectedImage: Writable<string | null> = writable(null);

// The 'selectedImage' store allows you to track and update the selected image in your Svelte application.
// It is initialized with 'null' as the default value.
