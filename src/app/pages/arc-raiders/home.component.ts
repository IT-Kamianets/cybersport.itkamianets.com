import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-arc-raiders-home',
	template: `
		<div class="flex flex-col gap-10 pb-12">
			
			<!-- 1. The Hero Banner (Top Section) -->
			<section class="relative h-[28rem] w-full overflow-hidden rounded-2xl border border-[var(--c-border)] shadow-[var(--shadow-md)]">
				<img src="https://i.ytimg.com/vi/f0sBPoqe4Z0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD9DjN9EIglHRjEvl5pnQeBAPUcWA" alt="Hero Background" class="absolute inset-0 h-full w-full object-cover" />
				<!-- Dark Gradient Overlay -->
				<div class="absolute inset-0 bg-gradient-to-t from-[var(--c-bg-primary)] via-black/60 to-transparent"></div>
				
				<div class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
					<h1 class="text-4xl font-black tracking-widest text-white sm:text-6xl drop-shadow-md" style="text-shadow: 0 0 10px var(--c-arc-cyan);">
						{{ ts.translate('HOME.HERO_TITLE')() }}
					</h1>
					<p class="mt-4 text-lg font-medium text-gray-200 sm:text-xl drop-shadow">
						{{ ts.translate('HOME.HERO_SUBTITLE')() }}
					</p>
					

				</div>
			</section>

			<!-- 2. Quick Access Cards (Middle Section) -->
			<section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				@for (card of quickAccessCards; track card.id) {
					<a [href]="card.link" class="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-cyan)] hover:shadow-[var(--shadow-md)]">
						<div class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--c-arc-cyan)]/20 to-transparent transition-transform group-hover:scale-150"></div>
						<div class="relative z-10">
							<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--c-bg-primary)] text-[var(--c-arc-cyan)] shadow-inner">
								<span class="text-2xl" [innerHTML]="card.icon"></span>
							</div>
							<h3 class="text-lg font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors">{{ ts.translate('HOME.CARDS.' + card.id + '.TITLE')() }}</h3>
							<p class="mt-2 text-sm leading-relaxed text-[var(--c-text-muted)]">{{ ts.translate('HOME.CARDS.' + card.id + '.DESC')() }}</p>
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
							{{ ts.translate('HOME.WELCOME_TITLE')() }}
						</h2>
						<p class="text-[var(--c-text)] leading-loose">
							{{ ts.translate('HOME.WELCOME_DESC')() }}
						</p>
					</article>

					<!-- Section B: Latest Intelligence -->
					<article class="rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 sm:p-8 shadow-[var(--shadow-sm)]">
						<h2 class="text-2xl font-bold text-[var(--c-text-strong)] border-b border-[var(--c-border)] pb-4 mb-4 flex items-center gap-2">
							<svg class="w-6 h-6 text-[var(--c-arc-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
							{{ ts.translate('HOME.LATEST_INTEL_TITLE')() }}
						</h2>
						<ul class="space-y-4 text-[var(--c-text)]">
							<li class="flex gap-3">
								<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--c-arc-green)]/20 text-[var(--c-arc-green)] text-xs font-bold">✓</span>
								<div><strong class="text-[var(--c-text-strong)]">{{ ts.translate('HOME.INTEL_1_TITLE')() }}</strong> {{ ts.translate('HOME.INTEL_1_DESC')() }}</div>
							</li>
							<li class="flex gap-3">
								<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--c-arc-yellow)]/20 text-[var(--c-arc-yellow)] text-xs font-bold">★</span>
								<div><strong class="text-[var(--c-text-strong)]">{{ ts.translate('HOME.INTEL_2_TITLE')() }}</strong> {{ ts.translate('HOME.INTEL_2_DESC')() }}</div>
							</li>
							<li class="flex gap-3">
								<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--c-arc-cyan)]/20 text-[var(--c-arc-cyan)] text-xs font-bold">⚙</span>
								<div><strong class="text-[var(--c-text-strong)]">{{ ts.translate('HOME.INTEL_3_TITLE')() }}</strong> {{ ts.translate('HOME.INTEL_3_DESC')() }}</div>
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
								{{ ts.translate('HOME.SURFACE_CONDITIONS')() }}
							</h3>
						</div>
						<div class="p-5 space-y-4 text-sm">
							<div class="flex justify-between items-center border-b border-[var(--c-border)] pb-2">
								<span class="text-[var(--c-text-muted)] font-medium">{{ ts.translate('HOME.ALERT_LEVEL')() }}</span>
								<span class="font-bold text-[var(--c-arc-red)]">{{ ts.translate('HOME.EXTREME')() }}</span>
							</div>
							<div class="border-b border-[var(--c-border)] pb-2">
								<span class="block text-[var(--c-text-muted)] font-medium mb-1">{{ ts.translate('HOME.ACTIVE_ZONES')() }}</span>
								<span class="text-[var(--c-text-strong)] font-medium">{{ ts.translate('HOME.ZONES_LIST')() }}</span>
							</div>
							<div class="border-b border-[var(--c-border)] pb-2">
								<span class="block text-[var(--c-text-muted)] font-medium mb-1">{{ ts.translate('HOME.FEATURED_LOOT')() }}</span>
								<span class="text-[var(--c-text-strong)]" [innerHTML]="ts.translate('HOME.LOOT_DESC')()"></span>
							</div>
							<div class="bg-[var(--c-bg-secondary)] rounded-lg p-3 italic text-[var(--c-text)]">
								<strong class="text-[var(--c-text-strong)] not-italic block mb-1">{{ ts.translate('HOME.DAILY_TIP')() }}</strong>
								{{ ts.translate('HOME.TIP_DESC')() }}
							</div>
						</div>
					</div>

					<!-- Widget 2: Join the Raiders -->
					<div class="rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
						<h3 class="text-lg font-bold text-[var(--c-text-strong)] mb-4 border-b border-[var(--c-border)] pb-2">{{ ts.translate('HOME.JOIN_TITLE')() }}</h3>
						
						<div class="space-y-3">
							<a href="#" class="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
								{{ ts.translate('HOME.JOIN_DISCORD')() }}
							</a>
							<button class="flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--c-arc-cyan)] px-4 py-2.5 text-sm font-bold text-[var(--c-arc-cyan)] transition-colors hover:bg-[var(--c-arc-cyan)] hover:text-black">
								{{ ts.translate('HOME.HELP_WIKI')() }}
							</button>
						</div>


					</div>

				</aside>

			</section>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersHomeComponent {
	protected readonly ts = inject(TranslateService);

	protected readonly quickAccessCards = [
		{
			id: 'THREAT',
			icon: '👁️',
			link: '/arc-raiders/enemies'
		},
		{
			id: 'ARSENAL',
			icon: '⚔️',
			link: '/arc-raiders/weapons'
		},
		{
			id: 'MAPS',
			icon: '🗺️',
			link: '/arc-raiders/maps'
		},
		{
			id: 'LOOT',
			icon: '💎',
			link: '/arc-raiders/loot'
		},
		{
			id: 'WORKSHOP',
			icon: '🔧',
			link: '/arc-raiders/workshop'
		},
		{
			id: 'GUIDES',
			icon: '📚',
			link: '/arc-raiders/guides'
		}
	];
}
