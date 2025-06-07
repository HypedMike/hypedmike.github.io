<script>
	import Header from "./header.svelte";
	import Projects from "./projects.svelte";
	import Tech from "./tech.svelte";

</script>

<div class="body" style="display: flex; flex-direction: column; padding: 20px; gap: 20px;">
    <Header />
    <Tech />
    <Projects />
</div>

<style scoped>
    .body {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        margin-left: 330px; /* Adjusted to account for the fixed navbar */
    }

    @media (max-width: 800px) {
        .body {
            margin-left: 0; /* Remove left margin on smaller screens */
        }
    }
</style>