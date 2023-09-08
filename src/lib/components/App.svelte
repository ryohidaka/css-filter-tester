<!-- This is a Svelte component -->
<script lang="ts">
	import ImageSelector from './ImageSelector.svelte';
	import Preview from './Preview.svelte';
</script>

<h1>CSS Filter Test</h1>

<div id="controller">
	<!-- Image Selector -->
	<ImageSelector />
</div>

<!-- Preview -->
<table id="preview">
	<thead>
		<tr>
			<th>Original</th>
			<th>Filtered</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<!-- Original Image -->
			<td><Preview /></td>

			<!-- Filtered Image -->
			<td><Preview /></td>
		</tr>
	</tbody>
</table>

<!-- You can add inline CSS styles here to style the component -->
<style>
	/* Add CSS styles to customize the appearance of the component */
</style>
