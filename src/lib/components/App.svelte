<!-- This is a Svelte component -->
<script lang="ts">
	import { APPLICATION_TITLE } from '$constants/config';
	import { selectedFilter } from '$store/filterStore';
	import { capitalizeFirstLetter } from '../string';
	import CanIUse from './CanIUse.svelte';
	import Code from './Code.svelte';
	import FilterSelector from './FilterSelector.svelte';
	import ImageSelector from './ImageSelector.svelte';
	import PreviewTable from './PreviewTable.svelte';
	import Slider from './Slider.svelte';

	// Initialize mode with an empty string
	let mode = '';

	// Compute the capitalized mode name from selectedFilter
	$: {
		mode = capitalizeFirstLetter($selectedFilter?.mode || '');
	}
</script>

<svelte:head>
	<title>{APPLICATION_TITLE}</title>
	<html lang="en" />
</svelte:head>

<h1>{APPLICATION_TITLE}</h1>

<!-- Display the capitalized mode name -->
<h2>{mode}</h2>

<!-- Filter Selector -->
<FilterSelector />

<div id="controller">
	<!-- Image Selector -->
	<ImageSelector />

	<!-- Slider -->
	<Slider />

	<!-- Code Block -->
	<Code />
</div>

<!-- Preview -->
<PreviewTable />

<!-- Can I Use -->
<CanIUse />

<!-- You can add inline CSS styles here to style the component -->
<style>
	/* Add CSS styles to customize the appearance of the component */
</style>
