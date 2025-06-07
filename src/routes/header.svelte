<header>
    <section>
        <h1>
            <span class="stylized-title">Full Stack Developer</span>
            <br />
            <span style="font-size: larger;">
                MICHELE SALADINO
            </span>
        </h1>
        <p style="max-width: 500px; text-align: center;">
            Web Developer | <span class="stylized-title reverse">AI</span> Enthusiast | Microservices Advocate | Mountain freak
        </p>
    </section>
    <section>
        <div class="logo-img">

        </div>
        <ul class="social-links">
            <li>
                <a href="https://twitter.com">
                    <img src="https://img.icons8.com/color/512/linkedin.png" alt="LinkedIn Logo" style="width: 24px; height: 24px; vertical-align: middle;"/>
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://facebook.com">
                    <img src="https://img.icons8.com/color/512/facebook.png" alt="Facebook Logo" style="width: 24px; height: 24px; vertical-align: middle;"/>
                    Facebook
                </a>
            </li>
            <li>
                <a href="https://instagram.com">
                    <img src="https://img.icons8.com/color/512/instagram-new.png" alt="Instagram Logo" style="width: 24px; height: 24px; vertical-align: middle;"/>
                    Instagram
                </a>
            </li>
        </ul>
    </section>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        color: white;
        width: calc(100vw - 380px);
        height: 100vh;
    }

    .stylized-title{
        text-transform: uppercase;
        background: linear-gradient(to right, #8400ff, #2c02ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: inline-block;
    }

    .reverse {
        background: linear-gradient(to left, #8400ff, #c521ac);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: inline-block;
    }

    section {
        flex: 1;
        margin: 0 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

    .logo-img {
        width: 400px;
        height: 400px;
        background-image: url("https://avatars.githubusercontent.com/u/83963270?v=4");
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    .social-links {
        list-style: none;
        padding: 0;
        gap: 10px;
    }

    .social-links li {
        display: inline;
    }
    .social-links a {
        text-decoration: none;
        color: white;
        font-size: 1.2em;
    }
    .social-links a:hover {
        color: #8400ff;
    }
</style>