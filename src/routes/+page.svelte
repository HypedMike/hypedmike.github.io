<script lang="ts">
	import { profile, focus, featured, more } from '$lib/data';
</script>

<div class="page">
	<div class="glow g1" aria-hidden="true"></div>
	<div class="glow g2" aria-hidden="true"></div>
	<div class="glow g3" aria-hidden="true"></div>

	<header class="glass nav">
		<nav aria-label="Primary">
			<a href="#top" class="logo mono">ms<span>_</span></a>
			<div class="links">
				<a href="#focus">Focus</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	</header>

	<main id="top">
		<section class="hero">
			<p class="pill glass mono"><span class="dot" aria-hidden="true"></span>Fullstack developer · {profile.location}</p>
			<h1>{profile.name[0]}<br />{profile.name[1]}</h1>
			<p class="tagline">{profile.tagline}</p>
			<p class="intro">{profile.intro}</p>
			<div class="actions">
				<a class="btn primary" href="#projects">See my work</a>
				<a class="btn ghost glass" href={profile.github}>GitHub ↗</a>
				<a class="btn ghost glass" href={profile.linkedin}>LinkedIn ↗</a>
			</div>
		</section>

		<section id="focus" class="split">
			<div class="head">
				<p class="eyebrow mono">01 — focus</p>
				<h2>What I care about</h2>
			</div>
			<ul class="focus-grid">
				{#each focus as f}
					<li class="card glass">
						<span class="mono ft">{f.title}</span>
						<span class="muted">{f.text}</span>
					</li>
				{/each}
			</ul>
		</section>

		<section id="projects" class="stack">
			<div class="head">
				<p class="eyebrow mono">02 — projects</p>
				<h2>Selected work</h2>
			</div>
			<div class="featured">
				{#each featured as p}
					<article class="card glass big">
						<div class="tags mono">
							{#each p.tags as t}<span>{t}</span>{/each}
						</div>
						<h3>{p.title}</h3>
						<p class="muted grow">{p.text}</p>
						<div class="plinks">
							{#each p.links as l}<a href={l.href}>{l.label} ↗</a>{/each}
						</div>
					</article>
				{/each}
			</div>

			<div class="more">
				<h3 class="mono more-h">More things I've built</h3>
				<div class="list glass">
					{#each more as m}
						<a class="row" href={m.href}>
							<span class="row-title">{m.title}</span>
							<span class="muted row-text">{m.text ?? ''}</span>
							{#if m.stack}<span class="mono muted small">{m.stack}</span>{/if}
						</a>
					{/each}
				</div>
			</div>
		</section>

		<section id="contact" class="contact-wrap">
			<div class="contact glass">
				<div class="cglow" aria-hidden="true"></div>
				<p class="eyebrow mono rel">03 — contact</p>
				<h2 class="rel">Have something worth building? Let's keep it clean.</h2>
				<div class="actions rel">
					{#if profile.email}
						<a class="btn primary" href="mailto:{profile.email}">{profile.email}</a>
					{/if}
					<a class="btn ghost" href={profile.github}>GitHub ↗</a>
					<a class="btn ghost" href={profile.linkedin}>LinkedIn ↗</a>
				</div>
			</div>
		</section>
	</main>

	<footer>
		<div class="mono">
			<span>© {new Date().getFullYear()} Michele Saladino</span>
			<span>{profile.location}</span>
		</div>
	</footer>
</div>

<style>
	.page { position: relative; overflow: hidden; min-height: 100vh; }
	.glow { position: absolute; border-radius: 50%; pointer-events: none; }
	.g1 { top: -260px; left: 50%; margin-left: -620px; width: 760px; height: 620px; background: radial-gradient(closest-side, var(--glow-a), transparent); opacity: 0.32; filter: blur(40px); }
	.g2 { top: -120px; left: 50%; margin-left: 40px; width: 640px; height: 520px; background: radial-gradient(closest-side, var(--glow-b), transparent); opacity: 0.22; filter: blur(40px); }
	.g3 { top: 1500px; left: 50%; margin-left: -200px; width: 900px; height: 700px; background: radial-gradient(closest-side, var(--glow-a), transparent); opacity: 0.12; filter: blur(60px); }
	.glass { -webkit-backdrop-filter: blur(16px) saturate(140%); backdrop-filter: blur(16px) saturate(140%); }

	.nav { position: sticky; top: 0; z-index: 10; background: rgba(9, 9, 11, 0.6); border-bottom: 1px solid var(--line); }
	.nav nav { max-width: 1120px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
	.logo { font-size: 15px; font-weight: 500; padding: 10px 0; flex-shrink: 0; }
	.logo span { color: var(--accent); }
	.links { display: flex; gap: 4px; font-size: 14px; min-width: 0; overflow-x: auto; white-space: nowrap; scrollbar-width: none; }
	.links::-webkit-scrollbar { display: none; }
	.links a { padding: 12px; color: var(--muted); }
	.links a:hover { color: var(--text); }
	@media (max-width: 480px) { .links a { padding: 12px 8px; } }

	main { position: relative; max-width: 1120px; margin: 0 auto; padding: 0 24px; }
	section { border-top: 1px solid var(--line); padding: 72px 0; }

	.hero { border-top: 0; padding: 128px 0 104px; display: flex; flex-direction: column; gap: 28px; max-width: 860px; }
	.pill { margin: 0; align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; padding: 7px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); font-size: 13px; color: var(--soft); }
	.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 10px var(--accent); }
	h1 { margin: 0; font-size: clamp(3.25rem, 10vw, 7.5rem); line-height: 0.95; font-weight: 600; letter-spacing: -0.045em; background: linear-gradient(180deg, #fff 25%, #a1a1aa 100%); -webkit-background-clip: text; background-clip: text; color: transparent; padding-bottom: 0.08em; }
	.tagline { margin: 0; font-size: clamp(1.375rem, 2.6vw, 1.875rem); line-height: 1.25; font-weight: 500; letter-spacing: -0.02em; color: var(--soft); }
	.intro { margin: 0; font-size: 19px; line-height: 1.6; color: var(--muted); max-width: 600px; }

	.actions { display: flex; flex-wrap: wrap; gap: 12px; padding-top: 8px; }
	.btn { display: inline-flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 10px; font-size: 15px; font-weight: 500; transition: background-color .2s, border-color .2s, filter .2s; }
	.primary { background: linear-gradient(180deg, #fff, #e4e4e7); color: #09090b; box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 24px -8px rgba(147,197,253,0.35); }
	.primary:hover { color: #09090b; filter: brightness(1.06); }
	.ghost { border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
	.ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); color: var(--text); }

	.split { display: flex; flex-wrap: wrap; gap: 48px; }
	.head { flex: 1 1 260px; display: flex; flex-direction: column; gap: 12px; }
	.eyebrow { margin: 0; font-size: 13px; color: var(--accent); }
	h2 { margin: 0; font-size: 32px; line-height: 1.15; font-weight: 600; letter-spacing: -0.025em; }
	.muted { color: var(--muted); }
	.small { font-size: 12px; }
	.mono { font-family: 'Geist Mono', monospace; }

	.focus-grid { flex: 999 1 560px; min-width: 0; list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr)); gap: 12px; }
	.card { padding: 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); box-shadow: inset 0 1px 0 rgba(255,255,255,0.05); display: flex; flex-direction: column; gap: 6px; font-size: 15px; line-height: 1.5; transition: border-color .2s, background-color .2s, transform .2s; }
	.card:hover { border-color: rgba(255,255,255,0.16); background-color: rgba(255,255,255,0.055); transform: translateY(-2px); }
	.ft { font-size: 15px; font-weight: 500; }

	.stack { display: flex; flex-direction: column; gap: 40px; }
	.featured { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr)); gap: 20px; }
	.big { border-radius: 18px; background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 40px -24px rgba(0,0,0,0.6); padding: 28px; gap: 16px; line-height: 1.6; }
	.big h3 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.3; }
	.big p { margin: 0; }
	.grow { flex-grow: 1; }
	.tags { display: flex; flex-wrap: wrap; gap: 8px; font-size: 12px; color: var(--soft); }
	.tags span { padding: 4px 9px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); }
	.plinks { display: flex; gap: 20px; font-size: 14px; font-weight: 500; }
	.plinks a { padding: 12px 0; }

	.more { display: flex; flex-direction: column; gap: 8px; padding-top: 24px; }
	.more-h { margin: 0 0 8px; font-size: 13px; font-weight: 400; color: var(--muted); }
	.list { border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; background: rgba(255,255,255,0.025); box-shadow: inset 0 1px 0 rgba(255,255,255,0.05); padding: 4px 24px; }
	.row { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 24px; padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
	.row:last-child { border-bottom: 0; }
	.row-title { flex: 0 0 220px; font-weight: 500; font-size: 16px; }
	.row-text { flex: 1 1 320px; font-size: 15px; }
	.row:hover .row-title { color: #93c5fd; }

	.exp { flex: 999 1 560px; min-width: 0; list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line); }
	.exp li { display: flex; flex-wrap: wrap; gap: 4px 24px; padding: 20px 0; border-bottom: 1px solid var(--line); }
	.period { flex: 0 0 140px; font-size: 13px; color: var(--muted); padding-top: 3px; }
	.exp-body { flex: 1 1 320px; display: flex; flex-direction: column; gap: 4px; font-size: 15px; line-height: 1.5; }
	.exp-title { font-size: 16px; font-weight: 500; color: var(--text); }

	.contact-wrap { padding: 72px 0 120px; }
	.contact { position: relative; overflow: hidden; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.1); padding: clamp(32px, 6vw, 64px); display: flex; flex-direction: column; gap: 24px; }
	.cglow { position: absolute; right: -160px; top: -200px; width: 520px; height: 420px; border-radius: 50%; background: radial-gradient(closest-side, var(--glow-b), transparent); opacity: 0.3; filter: blur(30px); pointer-events: none; }
	.rel { position: relative; }
	.contact h2 { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.06; letter-spacing: -0.035em; max-width: 760px; background: linear-gradient(180deg, #fff 30%, #a1a1aa 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }

	footer { position: relative; border-top: 1px solid var(--line); }
	footer div { max-width: 1120px; margin: 0 auto; padding: 24px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 12px; color: var(--muted); }
</style>
