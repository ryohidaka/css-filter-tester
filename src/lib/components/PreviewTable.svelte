<script>
	// Import the isDefaultImage value from the imageStore
	import { isDefaultImage } from '$store/imageStore';

	// Import the Copyright component
	import Copyright from './Copyright.svelte';

	// Import Preview component
	import Preview from './Preview.svelte';
</script>

<!-- Create a table for displaying original and filtered images -->
<table id="preview-table">
	<thead>
		<tr>
			<th>Original</th>
			<th>Filtered</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<!-- Original Image Preview -->
			<td><Preview /></td>

			<!-- Filtered Image Preview -->
			<td><Preview isFiltered /></td>
		</tr>

		{#if $isDefaultImage}
			<tr>
				<td colspan="2">
					<!-- Display the Copyright component if isDefaultImage is true -->
					<Copyright />
				</td>
			</tr>
		{/if}
	</tbody>
</table>
