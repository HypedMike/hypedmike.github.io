<script lang="ts">
    const items = [
        {
            name: "Le Vele",
            github: "https://levele.rf.gd/",
            description: "News and activity scharing for the community of the San Donato's Church",
            image: "https://images.pexels.com/photos/29213973/pexels-photo-29213973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            name: "Chiese nella Città",
            github: "https://chiese-della-citta-lucca.fly.dev/",
            description: "An evolution of the previous project, with a more modern design and additional features. Commissioned by the Diocesi of Lucca.",
            image: "https://chiese-della-citta-lucca.fly.dev/logo1.jpg"
        },
        {
            name: "Secret Santa",
            github: "#",
            description: "A web application for managing sailing trips, featuring a user-friendly interface and real-time weather updates.",
            image: "https://images.pexels.com/photos/247891/pexels-photo-247891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            name: "Classicum",
            github: "https://www.classicumeventi.com/",
            description: "Web app to manage the Classicum Organization's administration (guests, parties, lists...)",
            image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];
</script>

<section style="height: 100vh;" id="projects">
    <h1 class="stylized-title">Projects</h1>

    <div class="projects-container">
        {#each items as item}
            <div class="project-card">
                <h2 class="title">{item.name}</h2>
                <div class="img-container" style="background-image: url('{item.image}');">
                </div>
                <p style="height: 100px;">{item.description}</p>
                <div>
                    <a href={item.github} class="github-link">
                        <img src="https://www.freeiconspng.com/uploads/link-icon-png-14.png" alt="GitHub Logo" width="24" height="24">
                    </a>
                    <a href={item.github} class="github-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" width="24" height="24">
                    </a>
                </div>
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

    .projects-container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        padding: 20px;
    }

    .project-card {
        background-color: #282c34;
        border-radius: 8px;
        padding: 20px;
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 250px;
    }

    .img-container {
        width: 200px;
        height: 200px;
        background-image: url('https://images.pexels.com/photos/29213973/pexels-photo-29213973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
        background-size: cover;
        background-position: center;
        border-radius: 8px;
    }

    .github-link {
        display: inline-block;
        margin-top: 10px;
        width: 40px;
        height: 40px;
        color: #61dafb;
        text-decoration: none;
        background-color: white;
        border-radius: 50%;
    }

    .github-link img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
    }

    .projects-container .title {
        background: fixed linear-gradient(to right, #8400ff, #c521ac);
        font-size: 1.5em;
        margin: 10px 0;
        font-weight: bold;
        padding: 0% 10px;
        border-radius: 0% 0% 10px 10px;
        top: -30px;
        width: 100%;
        position: relative;
    }
</style>