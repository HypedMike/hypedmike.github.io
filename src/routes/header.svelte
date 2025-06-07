<header>
    <section>
        <h1>
            <span class="stylized-title">Full Stack Developer</span>
            <br />
            <span style="font-size: larger;">
                MICHELE SALADINO
            </span>
        </h1>
        <p>
            Open Source Creator | AI Enthusiast
        </p>
    </section>
    <section>
        <img src="/logo.png" alt="Website Logo" />
        <p>Follow us on social media:</p>
        <ul>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
    </section>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        color: white;
        width: calc(100vw - 380px);
    }

    .stylized-title{
        margin-bottom: 5px;
        text-transform: uppercase;
        background: linear-gradient(to right, #8400ff, #2c02ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: inline-block;
    }

    section {
        flex: 1;
        margin: 0 10px;
        width: 100%;
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 2.5em;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: justify;
    }

    p {
        font-size: 1.2em;
    }

    nav ul {
        list-style-type: none;
        padding: 0;
    }

    nav ul li {
        display: inline;
        margin-right: 15px;
    }

    nav ul li a {
        color: #61dafb;
        text-decoration: none;
    }

    img {
        max-width: 100px;
        height: auto;
    }
</style>