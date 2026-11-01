<script lang="ts">
	import { twosteps, profile } from '$lib/data';
	import TwoStepsPhones from './TwoStepsPhones.svelte';

	// Without a public email, testers reach out through LinkedIn.
	const testersHref = profile.email
		? `mailto:${profile.email}?subject=${encodeURIComponent('TwoSteps tester')}`
		: profile.linkedin;
	const testersLabel = profile.email ? 'Email me' : 'Message me on LinkedIn ↗';
</script>

<section id="twosteps" class="twosteps">
	<div class="head">
		<p class="eyebrow mono">03 — twosteps</p>
		<h2>{twosteps.name}: {twosteps.tagline}</h2>
	</div>

	<div class="grid">
		<div class="copy">
			{#each twosteps.text as para}<p class="lead muted">{para}</p>{/each}

			<h3 class="mono sub-h">Under the hood</h3>
			<ul class="tech">
				{#each twosteps.tech as t}
					<li class="card glass">
						<span class="mono ft">{t.title}</span>
						<span class="muted">{t.text}</span>
					</li>
				{/each}
			</ul>
			<div class="tags mono">{#each twosteps.stack as s}<span>{s}</span>{/each}</div>
		</div>

		<div class="visual"><TwoStepsPhones /></div>
	</div>

	<aside class="testers glass">
		<div class="tglow" aria-hidden="true"></div>
		<div class="rel">
			<p class="eyebrow mono">● {twosteps.testers.title}</p>
			<p class="ttext">{twosteps.testers.text}</p>
		</div>
		<a class="btn primary rel" href={testersHref}>{testersLabel}</a>
	</aside>
</section>

<style>
	.twosteps { display: flex; flex-direction: column; gap: 40px; border-top: 1px solid var(--line); padding: 72px 0; }
	.head { display: flex; flex-direction: column; gap: 12px; }
	.eyebrow { margin: 0; font-size: 13px; color: var(--accent); }
	h2 { margin: 0; font-size: 32px; line-height: 1.15; font-weight: 600; letter-spacing: -0.025em; max-width: 720px; }
	.grid { display: flex; flex-wrap: wrap; gap: 48px; align-items: center; }
	.copy { flex: 1 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 16px; }
	.visual { flex: 1 1 420px; min-width: 0; }
	.lead { margin: 0; font-size: 17px; line-height: 1.6; }
	.muted { color: var(--muted); }
	.mono { font-family: 'Geist Mono', monospace; }
	.sub-h { margin: 12px 0 0; font-size: 13px; font-weight: 400; color: var(--muted); }
	.tech { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr)); gap: 12px; }
	.card { padding: 18px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); box-shadow: inset 0 1px 0 rgba(255,255,255,0.05); display: flex; flex-direction: column; gap: 6px; font-size: 14px; line-height: 1.5; }
	.ft { font-size: 14px; font-weight: 500; }
	.tags { display: flex; flex-wrap: wrap; gap: 8px; font-size: 12px; color: var(--soft); }
	.tags span { padding: 4px 9px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); }
	.glass { -webkit-backdrop-filter: blur(16px) saturate(140%); backdrop-filter: blur(16px) saturate(140%); }

	.testers { position: relative; overflow: hidden; border-radius: 20px; border: 1px solid rgba(244,169,59,0.35); background: linear-gradient(180deg, rgba(244,169,59,0.09), rgba(255,255,255,0.02)); padding: clamp(24px, 4vw, 36px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px 32px; }
	.tglow { position: absolute; right: -120px; top: -160px; width: 420px; height: 320px; border-radius: 50%; background: radial-gradient(closest-side, #f4a93b, transparent); opacity: 0.14; filter: blur(30px); pointer-events: none; }
	.rel { position: relative; }
	.testers .eyebrow { color: #f6be68; }
	.ttext { margin: 8px 0 0; font-size: 17px; line-height: 1.55; color: var(--soft); max-width: 640px; }
	.btn { display: inline-flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 10px; font-size: 15px; font-weight: 500; }
	.primary { background: linear-gradient(180deg, #fff, #e4e4e7); color: #09090b; box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 24px -8px rgba(244,169,59,0.45); }
	.primary:hover { color: #09090b; filter: brightness(1.06); }
</style>
