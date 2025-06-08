<script lang="ts">
	import { onMount } from "svelte";

    const items = [
        {name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Svelte", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"},
        {name: "Next.js", logo: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"},
        {name: "Golang", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"},
        {name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"},
        {name: "Vue", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"},
        {name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg"},
        {name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"},
        {name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
        {name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"},
    ]
</script>

<section id="tech">
    <div class="tech-container" style={`width: ${200*items.length}px`}>
        {#each items as item, index}
            <div class="tech-card" style="animation-delay: {index % 20 * 2}s;">
                <img src="{item.logo}" alt="{item.name} Logo" class="tech-logo">
                <h2 class="tech-name">{item.name}</h2>
            </div>
        {/each}
    </div>
</section>

<style>

    #tech {
        width: calc(100vw - 410px);
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #282c34;
        position: relative;
    }

    .tech-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 150px;
        width: calc(100vw - 410px);
        overflow-x: scroll;
        gap: 30px;
        padding: 20px;
        background-color: #282c34;
        position: relative;
    }

    .tech-card {
        border-radius: 8px;
        padding: 20px;
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 200px;
        position: absolute;
        right: -200px;
        animation: scrollingAnimation 20s linear infinite;
    }

    @keyframes scrollingAnimation {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100vw); }
    }

    .tech-logo {
        width: 100px;
        height: auto;
    }

    .tech-name {
        margin-top: 10px;
        font-size: 1.2em;
        color: #ffffff;
    }

    @media (max-width: 768px) {
        #tech {
            display: none;
        }

        .tech-container {
            width: 80vw;
        }
        .tech-card {
            width: 100%;
            margin: 10px 0;
        }
        .tech-logo {
            height: 50px;
            width: auto;
        }

        .tech-name {
            display: none;
        }
    }
</style>