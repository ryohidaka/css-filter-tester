<script lang="ts">
	// Import the 'sliderValue' store from the '$store/sliderStore'.
	import { sliderValue } from '$store/sliderStore';

	// Initialize the 'value' variable with the current value from the 'sliderValue' store.
	let value = $sliderValue;

	// Define the minimum and maximum values for the slider.
	let min = 0; // Minimum value
	let max = 100; // Maximum value

	// Function to handle changes in the slider value.
	function handleChange(event: Event) {
		// Get the input element from the event target and parse its value.
		const input = event.target as HTMLInputElement;
		value = parseFloat(input.value);

		// Update the 'sliderValue' store with the new value.
		sliderValue.set(value);
	}
</script>

<!-- Container for the slider and labels -->
<div>
	<!-- Display the minimum value label -->
	<span>{min}</span>

	<!-- Create an input range slider that is bound to the 'value' variable with specified 'min' and 'max' values.
		 Call the 'handleChange' function on input changes. -->
	<input type="range" bind:value {min} {max} on:input={handleChange} />

	<!-- Display the maximum value label -->
	<span>{max}</span>
</div>
