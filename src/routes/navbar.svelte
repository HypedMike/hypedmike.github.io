<script lang="ts">
    const items = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];
</script>

<nav>
    {#each items as item}
        <a href="{item.href}" class="nav-link">
            {item.name}
        </a>
    {/each}
</nav>

<style>
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

    @media (max-width: 600px) {
        nav {
            flex-direction: column;
            align-items: center;
        }

        .nav-link {
            margin: 10px 0;
        }
    }

</style>