<script lang="ts">
	import type { Filter } from '$types';
	import { onMount } from 'svelte';

	// Store imports
	import { sliderValue } from '$store/sliderStore';
	import {
		SLIDER_DEFAULT_MAX,
		SLIDER_DEFAULT_MIN,
		SLIDER_DEFAULT_STEP,
		SLIDER_DEFAULT_UNIT
	} from '$constants/slider';

	export let filter: Filter | null = null;

	// Reactive variables
	let value = $sliderValue;
	let min = filter?.min || SLIDER_DEFAULT_MIN;
	let max = filter?.max || SLIDER_DEFAULT_MAX;
	let unit = filter?.unit || SLIDER_DEFAULT_UNIT;
	let step = filter?.step || SLIDER_DEFAULT_STEP;

	export let updateValue: (newValue: number) => void;

	function handleChange(event: Event) {
		const input = event.target as HTMLInputElement;
		const newValue = parseFloat(input.value);
		updateValue(newValue);
	}

	onMount(() => {
		// Set the initial value for the slider.
		value = filter?.default || (min + max) / 2;
		updateValue(value);
	});
</script>

<!-- Container for the slider and labels -->
<div>
	<!-- Display the minimum and maximum value labels, along with the unit if available. -->
	<span>{min}{unit}</span>

	<!-- Create an input range slider that is bound to the 'value' variable with specified 'min', 'max', and 'step' values.
	  Call the 'handleChange' function on input changes. -->
	<input type="range" bind:value {min} {max} {step} on:input={handleChange} />

	<!-- Display the maximum value label along with the unit if available. -->
	<span>{max}{unit}</span>
</div>
