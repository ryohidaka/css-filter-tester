<script lang="ts">
	// Import necessary constants and stores.
	import { FILTERS } from '$constants/filter';
	import { capitalizeFirstLetter } from '../string';
</script>

<ul id="filters">
	{#each FILTERS as filter}
		<li>
			<a href="#{filter.mode}">{capitalizeFirstLetter(filter.mode)}</a>
		</li>
	{/each}
</ul>
