import "clsx";
import { e as ensure_array_like, d as attr, f as escape_html } from "../../chunks/index.js";
function Navbar($$payload) {
  const items = [
    { name: "Home", href: "#" },
    { name: "Tech", href: "#tech" },
    { name: "Projects", href: "#projects" }
  ];
  const each_array = ensure_array_like(items);
  $$payload.out += `<nav class="svelte-rihe47"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<a${attr("href", item.href)} class="nav-link svelte-rihe47">${escape_html(item.name)}</a>`;
  }
  $$payload.out += `<!--]--></nav>`;
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<main class="svelte-gw7526">`;
  Navbar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----></main>`;
}
export {
  _layout as default
};
