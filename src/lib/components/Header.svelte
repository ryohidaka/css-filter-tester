<script>
	import { APPLICATION_TITLE, DESCRIPTION } from '$constants/config';
</script>

<header>
	<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
		<div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
			<h1 class="text-2xl font-semibold whitespace-nowrap">
				{APPLICATION_TITLE}
			</h1>
		</div>
	</nav>
</header>

<svelte:head>
	<title>{APPLICATION_TITLE}</title>
	<meta name="description" content={DESCRIPTION} />
</svelte:head>
