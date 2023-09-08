<script lang="ts">
	// Import necessary constants and stores.
	import { FILTERS } from '$constants';
	import { selectedFilter } from '$store/filterStore';
	import type { Filter } from '$types';

	// Define a function to handle filter mode change.
	const handleModeChange = (filter: Filter) => {
		// Set the selected filter mode in the store.
		selectedFilter.set(filter);
	};
</script>

<div id="filters">
	{#each FILTERS as filter}
		<!-- Button to change the filter mode -->
		<button
			on:click={() => handleModeChange(filter)}
			disabled={$selectedFilter?.mode === filter.mode}>{filter.mode}</button
		>
	{/each}
</div>
