<!-- This is a Svelte component -->
<script lang="ts">
	import Code from './Code.svelte';
	import ImageSelector from './ImageSelector.svelte';
	import PreviewTable from './PreviewTable.svelte';
	import Slider from './Slider.svelte';
</script>

<h1>CSS Filter Test</h1>

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
