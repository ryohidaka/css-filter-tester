<script lang="ts">
	// Import statements
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	// Variable for filtering
	export let filterString = '';

	// Store the highlight.js configuration
	storeHighlightJs.set(hljs);
</script>

<div id="code" data-theme="skeleton" class="w-full py-3">
	<!-- Display the computed filter string -->
	<CodeBlock language="css" code={filterString} />
</div>
