import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

// Define a writable Svelte store to hold the selected image.
export const selectedImage: Writable<string | null> = writable(null);
