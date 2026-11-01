<!-- A faithful, static sketch of the TwoSteps UI: the home list and a contact screen.
     Colours and type follow the app's design tokens (lib/app/theme.dart). -->
<div class="phones" aria-label="Illustration of the TwoSteps app: the home screen with a list of people, and a contact screen with the Poke button">
	<!-- Home -->
	<div class="phone home" aria-hidden="true">
		<div class="screen">
			<div class="night">
				<div class="topbar"><span class="wordmark">TwoSteps</span><span class="gear"></span></div>
				<div class="greeting">Hi, Michele</div>
				<div class="sub">3 people, a few rooftops away</div>
				<svg class="roofs" viewBox="0 0 220 40" preserveAspectRatio="none"><path d="M0 40V22H70V40Z M80 40V12H150V40Z M160 40V26H220V40Z" fill="#363170" /><g fill="#F4A93B"><rect x="14" y="28" width="6" height="6" rx="1" /><rect x="96" y="20" width="6" height="6" rx="1" /><rect x="124" y="26" width="6" height="6" rx="1" /><rect x="186" y="31" width="6" height="5" rx="1" /></g></svg>
			</div>
			<div class="body">
				<div class="label">PEOPLE</div>
				<div class="card">
					<div class="row"><span class="av a1">M</span><span class="who"><b class="new">Marta</b><i>Poked you · now</i></span><span class="badge">1</span></div>
					<div class="row"><span class="av a2">L</span><span class="who"><b>Luca</b><i>You poked · 2 h <span class="tick">✓✓</span></i></span></div>
					<div class="row"><span class="av a3">G</span><span class="who"><b>Giulia</b><i>Sharing location · 1 h left</i></span></div>
				</div>
			</div>
			<div class="fab">Add someone</div>
		</div>
	</div>

	<!-- Contact -->
	<div class="phone contact" aria-hidden="true">
		<div class="screen">
			<div class="night tall">
				<div class="topbar"><span class="back">‹</span></div>
				<div class="name">Marta</div>
				<div class="sub">Paired · last poke 2 min ago</div>
				<svg class="roofs" viewBox="0 0 220 40" preserveAspectRatio="none"><path d="M0 40V26H60V40Z M72 40V14H140V40Z M150 40V24H220V40Z" fill="#363170" /></svg>
			</div>
			<div class="body">
				<div class="pokewrap">
					<div class="ring"><div class="poke">Poke</div></div>
					<div class="hint">One tap to say “I’m here”</div>
				</div>
				<div class="emojis"><span>😊</span><span>❤️</span><span>🍕</span></div>
				<div class="card activity">
					<div class="label">ACTIVITY</div>
					<div class="act"><span class="mark"></span>You poked Marta <em>2 min</em></div>
					<div class="act"><span class="mark l"></span>Marta poked you <em>1 h</em></div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.phones {
		--night: #25224f; --nightdeep: #141230; --paper: #fbf7f1; --card: #fff; --ink: #1f1d3d; --muted: #5c587a;
		--amber: #f4a93b; --cream: #f5f0e8; --lilac: #cfc8ee; --hair: #ece3d6; --delivered: #4b45b8;
		display: flex; justify-content: center; align-items: flex-start; gap: clamp(14px, 3vw, 28px);
		font-family: 'Figtree', system-ui, sans-serif;
	}
	.phone {
		flex: 0 1 230px; min-width: 0; aspect-ratio: 9 / 19; border-radius: 34px; padding: 7px;
		background: linear-gradient(160deg, #3a3a42, #17171b); border: 1px solid rgba(255, 255, 255, 0.14);
		box-shadow: 0 40px 60px -30px rgba(0, 0, 0, 0.8), 0 0 60px -20px rgba(139, 92, 246, 0.35);
	}
	.phone.contact { margin-top: 36px; }
	.screen { position: relative; height: 100%; border-radius: 28px; overflow: hidden; background: var(--paper); color: var(--ink); font-size: 12px; display: flex; flex-direction: column; }
	.night { background: var(--night); color: var(--cream); padding: 16px 14px 0; position: relative; flex: 0 0 auto; }
	.topbar { display: flex; justify-content: space-between; align-items: center; height: 20px; }
	.wordmark { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px; }
	.gear { width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--lilac); }
	.back { font-size: 22px; line-height: 1; color: var(--lilac); }
	.greeting, .name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; line-height: 1.1; margin-top: 8px; letter-spacing: -0.2px; }
	.name { font-size: 24px; }
	.sub { color: var(--lilac); font-size: 10px; margin-top: 3px; }
	.roofs { display: block; width: calc(100% + 28px); height: 34px; margin: 10px -14px 0; }
	.night.tall .roofs { height: 30px; }
	.body { padding: 12px 10px; display: flex; flex-direction: column; gap: 10px; min-height: 0; flex: 1; }
	.label { font-size: 8.5px; font-weight: 700; letter-spacing: 1px; color: var(--muted); padding: 0 4px 6px; }
	.card { background: var(--card); border: 1px solid var(--hair); border-radius: 14px; padding: 4px 8px; }
	.row { display: flex; align-items: center; gap: 8px; padding: 8px 2px; border-bottom: 1px solid var(--hair); }
	.row:last-child { border-bottom: 0; }
	.av { flex: 0 0 auto; width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; color: #1f1d3d; }
	.a1 { background: #dcd8f7; } .a2 { background: #fbd9b8; } .a3 { background: #cfe8dc; }
	.who { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
	.who b { font-weight: 600; font-size: 12px; } .who b.new { font-weight: 700; }
	.who i { font-style: normal; font-size: 9.5px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.tick { color: var(--delivered); }
	.badge { background: var(--amber); color: #1f1d3d; font-weight: 700; font-size: 10px; min-width: 16px; height: 16px; border-radius: 8px; display: grid; place-items: center; }
	.fab { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); background: var(--amber); color: #1f1d3d; font-weight: 700; font-size: 12px; padding: 9px 18px; border-radius: 16px; white-space: nowrap; box-shadow: 0 10px 18px -8px rgba(160, 90, 0, 0.7); }
	.pokewrap { display: flex; flex-direction: column; align-items: center; gap: 6px; padding-top: 4px; }
	.ring { width: 96px; height: 96px; border-radius: 50%; border: 4px solid #ede5d8; display: grid; place-items: center; }
	.poke { width: 76px; height: 76px; border-radius: 50%; background: var(--amber); color: #1f1d3d; display: grid; place-items: center; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; box-shadow: 0 12px 18px -10px rgba(194, 122, 18, 0.9); }
	.hint { font-size: 9.5px; color: var(--muted); }
	.emojis { display: flex; justify-content: center; gap: 8px; }
	.emojis span { width: 32px; height: 32px; border-radius: 10px; display: grid; place-items: center; background: #f3ece1; font-size: 15px; }
	.activity { padding: 8px 10px; }
	.activity .label { padding: 0 0 4px; }
	.act { display: flex; align-items: center; gap: 6px; font-size: 10px; padding: 4px 0; }
	.act em { margin-left: auto; font-style: normal; color: var(--muted); font-size: 9px; }
	.mark { width: 10px; height: 10px; border-radius: 3px; background: #fdebcf; flex: 0 0 auto; }
	.mark.l { background: #e6e3fa; }
	@media (max-width: 520px) {
		.phone { aspect-ratio: 9 / 21; }
		.phone.contact { margin-top: 20px; }
		.screen { font-size: 10px; }
	}
</style>
