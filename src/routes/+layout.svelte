<script>
	import '../app.css';
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<Header />
<main class="flex flex-col gap-6 p-3 max-w-screen-xl items-center mx-auto">
	<slot />
</main>
<Footer />
