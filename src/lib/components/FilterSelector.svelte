<script lang="ts">
	// Import necessary constants and stores.
	import { FILTERS } from '$constants/filter';
	import { capitalizeFirstLetter } from '../string';
</script>

<ul id="filters" class="flex flex-wrap gap-1">
	{#each FILTERS as filter}
		<li
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		>
		</li>
	{/each}
</ul>
