<script>
	import { APPLICATION_TITLE, DESCRIPTION } from '$constants/config';
</script>

<header>
	<h1>{APPLICATION_TITLE}</h1>
</header>

<svelte:head>
	<title>{APPLICATION_TITLE}</title>
	<meta name="description" content={DESCRIPTION} />
</svelte:head>
