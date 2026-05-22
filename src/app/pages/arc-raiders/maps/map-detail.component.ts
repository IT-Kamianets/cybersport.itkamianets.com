import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MAPS } from './maps.data';
import { resolveLootItem } from '../loot/loot.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-map-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/maps" class="hover:text-[var(--c-arc-green)] transition-colors">Maps</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ gameMap()?.name || 'Not Found' }}</span>
			</nav>

			@if (gameMap(); as m) {
				<div class="flex flex-col gap-10">
					
					<!-- Header -->
					<header>
						<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ m.name }}</h1>
						<p class="mt-2 text-lg text-[var(--c-arc-green)] font-medium uppercase tracking-widest">{{ m.environment }}</p>
					</header>

					<!-- The Map View (Top Section) -->
					<section class="w-full rounded-2xl border-4 border-[var(--c-border)] shadow-[var(--shadow-md)] overflow-hidden bg-black/50">
						<img [src]="m.mapImage" [alt]="m.name + ' Map'" class="w-full h-auto object-contain max-h-[70vh] mx-auto" />
					</section>

					<!-- Bottom Section: Main Content & Infobox -->
					<div class="flex flex-col lg:flex-row gap-10">
						
						<!-- Left Side: Main Content Column -->
						<div class="flex-1 space-y-10">
							
							<!-- Overview -->
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
								<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ m.overview }}</p>
							</section>

							<!-- Conditions Schedule -->
							@if (m.conditions && m.conditions.length > 0) {
								<section>
									<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)] flex items-center gap-2">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
										Conditions
									</h2>
									<div class="flex flex-wrap gap-2">
										@for (condition of m.conditions; track condition) {
											<span class="rounded border border-[var(--c-border)] bg-[var(--c-bg-secondary)] px-3 py-1 text-sm font-semibold text-[var(--c-text-strong)] shadow-sm">
												{{ condition }}
											</span>
										}
									</div>
								</section>
							}

							<!-- Puzzles -->
							@if (m.puzzles && m.puzzles.length > 0) {
								<section>
									<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-cyan)] flex items-center gap-2">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
										Puzzles
									</h2>
									<div class="space-y-4">
										@for (puzzle of m.puzzles; track puzzle.title) {
											<div class="rounded-lg border border-[var(--c-arc-cyan)]/30 bg-[var(--c-bg-primary)] p-5 shadow-[var(--shadow-sm)]">
												<h3 class="mb-3 text-lg font-bold text-[var(--c-arc-cyan)]">{{ puzzle.title }}</h3>
												<ol class="list-decimal pl-5 space-y-2 text-[var(--c-text)]">
													@for (step of puzzle.steps; track step) {
														<li>{{ step }}</li>
													}
												</ol>
												@if (puzzle.requiredGadgets && puzzle.requiredGadgets.length > 0) {
													<div class="mt-4 pt-3 border-t border-[var(--c-border)]">
														<span class="text-xs font-bold uppercase tracking-wider text-[var(--c-text-muted)] block mb-2">Required Gadgets</span>
														<div class="flex flex-wrap gap-2">
															@for (gadget of puzzle.requiredGadgets; track gadget) {
																<span class="rounded bg-[var(--c-bg-secondary)] border border-[var(--c-border)] px-2.5 py-1 text-xs font-semibold text-[var(--c-arc-yellow)]">{{ gadget }}</span>
															}
														</div>
													</div>
												}
											</div>
										}
									</div>
								</section>
							}

							<!-- Resource Locks -->
							@if (m.resourceLocks && m.resourceLocks.length > 0) {
								<section>
									<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-yellow)] flex items-center gap-2">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
										Resource Locks
									</h2>
									<div class="space-y-6">
										@for (lock of m.resourceLocks; track lock.title) {
											<div class="rounded-lg border border-[var(--c-arc-yellow)]/30 bg-[var(--c-bg-secondary)] overflow-hidden shadow-[var(--shadow-sm)]">
												<div class="bg-[var(--c-bg-primary)] p-4 border-b border-[var(--c-border)]">
													<h3 class="font-bold text-lg text-[var(--c-arc-yellow)]">{{ lock.title }}</h3>
													<p class="text-sm text-[var(--c-text-muted)] mt-1">{{ lock.description }}</p>
												</div>
												<div class="p-4 space-y-5">
													@for (req of lock.requiredItems; track req.category + req.quantity) {
														<div>
															<div class="text-xs font-bold uppercase tracking-wider text-[var(--c-text-muted)] mb-3">
																{{ req.category }} Item (Requires {{ req.quantity }})
															</div>
															<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
																@for (itemId of req.itemIds; track itemId) {
																	<a [routerLink]="['/arc-raiders/loot', itemId]" class="group flex items-center gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-3 shadow-sm transition-colors hover:border-[var(--c-arc-yellow)]">
																		<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-black/50 border border-[var(--c-border)] p-1 overflow-hidden group-hover:border-[var(--c-arc-yellow)] transition-colors">
																			<img [src]="resolveLootItem(itemId).image" [alt]="resolveLootItem(itemId).name" class="h-full w-full object-contain" />
																		</div>
																		<span class="text-sm font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)] transition-colors line-clamp-2 leading-tight">
																			{{ resolveLootItem(itemId).name }}
																		</span>
																	</a>
																}
															</div>
														</div>
													}
												</div>
											</div>
										}
									</div>
								</section>
							}

							<!-- Extractions -->
							@if (m.extractions && m.extractions.length > 0) {
								<section>
									<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-green)] flex items-center gap-2">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
										Extractions
									</h2>
									<div class="grid gap-4 sm:grid-cols-2">
										@for (ext of m.extractions; track ext.title) {
											<div class="rounded-lg border border-[var(--c-arc-green)]/30 bg-[var(--c-arc-green)]/5 p-4 shadow-[var(--shadow-sm)]">
												<h3 class="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--c-arc-green)]">{{ ext.title }}</h3>
												<p class="text-sm text-[var(--c-text)]">{{ ext.description }}</p>
											</div>
										}
									</div>
								</section>
							}

							<!-- Lore / Field Notes -->
							@if (m.lore) {
								<section>
									<div class="rounded-lg bg-black/80 p-6 font-mono text-sm text-[var(--c-arc-cyan)] border border-[var(--c-arc-cyan)]/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
										<p class="mb-2 text-xs uppercase tracking-widest text-gray-500">>> DECRYPTED DATAPAD ENTRY</p>
										<p class="leading-loose">{{ m.lore }}</p>
									</div>
								</section>
							}

							<!-- Patch History -->
							@if (m.patchHistory && m.patchHistory.length > 0) {
								<section>
									<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Patch History</h2>
									<div class="relative pl-4 border-l-2 border-[var(--c-border)] space-y-6">
										@for (patch of m.patchHistory; track patch.version) {
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
							<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
								
								<div class="bg-[var(--c-bg-primary)] p-4 text-center border-b border-[var(--c-border)]">
									<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)] uppercase">Map Intel</h2>
								</div>
								
								<div class="p-5 text-sm">
									<dl class="space-y-4">
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Size</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ m.size }}</dd>
										</div>
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Environment</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right text-[var(--c-arc-green)]">{{ m.environment }}</dd>
										</div>
										<div class="flex justify-between pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Max Squads</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ m.maxSquads }} ({{ m.maxSquads * 3 }} Raiders)</dd>
										</div>
									</dl>
								</div>
							</div>
						</aside>

					</div>
				</div>
			} @else {
				<!-- Not Found State -->
				<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-12 text-center shadow-[var(--shadow-sm)]">
					<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-bg-primary)] text-3xl">
						🗺️
					</div>
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Map Data Corrupted</h2>
					<p class="mt-2 text-[var(--c-text)]">The sector you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/maps" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-green)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Map Terminal
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersMapDetailComponent {
	private readonly route = inject(ActivatedRoute);

	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	protected readonly gameMap = computed(() => {
		const id = this.idParam();
		return MAPS.find(m => m.id === id);
	});

	protected readonly resolveLootItem = resolveLootItem;
}
