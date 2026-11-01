<script lang="ts">
	import '../app.css';
	let { children }: { children?: import('svelte').Snippet } = $props();
</script>

<svelte:head>
	<title>Michele Saladino — Fullstack developer</title>
	<meta name="description" content="Michele Saladino, fullstack developer in Lucca, Italy. Vue, React, Go, Rust and AI." />
	<meta name="author" content="Michele Saladino" />
</svelte:head>

{@render children?.()}
