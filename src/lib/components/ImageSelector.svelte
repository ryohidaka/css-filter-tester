<script lang="ts">
	// Import selectedImage from the imageStore
	import { selectedImage } from '$store/imageStore';

	// Define a function to handle image change
	const handleImageChange = (event: Event) => {
		// Get the input element and the selected file
		const inputElement = event.target as HTMLInputElement;
		const file = inputElement.files?.[0];

		if (file) {
			// Create a FileReader to read the file
			const reader = new FileReader();
			reader.onload = () => {
				// Log the result to the console (for debugging)
				console.log(reader.result);

				// Set the image data to the selectedImage store
				selectedImage.set(reader.result as string);
			};
			// Read the file as a data URL
			reader.readAsDataURL(file);
		}
	};

	// Define a function to clear the selected image
	const clearSelectedImage = () => {
		selectedImage.set(null);
	};
</script>

<form>
	<!-- Input element for selecting an image file -->
	<input type="file" accept="image/*" on:change={handleImageChange} />

	{#if $selectedImage}
		<!-- Button to clear the selected image -->
		<button on:click={clearSelectedImage}>Clear</button>
	{/if}
</form>
