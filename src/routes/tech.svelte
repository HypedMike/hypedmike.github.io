<script lang="ts">
    const items = [
        {name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Svelte", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"},
        {name: "Vue", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"},
        {name: "Angular", logo: "https://angular.io/assets/images/logos/angular/angular.svg"},
        {name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg"},
        {name: "Python", logo: "https://www.python.org/community/logos/python-logo-master-v3-TM.png"},
        {name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
        {name: "TypeScript", logo: "https://www.typescriptlang.org/assets/images/icons/apple-touch-icon.png"},
        {name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"},
        {name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"},
        {name: "Bootstrap", logo: "https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png"},
        {name: "Tailwind CSS", logo: "https://tailwindcss.com/_next/static/media/logo.2c3b8f0d.svg"},
    ]
</script>

<section>
    <div class="tech-container">
        {#each items as item}
            <div class="tech-card">
                <img src="{item.logo}" alt="{item.name} Logo" class="tech-logo">
                <h2 class="tech-name">{item.name}</h2>
            </div>
        {/each}
    </div>
</section>

<style>
    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 2.5em;
        color: #2c02ff;
        margin-bottom: 20px;
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
</style>