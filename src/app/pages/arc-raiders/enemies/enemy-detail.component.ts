import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ENEMIES } from './enemies.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
								@for (beh of e.behavior; track beh.mode) {
									<li class="flex gap-3">
										<span class="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[var(--c-arc-yellow)]"></span>
										<div>
											<strong class="text-[var(--c-text-strong)]">{{ beh.mode }}:</strong> 
											{{ beh.description }}
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
								@for (weak of e.weakPoints; track weak.point) {
									<div class="rounded-lg border border-[var(--c-arc-red)]/30 bg-[var(--c-arc-red)]/5 p-4 shadow-[var(--shadow-sm)]">
										<h3 class="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--c-arc-red)]">{{ weak.point }}</h3>
										<p class="text-sm text-[var(--c-text)]">{{ weak.description }}</p>
									</div>
								}
							</div>
							
							<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 shadow-sm">
								<h3 class="font-bold text-[var(--c-text-strong)] mb-2 uppercase text-sm tracking-wider">Tactical Approach</h3>
								<p class="text-[var(--c-text)] leading-relaxed">{{ e.tactics }}</p>
							</div>
						</section>

						<!-- 4. Loot Drops -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Loot Drops</h2>
							<div class="grid gap-4 sm:grid-cols-3">
								<div class="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4 border-t-4 border-t-gray-400">
									<h3 class="text-xs font-bold uppercase text-gray-500 mb-2">Guaranteed</h3>
									<p class="text-sm text-[var(--c-text-strong)] font-medium">{{ e.lootDrops.guaranteed }}</p>
								</div>
								<div class="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4 border-t-4 border-t-green-500">
									<h3 class="text-xs font-bold uppercase text-green-500 mb-2">Common</h3>
									<p class="text-sm text-[var(--c-text-strong)] font-medium">{{ e.lootDrops.common }}</p>
								</div>
								<div class="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4 border-t-4 border-t-purple-500">
									<h3 class="text-xs font-bold uppercase text-purple-500 mb-2">Rare</h3>
									<p class="text-sm text-[var(--c-text-strong)] font-medium">{{ e.lootDrops.rare }}</p>
								</div>
							</div>
						</section>

						<!-- 5. Lore / Field Notes -->
						<section>
							<div class="rounded-lg bg-black/80 p-6 font-mono text-sm text-[var(--c-arc-cyan)] border border-[var(--c-arc-cyan)]/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
								<p class="mb-2 text-xs uppercase tracking-widest text-gray-500">>> DECRYPTED DATAPAD ENTRY</p>
								<p class="leading-loose">{{ e.lore }}</p>
							</div>
						</section>

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
										<dd class="font-medium text-[var(--c-text-strong)]">{{ e.armorType }}</dd>
									</div>
									<div class="flex flex-col border-b border-[var(--c-border)] pb-2 gap-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Primary Attack</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-[var(--c-arc-yellow)]">{{ e.primaryAttack }}</dd>
									</div>
									<div class="flex flex-col border-b border-[var(--c-border)] pb-2 gap-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Secondary Attack</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-[var(--c-arc-yellow)]">{{ e.secondaryAttack }}</dd>
									</div>
									<div class="flex flex-col pt-1 gap-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Spawns In</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-[var(--c-arc-cyan)]">{{ e.spawnsIn }}</dd>
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
}
