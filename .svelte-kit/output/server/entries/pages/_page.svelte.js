import "clsx";
import { e as ensure_array_like, f as escape_html, h as attr_style, d as attr, i as stringify } from "../../chunks/index.js";
function Header($$payload) {
  $$payload.out += `<header class="svelte-14l8uw3"><section class="svelte-14l8uw3"><h1 class="svelte-14l8uw3"><span class="stylized-title svelte-14l8uw3">Full Stack Developer</span> <br/> <span style="font-size: larger;">MICHELE SALADINO</span></h1> <p style="max-width: 500px; text-align: center;" class="svelte-14l8uw3">Web Developer | <span class="stylized-title reverse svelte-14l8uw3">AI</span> Enthusiast | Microservices Advocate | Mountain freak</p></section> <section class="svelte-14l8uw3"><div class="logo-img svelte-14l8uw3"></div> <ul class="social-links svelte-14l8uw3"><li class="svelte-14l8uw3"><a href="https://twitter.com" class="svelte-14l8uw3"><img src="https://img.icons8.com/color/512/linkedin.png" alt="LinkedIn Logo" style="width: 24px; height: 24px; vertical-align: middle;"/> LinkedIn</a></li> <li class="svelte-14l8uw3"><a href="https://facebook.com" class="svelte-14l8uw3"><img src="https://img.icons8.com/color/512/facebook.png" alt="Facebook Logo" style="width: 24px; height: 24px; vertical-align: middle;"/> Facebook</a></li> <li class="svelte-14l8uw3"><a href="https://instagram.com" class="svelte-14l8uw3"><img src="https://img.icons8.com/color/512/instagram-new.png" alt="Instagram Logo" style="width: 24px; height: 24px; vertical-align: middle;"/> Instagram</a></li></ul></section></header>`;
}
function Projects($$payload) {
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
  const each_array = ensure_array_like(items);
  $$payload.out += `<section style="height: 100vh;" id="projects"><h1 class="stylized-title svelte-1hottq9">Projects</h1> <div class="projects-container svelte-1hottq9"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<div class="project-card svelte-1hottq9"><h2 class="title svelte-1hottq9">${escape_html(item.name)}</h2> <div class="img-container svelte-1hottq9"${attr_style(`background-image: url('${stringify(item.image)}');`)}></div> <p style="height: 100px;">${escape_html(item.description)}</p> <div><a${attr("href", item.github)} class="github-link svelte-1hottq9"><img src="https://www.freeiconspng.com/uploads/link-icon-png-14.png" alt="GitHub Logo" width="24" height="24" class="svelte-1hottq9"/></a> <a${attr("href", item.github)} class="github-link svelte-1hottq9"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" width="24" height="24" class="svelte-1hottq9"/></a></div></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
}
function Tech($$payload) {
  const items = [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      name: "Svelte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
    },
    {
      name: "Vue",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    },
    {
      name: "Angular",
      logo: "https://angular.io/assets/images/logos/angular/angular.svg"
    },
    {
      name: "Node.js",
      logo: "https://nodejs.org/static/images/logo.svg"
    },
    {
      name: "Python",
      logo: "https://www.python.org/community/logos/python-logo-master-v3-TM.png"
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      name: "TypeScript",
      logo: "https://www.typescriptlang.org/assets/images/icons/apple-touch-icon.png"
    },
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    {
      name: "Bootstrap",
      logo: "https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png"
    },
    {
      name: "Tailwind CSS",
      logo: "https://tailwindcss.com/_next/static/media/logo.2c3b8f0d.svg"
    }
  ];
  const each_array = ensure_array_like(items);
  $$payload.out += `<section id="tech"><div class="tech-container svelte-168cuol"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<div class="tech-card svelte-168cuol"><img${attr("src", item.logo)}${attr("alt", `${stringify(item.name)} Logo`)} class="tech-logo svelte-168cuol"/> <h2 class="tech-name svelte-168cuol">${escape_html(item.name)}</h2></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
}
function _page($$payload) {
  $$payload.out += `<div style="display: flex; flex-direction: column; padding: 20px; gap: 20px; margin-left: 330px;">`;
  Header($$payload);
  $$payload.out += `<!----> `;
  Tech($$payload);
  $$payload.out += `<!----> `;
  Projects($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
