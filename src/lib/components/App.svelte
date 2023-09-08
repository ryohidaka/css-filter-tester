<!-- This is a Svelte component -->
<script lang="ts">
	import { TITLE } from '$constants';
	import Code from './Code.svelte';
	import FilterSelector from './FilterSelector.svelte';
	import ImageSelector from './ImageSelector.svelte';
	import PreviewTable from './PreviewTable.svelte';
	import Slider from './Slider.svelte';
</script>

<svelte:head>
	<title>{TITLE}</title>
	<html lang="en" />
</svelte:head>

<h1>{TITLE}</h1>

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

<!-- You can add inline CSS styles here to style the component -->
<style>
	/* Add CSS styles to customize the appearance of the component */
</style>
