<script lang="ts">
	// Import necessary constants and stores.
	import { capitalizeFirstLetter } from '../string';

	export let mode = '';

	// Define a function to handle smooth scrolling.
	function smoothScrollTo(targetId: string, event: Event) {
		event.preventDefault(); // Prevent the default link behavior.

		// Find the target element by its ID.
		const targetElement = document.getElementById(targetId);

		// If the target element exists, calculate the offset and scroll smoothly.
		if (targetElement) {
			const offset = targetElement.getBoundingClientRect().top;
			window.scrollBy({
				top: offset,
				behavior: 'smooth'
			});
		}
	}
</script>

<!-- Create a link that triggers the smooth scroll when clicked. -->
<a href="#{mode}" on:click={(event) => smoothScrollTo(mode, event)}>
	{capitalizeFirstLetter(mode)}
	<!-- Display the capitalized 'mode' value. -->
</a>
