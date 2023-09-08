<script>
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
	</tbody>
</table>
