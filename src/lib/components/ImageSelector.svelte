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

<section id="image-selector" class="card">
	<h2 class="text-2xl font-semibold whitespace-nowrap">Select Image</h2>

	<form>
		<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"
			>Upload file</label
		>

		<!-- Input element for selecting an image file -->
		<input
			class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
			aria-describedby="file_input_help"
			id="file_input"
			type="file"
			accept="image/*"
			on:change={handleImageChange}
		/>

		{#if $selectedImage}
			<!-- Button to clear the selected image -->
			<button on:click={clearSelectedImage}>Clear</button>
		{/if}
	</form>
</section>
