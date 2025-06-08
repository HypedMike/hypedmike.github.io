<script lang="ts">
	import { onMount } from "svelte";
	import { fade, slide } from "svelte/transition";

    const items = [
        { name: "Home", href: "#" },
        { name: "Tech", href: "#tech" },
        { name: "Projects", href: "#projects" }
    ];

    let showNavbar = $state(true); // Toggle this to show/hide the navbar

    onMount(() => {
        if (window.innerWidth <= 800) {
            showNavbar = false; // Hide navbar on small screens
        }
    });
</script>

<div class="navbar-button">
    <button onclick={() => showNavbar = !showNavbar} class="toggle-button">
        <img src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png" alt="Menu Icon" style="width: 24px; height: 24px; vertical-align: middle;"/>
    </button>
</div>

{#if showNavbar}
    <nav transition:slide={{ duration: 300 }}>
        {#each items as item}
            <a href="{item.href}" class="nav-link" onclick="{() => showNavbar = false}">
                {item.name}
            </a>
        {/each}
    </nav>
{/if}

<style>

    .navbar-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
    }

    .toggle-button {
        background-color: #61dafb;
        color: #282c34;
        border: none;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        border-radius: 5px;
    }

    nav {
        display: flex;
        justify-content: center;
        padding: 10px;
        background-color: #282c34;
        height: 100vh;
        flex-direction: column;
        width: 300px;
        justify-content: flex-start;
        padding-top: 30px;
        gap: 20px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }

    .nav-link {
        color: #61dafb;
        text-decoration: none;
        margin: 0 15px;
        font-size: 1.2em;
    }

    .nav-link:hover {
        text-decoration: underline;
    }

    @media (max-width: 800px) {
        nav {
            position: fixed;
            left: 0;
            top: 0;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            width: 100vw;
        }

        .nav-link {
            margin: 10px 0;
        }
    }

</style>