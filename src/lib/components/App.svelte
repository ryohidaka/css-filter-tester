<script lang="ts">
	// Import necessary constants and components.
	import { FILTERS } from '$constants/filter';
	import CanIUse from './CanIUse.svelte';
	import Container from './Container.svelte';
	import Copyright from './Copyright.svelte';
	import FilterSelector from './FilterSelector.svelte';
	import ImageSelector from './ImageSelector.svelte';
</script>

<!-- Filter Selector -->
<FilterSelector />

<!-- Image Selector -->
<ImageSelector />

<!-- Filters -->
<section id="filters" class="flex flex-col gap-6 w-full">
	{#each FILTERS as filter}
		<Container {filter} />
	{/each}

	<!-- Copyright -->
	<Copyright />
</section>

<!-- Can I Use -->
<CanIUse />

<!-- You can add inline CSS styles here to style the component -->
<style>
	/* Add CSS styles to customize the appearance of the component */
</style>
