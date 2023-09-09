<script lang="ts">
	// Import necessary constants and components.
	import { APPLICATION_TITLE } from '$constants/config';
	import { FILTERS } from '$constants/filter';
	import CanIUse from './CanIUse.svelte';
	import Container from './Container.svelte';
	import Copyright from './Copyright.svelte';
	import FilterSelector from './FilterSelector.svelte';
	import ImageSelector from './ImageSelector.svelte';
</script>

<svelte:head>
	<title>{APPLICATION_TITLE}</title>
	<html lang="en" />
</svelte:head>

<h1>{APPLICATION_TITLE}</h1>

<!-- Filter Selector -->
<FilterSelector />

<!-- Image Selector -->
<ImageSelector />

{#each FILTERS as filter}
	<Container {filter} />
{/each}

<!-- Copyright -->
<Copyright />

<!-- Can I Use -->
<CanIUse />

<!-- You can add inline CSS styles here to style the component -->
<style>
	/* Add CSS styles to customize the appearance of the component */
</style>
