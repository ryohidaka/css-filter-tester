<script lang="ts">
	import type { Filter } from '$types';
	import { getFilterString } from '../filter';
	import Code from './Code.svelte';
	import InnerLink from './InnerLink.svelte';
	import Preview from './Preview.svelte';
	import Slider from './Slider.svelte';

	export let filter: Filter;
	let filterString = '';
	let value = 0;

	// Computed property to generate the filter string
	$: {
		filterString = getFilterString(value, filter);
	}

	function updateValue(newValue: number) {
		value = newValue;
	}
</script>

<section id={filter.mode} class="card flex flex-col gap-3">
	<h3 class="text-3xl font-semibold whitespace-nowrap dark:text-white">
		<InnerLink mode={filter.mode} />
	</h3>

	<div id="controller" class="flex flex-col w-80 items-start">
		<!-- Slider -->
		<Slider {filter} {updateValue} />

		<!-- Code Block -->
		<Code {filterString} />
	</div>

	<!-- Preview -->
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
				<td align="center"><Preview /></td>

				<!-- Filtered Image Preview -->
				<td align="center"><Preview filterStyle={filterString} /></td>
			</tr>
		</tbody>
	</table>
</section>
