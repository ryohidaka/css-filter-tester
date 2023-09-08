<!-- FilterDisplay.svelte -->

<script lang="ts">
	// Importing values from stores
	import { sliderValue } from '$store/sliderStore';
	import { selectedFilter } from '$store/filterStore';
	import { getFilterString } from '../filter';

	let filterString = '';

	// Computed property to generate the filter string
	$: {
		filterString = getFilterString($sliderValue, $selectedFilter);
	}
</script>

<div id="code">
	<pre>
		<code>
			<!-- Displaying the computed filter string -->
			{filterString}
		</code>
	</pre>
</div>
