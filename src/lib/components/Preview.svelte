<!-- This is a Svelte component -->

<!-- Importing the DEFAULT_IMAGE constant from the '$constants' module. -->
<script lang="ts">
	import { DEFAULT_IMAGE } from '$constants';

	// Importing the 'selectedImage' store from the '$store/imageStore'.
	import { selectedImage } from '$store/imageStore';

	// Initialize the 'image' variable with the DEFAULT_IMAGE.
	let image = DEFAULT_IMAGE;

	// Reactively update the 'image' variable when 'selectedImage' changes.
	$: {
		// Update the 'image' variable to the selected image, if available.
		if ($selectedImage) {
			image = $selectedImage;
		}
	}
</script>

<!-- Container for displaying the image -->
<img src={image} width="500" alt="" />
