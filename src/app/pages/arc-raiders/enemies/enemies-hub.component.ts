import { ChangeDetectionStrategy, Component, computed, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@wawjs/ngx-translate';
import { ENEMIES } from './enemies.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-enemies-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-arc-red)] mb-4">{{ ts.translate('ENEMIES_HUB.TITLE')() }}</h1>
				<p class="text-lg text-[var(--c-text)]">
					{{ ts.translate('ENEMIES_HUB.SUBTITLE')() }}
				</p>
			</header>

			<!-- 1. The Interactive Filter Bar -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
				<div class="flex flex-wrap gap-x-8 gap-y-4">
					
					<!-- Threat Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">{{ ts.translate('ENEMIES_HUB.FILTER_THREAT')() }}</span>
						<div class="flex flex-wrap gap-2">
							@for (threat of threatLevels; track threat) {
								<button 
									(click)="selectedThreat.set(threat)"
									[class.bg-[var(--c-arc-red)]]="selectedThreat() === threat"
									[class.text-white]="selectedThreat() === threat"
									[class.bg-[var(--c-bg-primary)]]="selectedThreat() !== threat"
									[class.text-[var(--c-text-strong)]]="selectedThreat() !== threat"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-red)] hover:text-white">
									{{ ts.translate('COMMON.' + formatKey(threat))() || threat }}
								</button>
							}
						</div>
					</div>

					<!-- Mobility Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">{{ ts.translate('ENEMIES_HUB.FILTER_MOBILITY')() }}</span>
						<div class="flex flex-wrap gap-2">
							@for (mob of mobilities; track mob) {
								<button 
									(click)="selectedMobility.set(mob)"
									[class.bg-[var(--c-arc-red)]]="selectedMobility() === mob"
									[class.text-white]="selectedMobility() === mob"
									[class.bg-[var(--c-bg-primary)]]="selectedMobility() !== mob"
									[class.text-[var(--c-text-strong)]]="selectedMobility() !== mob"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-red)] hover:text-white">
									{{ ts.translate('COMMON.' + formatKey(mob))() || mob }}
								</button>
							}
						</div>
					</div>

					<!-- Damage Type Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">{{ ts.translate('ENEMIES_HUB.FILTER_DAMAGE')() }}</span>
						<div class="flex flex-wrap gap-2">
							@for (dmg of damageTypes; track dmg) {
								<button 
									(click)="selectedDamage.set(dmg)"
									[class.bg-[var(--c-arc-red)]]="selectedDamage() === dmg"
									[class.text-white]="selectedDamage() === dmg"
									[class.bg-[var(--c-bg-primary)]]="selectedDamage() !== dmg"
									[class.text-[var(--c-text-strong)]]="selectedDamage() !== dmg"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-red)] hover:text-white">
									{{ ts.translate('COMMON.' + formatKey(dmg))() || dmg }}
								</button>
							}
						</div>
					</div>
				</div>

				<div class="mt-6 border-t border-[var(--c-border)] pt-4 text-sm text-[var(--c-text-muted)]">
					{{ ts.translate('ENEMIES_HUB.SHOWING_COUNT')().replace('{{count}}', filteredEnemies().length.toString()) }}
				</div>
			</section>

			<!-- 2. The Enemy Grid -->
			<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				@for (enemy of filteredEnemies(); track enemy.id) {
					<a [routerLink]="['/arc-raiders/enemies', enemy.id]" class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-red)] hover:shadow-[var(--shadow-md)]">
						
						<!-- Image & Badge -->
						<div class="relative h-56 w-full overflow-hidden bg-black/50">
							<img [src]="enemy.image" [alt]="enemy.name" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
							
							<!-- Top Left Badge -->
							<div class="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm border border-white/10">
								<span>{{ enemy.icon }}</span> {{ ts.translate('COMMON.' + formatKey(enemy.threatLevel))() || enemy.threatLevel }}
							</div>

							<!-- Hover Overlay (Weakness & Drops) -->
							<div class="absolute inset-0 flex flex-col items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 p-6 text-center">
								<div class="mb-4">
									<span class="block text-xs uppercase tracking-wider text-[var(--c-text-muted)]">{{ ts.translate('ENEMIES_HUB.PRIMARY_WEAKNESS')() }}</span>
									<span class="text-lg font-bold text-[var(--c-arc-yellow)]">{{ enemy.weaknesses && enemy.weaknesses.length > 0 ? (enemy.weaknesses[0].split(':')[0] || ts.translate('ENEMIES_HUB.UNKNOWN')()) : ts.translate('ENEMIES_HUB.UNKNOWN')() }}</span>
								</div>
								<div>
									<span class="block text-xs uppercase tracking-wider text-[var(--c-text-muted)]">{{ ts.translate('ENEMIES_HUB.KEY_DROP')() }}</span>
									<span class="text-lg font-bold text-[var(--c-arc-cyan)]">{{ enemy.keyDropId || ts.translate('ENEMIES_HUB.NONE')() }}</span>
								</div>
							</div>
						</div>
						
						<!-- Bottom Banner -->
						<div class="border-t border-[var(--c-border)] bg-gradient-to-b from-[var(--c-bg-secondary)] to-[var(--c-bg-primary)] p-4 text-center">
							<h3 class="text-2xl font-black uppercase tracking-wide text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-red)] transition-colors">{{ enemy.name }}</h3>
						</div>
					</a>
				}
				@if (filteredEnemies().length === 0) {
					<div class="col-span-full py-12 text-center text-[var(--c-text-muted)]">
						{{ ts.translate('ENEMIES_HUB.NO_ENEMIES')() }}
					</div>
				}
			</section>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersEnemiesComponent {
	protected readonly ts = inject(TranslateService);

	protected readonly enemies = ENEMIES;

	// Filter Options
	protected readonly threatLevels = ['All', 'Fodder / Swarm', 'Standard', 'Heavy / Elite', 'World Boss'];
	protected readonly mobilities = ['All', 'Ground-based', 'Aerial', 'Turrets/Stationary'];
	protected readonly damageTypes = ['All', 'Ballistic', 'Explosive', 'Energy/Laser'];

	// Selected Filters
	protected readonly selectedThreat = signal<string>('All');
	protected readonly selectedMobility = signal<string>('All');
	protected readonly selectedDamage = signal<string>('All');

	// Derived Filtered List
	protected readonly filteredEnemies = computed(() => {
		return this.enemies.filter(e => {
			const threatMatch = this.selectedThreat() === 'All' || e.threatLevel === this.selectedThreat();
			const mobMatch = this.selectedMobility() === 'All' || e.mobility === this.selectedMobility();
			const dmgMatch = this.selectedDamage() === 'All' || e.damageType === this.selectedDamage();
			return threatMatch && mobMatch && dmgMatch;
		});
	});

	protected formatKey(str: string): string {
		return str.trim().toUpperCase().replace(/[^A-Z0-9]+/g, '_').replace(/^_+|_+$/g, '');
	}
}
