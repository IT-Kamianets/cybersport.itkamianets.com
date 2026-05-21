import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WEAPON_MODS } from './mods.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-mod-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/mods" class="hover:text-[var(--c-arc-yellow)] transition-colors">Weapon Mods</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ mod()?.name || 'Not Found' }}</span>
			</nav>

			@if (mod(); as m) {
				<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
					
					<!-- Left Side: Main Content Column -->
					<div class="flex-1 space-y-10">
						
						<!-- Header -->
						<header>
							<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ m.name }}</h1>
							<p class="mt-2 text-lg text-[var(--c-arc-yellow)] font-medium uppercase tracking-widest">{{ m.slot }} Attachment</p>
						</header>

						<!-- 1. Overview -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
							<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ m.description }}</p>
						</section>

						<!-- 2. Compatible Weapons -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Compatible Weapons</h2>
							<p class="text-[var(--c-text-muted)] mb-4">This modification can be attached to the following firearms:</p>
							
							<div class="flex flex-wrap gap-3">
								@for (weaponId of m.compatibleWeapons; track weaponId) {
									<a [routerLink]="['/arc-raiders/weapons', weaponId]" 
									   class="flex items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] px-4 py-3 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-yellow)] hover:text-[var(--c-arc-yellow)] transition-colors">
										<svg class="w-5 h-5 text-[var(--c-arc-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
										<span class="font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)]">{{ weaponId }}</span>
									</a>
								}
							</div>
						</section>

					</div>

					<!-- Right Side: The Infobox (Sticky) -->
					<aside class="w-full lg:w-80 shrink-0">
						<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
							
							<div class="bg-[var(--c-bg-primary)] p-4 text-center border-b border-[var(--c-border)] flex items-center justify-center gap-3">
								<span class="text-2xl">{{ m.icon }}</span>
								<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)]">{{ m.name }}</h2>
							</div>
							
							<div class="bg-black/80 flex items-center justify-center p-8">
								<div class="text-7xl drop-shadow-[0_0_25px_rgba(255,255,0,0.4)] text-[var(--c-arc-yellow)]">
									{{ m.icon }}
								</div>
							</div>

							<div class="p-5 text-sm">
								<div class="flex justify-between border-b border-[var(--c-border)] pb-3 mb-3">
									<span class="font-semibold text-[var(--c-text-muted)]">Attachment Slot</span>
									<span class="font-bold text-[var(--c-text-strong)] uppercase">{{ m.slot }}</span>
								</div>

								<h3 class="font-bold text-[var(--c-text-muted)] uppercase tracking-wider mb-3 text-xs">Stat Modifiers</h3>
								<div class="space-y-3">
									@for (stat of m.statModifiers; track stat.stat) {
										<div class="flex justify-between items-center rounded bg-[var(--c-bg-primary)] p-2 border border-[var(--c-border)]">
											<span class="font-medium text-[var(--c-text-strong)]">{{ stat.stat }}</span>
											<span class="font-black" [class.text-green-400]="stat.type === 'buff'" [class.text-red-400]="stat.type === 'nerf'">
												{{ stat.value }}
											</span>
										</div>
									}
								</div>
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
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Mod Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The weapon attachment you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/mods" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-yellow)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Weapon Mods
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersModDetailComponent {
	private readonly route = inject(ActivatedRoute);

	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	protected readonly mod = computed(() => {
		const id = this.idParam();
		return WEAPON_MODS.find(m => m.id === id);
	});
}
