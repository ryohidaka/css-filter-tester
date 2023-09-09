<script lang="ts">
	import { selectedImage } from '$store/imageStore';
</script>

{#if !$selectedImage}
	<!-- Display the Copyright component if selectedImage is not available -->
	<section id="copyright">
		<p>
			<span>Photo by </span>
			<a
				href="https://unsplash.com/@greysonjoralemon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Greyson Joralemon</a
			>
			<span> on </span>
			<a
				href="https://unsplash.com/photos/9IBqihqhuHc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Unsplash</a
			>
		</p>
	</section>
{/if}
