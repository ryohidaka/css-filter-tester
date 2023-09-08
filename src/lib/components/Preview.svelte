<script lang="ts">
	// Import necessary constants, stores, and functions.
	import { DEFAULT_IMAGE_URL } from '$constants';
	import { selectedFilter } from '$store/filterStore';
	import { isDefaultImage, selectedImage } from '$store/imageStore';
	import { sliderValue } from '$store/sliderStore';
	import { getFilterString } from '../filter';

	// Declare the 'isFiltered' prop with a default value of 'false'.
	export let isFiltered = false;

	// Initialize the 'image' variable with the DEFAULT_IMAGE_URL.
	let image = DEFAULT_IMAGE_URL;

	// Initialize the 'filterStyle' variable to store the CSS filter string.
	let filterStyle = '';

	// Reactively update the 'image' variable and 'filterStyle' when 'selectedImage' or 'sliderValue' changes.
	$: {
		// Update the 'image' variable to the selected image, if available.
		if ($selectedImage) {
			image = $selectedImage;
			isDefaultImage.set(false);
		} else {
			image = DEFAULT_IMAGE_URL;
			isDefaultImage.set(true);
		}

		// Calculate the CSS filter string using the 'getFilterString' function.
		filterStyle = getFilterString($sliderValue, $selectedFilter);
	}
</script>

<!-- Container for displaying the image -->
<img src={image} width="500" alt="" style={isFiltered ? filterStyle : ''} />
