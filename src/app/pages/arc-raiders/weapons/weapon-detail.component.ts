import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WEAPONS } from './weapons.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-weapon-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/weapons" class="hover:text-[var(--c-arc-yellow)] transition-colors">Weapons</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ weapon()?.name || 'Not Found' }}</span>
			</nav>

			@if (weapon(); as w) {
				<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
					
					<!-- Left Side: Main Content Column -->
					<div class="flex-1 space-y-10">
						
						<!-- Header -->
						<header>
							<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ w.name }}</h1>
							<p class="mt-2 text-lg text-[var(--c-arc-yellow)] font-medium uppercase tracking-widest">{{ w.class }}</p>
						</header>

						<!-- 1. Overview -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
							<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ w.overview }}</p>
						</section>

						<!-- 2. Acquisition -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Acquisition / How to Get</h2>
							<ul class="space-y-3 text-[var(--c-text)]">
								<li class="flex gap-3">
									<strong class="text-[var(--c-text-strong)] min-w-[80px]">Looting:</strong> 
									<span>{{ w.acquisition.looting }}</span>
								</li>
								<li class="flex gap-3">
									<strong class="text-[var(--c-text-strong)] min-w-[80px]">Crafting:</strong> 
									<span>{{ w.acquisition.crafting }}</span>
								</li>
								<li class="flex gap-3">
									<strong class="text-[var(--c-text-strong)] min-w-[80px]">Trader:</strong> 
									<span>{{ w.acquisition.trader }}</span>
								</li>
							</ul>
						</section>

						<!-- 3. Compatible Weapon Mods -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Compatible Weapon Mods</h2>
							<div class="grid gap-4 sm:grid-cols-2">
								@for (mod of w.mods; track mod.category) {
									<div class="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4 shadow-[var(--shadow-sm)]">
										<h3 class="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--c-arc-yellow)]">{{ mod.category }}</h3>
										<p class="text-sm text-[var(--c-text)]">{{ mod.options }}</p>
									</div>
								}
							</div>
						</section>

						<!-- 4. Strategy & Synergies -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Strategy & Synergies</h2>
							<ul class="space-y-3 text-[var(--c-text)]">
								@for (strat of w.strategies; track strat) {
									<li class="flex items-start gap-3 rounded-lg bg-[var(--c-bg-primary)] p-4 border-l-4 border-[var(--c-arc-cyan)]">
										<span>{{ strat }}</span>
									</li>
								}
							</ul>
						</section>

						<!-- 5. Patch History -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Patch History</h2>
							<div class="relative pl-4 border-l-2 border-[var(--c-border)] space-y-6">
								@for (patch of w.patchHistory; track patch.version) {
									<div class="relative">
										<div class="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-[var(--c-bg-secondary)] border-2 border-[var(--c-arc-yellow)]"></div>
										<h3 class="font-bold text-[var(--c-text-strong)]">{{ patch.version }}</h3>
										<p class="mt-1 text-sm text-[var(--c-text)]">{{ patch.notes }}</p>
									</div>
								}
							</div>
						</section>

					</div>

					<!-- Right Side: The Infobox (Sticky) -->
					<aside class="w-full lg:w-80 shrink-0">
						<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
							
							<div class="bg-[var(--c-bg-primary)] p-4 text-center border-b border-[var(--c-border)]">
								<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)]">{{ w.name }}</h2>
							</div>
							
							<div class="bg-black/80">
								<img [src]="w.image" [alt]="w.name" class="w-full h-48 object-cover" />
							</div>

							<div class="p-5 text-sm">
								<dl class="space-y-3">
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Type</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.class }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Rarity</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.rarity }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Firing Mode</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.firingMode }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Ammo Type</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.ammoType }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Magazine Size</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.magSize }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Base Damage</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right text-[var(--c-arc-yellow)]">{{ w.baseDamage }} per shot</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Headshot Multiplier</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.headshotMultiplier }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Effective Range</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.effectiveRange }}</dd>
									</div>
									<div class="flex justify-between pt-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Blueprint Req.</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.blueprintRequired }}</dd>
									</div>
								</dl>
							</div>
						</div>
					</aside>

				</div>
			} @else {
				<!-- Not Found State -->
				<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-12 text-center shadow-[var(--shadow-sm)]">
					<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-bg-primary)] text-3xl">
						❓
					</div>
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Weapon Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The weapon you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/weapons" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-cyan)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Weapons Hub
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersWeaponDetailComponent {
	private readonly route = inject(ActivatedRoute);

	// Read the :id from the route URL
	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	// Find the matching weapon
	protected readonly weapon = computed(() => {
		const id = this.idParam();
		return WEAPONS.find(w => w.id === id);
	});
}
