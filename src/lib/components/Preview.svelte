<script lang="ts">
	// Import necessary constants, stores, and functions.
	import { DEFAULT_IMAGE_URL } from '$constants/config';
	import { selectedImage } from '$store/imageStore';

	export let filterStyle: string = '';

	// Initialize the 'image' variable with the DEFAULT_IMAGE_URL.
	let image = DEFAULT_IMAGE_URL;

	// Reactively update the 'image' variable when 'selectedImage' changes.
	$: {
		image = $selectedImage || DEFAULT_IMAGE_URL;
	}
</script>

<!-- Container for displaying the image -->
<img src={image} width="500" alt="" style={filterStyle} />
