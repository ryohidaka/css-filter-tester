<script>
	import '../app.css';
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
