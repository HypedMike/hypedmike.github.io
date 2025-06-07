<main>
    <Navbar />
    {@render children()}
</main>

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