<script lang="ts">
	// Svelte imports
	import { onMount } from 'svelte';
  
	// Store imports
	import { selectedFilter } from '$store/filterStore';
	import { sliderValue } from '$store/sliderStore';
  
	// Initialize the 'value' variable with the current value from the 'sliderValue' store.
	let value = $sliderValue;
  
	let min = 0; // Minimum value
	let max = 100; // Maximum value
	let unit = '';
  
	// Initialize the 'filter' variable with the current selected filter, and 'unit' with its unit.
	let filter = $selectedFilter;
  
	// Reactively update 'min', 'max', and 'unit' based on the selected filter's values.
	$: {
		filter = $selectedFilter;
		min = filter?.min || min;
		max = filter?.max || max;
		unit = filter?.unit || unit;
	}
  
	onMount(() => {
	  // Set the initial value for the slider.
	  value = filter?.default || (min + max) / 2;
	  sliderValue.set(value);
	});
  
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
	<!-- Display the minimum and maximum value labels, along with the unit if available. -->
	<span>{min}{unit}</span>
  
	<!-- Create an input range slider that is bound to the 'value' variable with specified 'min' and 'max' values.
		Call the 'handleChange' function on input changes. -->
	<input type="range" bind:value {min} {max} on:input={handleChange} />
  
	<!-- Display the maximum value label along with the unit if available. -->
	<span>{max}{unit}</span>
  </div>
  