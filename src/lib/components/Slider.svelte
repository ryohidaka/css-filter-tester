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

<div id="slider" class="flex flex-col items-start">
	<!-- Container for the slider and labels -->
	<label for="large-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
		>Intensity</label
	>

	<div class="flex gap-1 items-center w-80">
		<!-- Display the minimum and maximum value labels, along with the unit if available. -->
		<span class="dark:text-white">{min}{unit}</span>

		<input
			id="large-range"
			type="range"
			bind:value
			{min}
			{max}
			{step}
			on:input={handleChange}
			class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
		/>

		<!-- Display the maximum value label along with the unit if available. -->
		<span class="dark:text-white">{max}{unit}</span>
	</div>
</div>
