import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ENEMIES } from './enemies.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { resolveLootItem } from '../loot/loot.data';

@Component({
	selector: 'app-enemy-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/enemies" class="hover:text-[var(--c-arc-red)] transition-colors">Enemies</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ enemy()?.name || 'Not Found' }}</span>
			</nav>

			@if (enemy(); as e) {
				<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
					
					<!-- Left Side: Main Content Column -->
					<div class="flex-1 space-y-10">
						
						<!-- Header -->
						<header>
							<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)] uppercase">{{ e.name }}</h1>
							<p class="mt-2 text-lg text-[var(--c-arc-red)] font-medium tracking-widest">{{ e.threatLevel }}</p>
						</header>

						<!-- 1. Overview -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)] flex items-center gap-2">
								Overview
							</h2>
							<p class="text-lg leading-relaxed text-[var(--c-text)] italic pl-4 border-l-4 border-[var(--c-border)]">{{ e.overview }}</p>
						</section>

						<!-- 2. Behavior & Attacks -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Behavior & Attacks</h2>
							<ul class="space-y-4 text-[var(--c-text)]">
								@for (beh of e.abilities; track beh) {
									<li class="flex gap-3">
										<span class="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[var(--c-arc-yellow)]"></span>
										<div>
											<strong class="text-[var(--c-text-strong)]">{{ beh.split(':')[0] }}:</strong> 
											{{ beh.split(':').slice(1).join(':') }}
										</div>
									</li>
								}
							</ul>
						</section>

						<!-- 3. Weak Points & Tactics (Crucial Section) -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-red)] flex items-center gap-2">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
								Weak Points & Tactics
							</h2>
							
							<div class="grid gap-4 sm:grid-cols-2 mb-6">
								@for (weak of e.weaknesses; track weak) {
									<div class="rounded-lg border border-[var(--c-arc-red)]/30 bg-[var(--c-arc-red)]/5 p-4 shadow-[var(--shadow-sm)]">
										<h3 class="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--c-arc-red)]">{{ weak.split(':')[0] }}</h3>
										<p class="text-sm text-[var(--c-text)]">{{ weak.split(':').slice(1).join(':') }}</p>
									</div>
								}
							</div>
							
							<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 shadow-sm">
								<h3 class="font-bold text-[var(--c-text-strong)] mb-2 uppercase text-sm tracking-wider">Tactical Approach</h3>
								<ul class="list-disc list-inside text-[var(--c-text)] leading-relaxed space-y-2">
									@for (tactic of e.tactics; track tactic) {
										<li>{{ tactic }}</li>
									}
								</ul>
							</div>
						</section>

						<!-- 4. Loot Drops -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Loot Drops</h2>
							<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								@for (lootId of e.lootDropIds; track lootId) {
									<a [routerLink]="['/arc-raiders/loot', lootId]" class="group flex items-center gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-3 shadow-sm transition-colors hover:border-[var(--c-arc-cyan)] hover:bg-[var(--c-arc-cyan)]/10">
										<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-black/50 border border-[var(--c-border)] p-1 overflow-hidden group-hover:border-[var(--c-arc-cyan)] transition-colors">
											<img [src]="getLootItem(lootId).image" [alt]="getLootItem(lootId).name" class="h-full w-full object-contain" />
										</div>
										<div class="flex flex-col">
											<span class="text-sm font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors">{{ getLootItem(lootId).name }}</span>
											<span class="text-xs text-[var(--c-text-muted)]">{{ getLootItem(lootId).rarity }} • {{ getLootItem(lootId).category }}</span>
										</div>
									</a>
								}
							</div>
						</section>

						<!-- 4.5. XP Rewards -->
						@if (e.xpGained && e.xpGained.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">XP Rewards</h2>
								<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
									@for (xpReward of e.xpGained; track xpReward.action) {
										<div class="flex items-center justify-between rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-3 shadow-[var(--shadow-sm)]">
											<span class="text-sm font-medium text-[var(--c-text-strong)]">{{ xpReward.action }}</span>
											<span class="rounded bg-black/40 px-2 py-0.5 text-xs font-bold text-[var(--c-arc-cyan)]">+{{ xpReward.xp }} XP</span>
										</div>
									}
								</div>
							</section>
						}

						<!-- 5. Lore / Field Notes -->
						<section>
							<div class="rounded-lg bg-black/80 p-6 font-mono text-sm text-[var(--c-arc-cyan)] border border-[var(--c-arc-cyan)]/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
								<p class="mb-2 text-xs uppercase tracking-widest text-gray-500">>> DECRYPTED DATAPAD ENTRY</p>
								<p class="leading-loose">{{ e.lore }}</p>
							</div>
						</section>

						<!-- 6. Achievement Tips -->
						@if (e.achievementTips && e.achievementTips.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-yellow)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
									Achievement Tips
								</h2>
								<ul class="space-y-3 text-[var(--c-text)]">
									@for (tip of e.achievementTips; track tip) {
										<li class="flex items-start gap-3 rounded-lg bg-[var(--c-bg-primary)] p-4 border-l-4 border-[var(--c-arc-yellow)] shadow-[var(--shadow-sm)]">
											<span>{{ tip }}</span>
										</li>
									}
								</ul>
							</section>
						}

						<!-- 7. Patch History -->
						@if (e.patchHistory && e.patchHistory.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Patch History</h2>
								<div class="relative pl-4 border-l-2 border-[var(--c-border)] space-y-6">
									@for (patch of e.patchHistory; track patch.version) {
										<div class="relative">
											<div class="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-[var(--c-bg-secondary)] border-2 border-[var(--c-arc-yellow)]"></div>
											<h3 class="font-bold text-[var(--c-text-strong)]">{{ patch.version }}</h3>
											<p class="mt-1 text-sm text-[var(--c-text)]">{{ patch.notes }}</p>
										</div>
									}
								</div>
							</section>
						}

					</div>

					<!-- Right Side: The Infobox (Sticky) -->
					<aside class="w-full lg:w-80 shrink-0">
						<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-arc-red)]/50 bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
							
							<div class="bg-[var(--c-arc-red)]/10 p-4 text-center border-b border-[var(--c-arc-red)]/30">
								<h2 class="text-xl font-black tracking-wider text-[var(--c-arc-red)] uppercase">{{ e.name }}</h2>
							</div>
							
							<div class="bg-black/90 p-2 relative">
								<div class="absolute top-4 left-4 z-10 text-2xl">{{ e.icon }}</div>
								<img [src]="e.image" [alt]="e.name" class="w-full h-56 object-contain mix-blend-screen" />
								<!-- Scanner line effect -->
								<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--c-arc-red)]/10 to-transparent w-full h-[10%] animate-[scan_3s_ease-in-out_infinite]"></div>
							</div>

							<div class="p-5 text-sm">
								<dl class="space-y-3">
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Threat Level</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ e.threatLevel }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Mobility</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ e.mobility }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Damage Type</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ e.damageType }}</dd>
									</div>
									<div class="flex flex-col border-b border-[var(--c-border)] pb-2 gap-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Armor Type</dt>
										<dd class="font-medium text-[var(--c-text-strong)]">{{ e.armor }}</dd>
									</div>
									@if (e.health) {
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Health</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ e.health }}</dd>
										</div>
									}
									<div class="flex flex-col border-b border-[var(--c-border)] pb-2 gap-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Primary Attack</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-[var(--c-arc-yellow)]">{{ e.primaryAttack }}</dd>
									</div>
									<div class="flex flex-col border-b border-[var(--c-border)] pb-2 gap-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Secondary Attack</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-[var(--c-arc-yellow)]">{{ e.secondaryAttack }}</dd>
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
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">ARC Machine Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The machine you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/enemies" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-red)] px-6 py-2 font-bold text-white hover:opacity-90 transition-opacity">
						Return to Bestiary
					</a>
				</div>
			}
		</div>
	`,
	styles: [`
		@keyframes scan {
			0% { top: 0%; }
			50% { top: 90%; }
			100% { top: 0%; }
		}
		.animate-[scan_3s_ease-in-out_infinite] {
			animation: scan 3s ease-in-out infinite;
		}
	`],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersEnemyDetailComponent {
	private readonly route = inject(ActivatedRoute);

	// Read the :id from the route URL
	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	// Find the matching enemy
	protected readonly enemy = computed(() => {
		const id = this.idParam();
		return ENEMIES.find(e => e.id === id);
	});

	protected getLootItem(id: string) {
		return resolveLootItem(id);
	}
}
