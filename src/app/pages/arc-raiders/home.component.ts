import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-arc-raiders-home',
	template: `
		<div class="flex flex-col gap-10 pb-12">
			
			<!-- 1. The Hero Banner (Top Section) -->
			<section class="relative h-[28rem] w-full overflow-hidden rounded-2xl border border-[var(--c-border)] shadow-[var(--shadow-md)]">
				<img src="https://placehold.co/1200x600/1a1a1a/00FFFF?text=Cinematic+ARC+Machine+Background" alt="Hero Background" class="absolute inset-0 h-full w-full object-cover" />
				<!-- Dark Gradient Overlay -->
				<div class="absolute inset-0 bg-gradient-to-t from-[var(--c-bg-primary)] via-black/60 to-transparent"></div>
				
				<div class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
					<h1 class="text-4xl font-black tracking-widest text-white sm:text-6xl drop-shadow-md" style="text-shadow: 0 0 10px var(--c-arc-cyan);">
						ARC RAIDERS WIKI
					</h1>
					<p class="mt-4 text-lg font-medium text-gray-200 sm:text-xl drop-shadow">
						Resist. Scavenge. Survive. <span class="opacity-75 text-sm font-normal ml-2">(Currently tracking 452 articles)</span>
					</p>
					
					<!-- Search Bar -->
					<div class="mt-8 w-full max-w-2xl relative">
						<div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
							<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
						</div>
						<input 
							type="search" 
							placeholder="Search for weapons, maps, ARC variants..." 
							class="w-full rounded-full border-2 border-[var(--c-arc-cyan)] bg-black/50 py-4 pl-12 pr-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:bg-black/80 focus:outline-none focus:ring-4 focus:ring-[var(--c-arc-cyan)]/30"
						/>
					</div>
				</div>
			</section>

			<!-- 2. Quick Access Cards (Middle Section) -->
			<section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				@for (card of quickAccessCards; track card.title) {
					<a [href]="card.link" class="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-cyan)] hover:shadow-[var(--shadow-md)]">
						<div class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--c-arc-cyan)]/20 to-transparent transition-transform group-hover:scale-150"></div>
						<div class="relative z-10">
							<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--c-bg-primary)] text-[var(--c-arc-cyan)] shadow-inner">
								<span class="text-2xl" [innerHTML]="card.icon"></span>
							</div>
							<h3 class="text-lg font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors">{{ card.title }}</h3>
							<p class="mt-2 text-sm leading-relaxed text-[var(--c-text-muted)]">{{ card.description }}</p>
						</div>
					</a>
				}
			</section>

			<!-- Bottom Section: Main Content & Sidebar -->
			<section class="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
				
				<!-- 3. Main Content Column (Bottom Left) -->
				<div class="flex flex-col gap-8 lg:col-span-2">
					
					<!-- Section A: Welcome -->
					<article class="rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 sm:p-8 shadow-[var(--shadow-sm)]">
						<h2 class="text-2xl font-bold text-[var(--c-text-strong)] border-b border-[var(--c-border)] pb-4 mb-4">
							Welcome to the Resistance
						</h2>
						<p class="text-[var(--c-text)] leading-loose">
							Welcome to the community-driven wiki for ARC Raiders. Earth has been overrun by a ruthless mechanized threat known as ARC. As a Raider, you must leave the underground colony of Speranza, brave the surface to scavenge vital supplies, and extract before the machines—or rival players—take you down. Whether you drop solo or in a squad, knowledge is your best weapon.
						</p>
					</article>

					<!-- Section B: Latest Intelligence -->
					<article class="rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 sm:p-8 shadow-[var(--shadow-sm)]">
						<h2 class="text-2xl font-bold text-[var(--c-text-strong)] border-b border-[var(--c-border)] pb-4 mb-4 flex items-center gap-2">
							<svg class="w-6 h-6 text-[var(--c-arc-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
							Latest Intelligence
						</h2>
						<ul class="space-y-4 text-[var(--c-text)]">
							<li class="flex gap-3">
								<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--c-arc-green)]/20 text-[var(--c-arc-green)] text-xs font-bold">✓</span>
								<div><strong class="text-[var(--c-text-strong)]">Update 1.4 Live:</strong> New "Vaporizer" ARC variant added to Buried City.</div>
							</li>
							<li class="flex gap-3">
								<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--c-arc-yellow)]/20 text-[var(--c-arc-yellow)] text-xs font-bold">★</span>
								<div><strong class="text-[var(--c-text-strong)]">Current Event:</strong> <em class="text-[var(--c-arc-yellow)]">The Harvester's Return</em> – Increased Queen spawns in Dam Battlegrounds this weekend.</div>
							</li>
							<li class="flex gap-3">
								<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--c-arc-cyan)]/20 text-[var(--c-arc-cyan)] text-xs font-bold">⚙</span>
								<div><strong class="text-[var(--c-text-strong)]">Weapon Balance:</strong> Tempest Sniper Rifle ADS speed slightly reduced; Rattler SMG recoil buffed.</div>
							</li>
						</ul>
					</article>
				</div>

				<!-- 4. The Sidebar (Bottom Right) -->
				<aside class="flex flex-col gap-6">
					
					<!-- Widget 1: Surface Conditions -->
					<div class="overflow-hidden rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg-primary)] shadow-[var(--shadow-sm)]">
						<div class="bg-[var(--c-arc-red)]/10 border-b border-[var(--c-arc-red)]/20 p-4">
							<h3 class="text-sm font-bold uppercase tracking-wider text-[var(--c-arc-red)] flex items-center gap-2">
								<span class="relative flex h-3 w-3">
									<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--c-arc-red)] opacity-75"></span>
									<span class="relative inline-flex rounded-full h-3 w-3 bg-[var(--c-arc-red)]"></span>
								</span>
								Surface Conditions
							</h3>
						</div>
						<div class="p-5 space-y-4 text-sm">
							<div class="flex justify-between items-center border-b border-[var(--c-border)] pb-2">
								<span class="text-[var(--c-text-muted)] font-medium">⚠️ ALERT LEVEL:</span>
								<span class="font-bold text-[var(--c-arc-red)]">EXTREME</span>
							</div>
							<div class="border-b border-[var(--c-border)] pb-2">
								<span class="block text-[var(--c-text-muted)] font-medium mb-1">Active Zones:</span>
								<span class="text-[var(--c-text-strong)] font-medium">Dam Battlegrounds, Spaceport, Buried City</span>
							</div>
							<div class="border-b border-[var(--c-border)] pb-2">
								<span class="block text-[var(--c-text-muted)] font-medium mb-1">Featured Loot:</span>
								<span class="text-[var(--c-text-strong)]">High-yield Weapon Cases spotted in <em class="text-[var(--c-arc-cyan)]">The Blue Gate</em>.</span>
							</div>
							<div class="bg-[var(--c-bg-secondary)] rounded-lg p-3 italic text-[var(--c-text)]">
								<strong class="text-[var(--c-text-strong)] not-italic block mb-1">Daily Tip:</strong>
								"Smoke grenades disable ARC Snitch drone lasers. Use them to break line of sight."
							</div>
						</div>
					</div>

					<!-- Widget 2: Join the Raiders -->
					<div class="rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
						<h3 class="text-lg font-bold text-[var(--c-text-strong)] mb-4 border-b border-[var(--c-border)] pb-2">Join the Raiders</h3>
						
						<div class="space-y-3">
							<a href="#" class="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
								Join the Official Discord
							</a>
							<button class="flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--c-arc-cyan)] px-4 py-2.5 text-sm font-bold text-[var(--c-arc-cyan)] transition-colors hover:bg-[var(--c-arc-cyan)] hover:text-black">
								Help Expand the Wiki
							</button>
						</div>

						<div class="mt-5 pt-4 border-t border-[var(--c-border)]">
							<h4 class="text-xs font-bold uppercase tracking-wider text-[var(--c-text-muted)] mb-3">Top Contributors</h4>
							<ul class="space-y-2 text-sm text-[var(--c-text-strong)] font-medium">
								<li class="flex items-center gap-2"><span class="text-[var(--c-arc-yellow)]">🥇</span> User1</li>
								<li class="flex items-center gap-2"><span class="text-gray-400">🥈</span> User2</li>
								<li class="flex items-center gap-2"><span class="text-orange-400">🥉</span> User3</li>
							</ul>
						</div>
					</div>

				</aside>

			</section>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersHomeComponent {
	protected readonly quickAccessCards = [
		{
			title: 'Arsenal & Gear',
			description: 'Browse Weapons, Mods, Gadgets, and Consumables.',
			icon: '⚔️',
			link: '/arc-raiders/weapons'
		},
		{
			title: 'The ARC Threat',
			description: 'Learn enemy weaknesses, from basic Drones to Heavy Walkers.',
			icon: '👁️',
			link: '/arc-raiders/enemies'
		},
		{
			title: 'Rust Belt Maps',
			description: 'Explore extraction points, breach rooms, and keycard locations.',
			icon: '🗺️',
			link: '/arc-raiders/maps'
		},
		{
			title: 'Speranza Base',
			description: 'Traders, Quests, Blueprints, and the Safe Pocket.',
			icon: '⚙️',
			link: '/arc-raiders/guides'
		}
	];
}
