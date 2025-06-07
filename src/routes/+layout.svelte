<main>
    <Navbar />
    {@render children()}
</main>

<svelte:head>
    <title> MS </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <meta name="description" content="A personal portfolio showcasing my projects and skills.">
    <meta name="keywords" content="portfolio, projects, skills, web development, software engineering">
    <meta name="author" content="Michele Saladino">
</svelte:head>

<script lang="ts">
	import Navbar from "./navbar.svelte";

    let { children }: { children?: any } = $props();
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Share+Tech+Mono&display=swap');

    :global(body) {
        margin: 0;
        padding: 0px;
        font-family: "Share Tech Mono", monospace;
        font-weight: 400;
        font-style: normal;
        color: white;
        background-color: rgb(23, 23, 23);
    }

    main {
        display: inline-flex;
        
    }
</style>