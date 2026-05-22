import { ChangeDetectionStrategy, Component, computed, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@wawjs/ngx-translate';
import { WEAPONS } from './weapons.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-weapons-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-text-strong)] text-[var(--c-arc-yellow)] mb-4">{{ ts.translate('WEAPONS_HUB.TITLE')() }}</h1>
				<p class="text-lg text-[var(--c-text)]">
					{{ ts.translate('WEAPONS_HUB.SUBTITLE')() }}
				</p>
			</header>

			<!-- 1. The Interactive Filter Bar -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
				<div class="flex flex-wrap gap-x-8 gap-y-4">
					
					<!-- Class Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">{{ ts.translate('WEAPONS_HUB.FILTER_CLASS')() }}</span>
						<div class="flex flex-wrap gap-2">
							@for (cls of classes; track cls) {
								<button 
									(click)="selectedClass.set(cls)"
									[class.bg-[var(--c-arc-yellow)]]="selectedClass() === cls"
									[class.text-black]="selectedClass() === cls"
									[class.bg-[var(--c-bg-primary)]]="selectedClass() !== cls"
									[class.text-[var(--c-text-strong)]]="selectedClass() !== cls"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-yellow)] hover:text-black">
									{{ ts.translate('COMMON.' + formatKey(cls))() || cls }}
								</button>
							}
						</div>
					</div>

					<!-- Rarity Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">{{ ts.translate('WEAPONS_HUB.FILTER_RARITY')() }}</span>
						<div class="flex flex-wrap gap-2">
							@for (rarity of rarities; track rarity) {
								<button 
									(click)="selectedRarity.set(rarity)"
									[class.bg-[var(--c-arc-yellow)]]="selectedRarity() === rarity"
									[class.text-black]="selectedRarity() === rarity"
									[class.bg-[var(--c-bg-primary)]]="selectedRarity() !== rarity"
									[class.text-[var(--c-text-strong)]]="selectedRarity() !== rarity"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-yellow)] hover:text-black">
									{{ ts.translate('COMMON.' + formatKey(rarity))() || rarity }}
								</button>
							}
						</div>
					</div>

					<!-- Ammo Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">{{ ts.translate('WEAPONS_HUB.FILTER_AMMO')() }}</span>
						<div class="flex flex-wrap gap-2">
							@for (ammo of ammoTypes; track ammo) {
								<button 
									(click)="selectedAmmo.set(ammo)"
									[class.bg-[var(--c-arc-yellow)]]="selectedAmmo() === ammo"
									[class.text-black]="selectedAmmo() === ammo"
									[class.bg-[var(--c-bg-primary)]]="selectedAmmo() !== ammo"
									[class.text-[var(--c-text-strong)]]="selectedAmmo() !== ammo"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-yellow)] hover:text-black">
									{{ ts.translate('COMMON.' + formatKey(ammo))() || ammo }}
								</button>
							}
						</div>
					</div>
				</div>

				<!-- View Toggle -->
				<div class="mt-6 flex items-center justify-between border-t border-[var(--c-border)] pt-4">
					<span class="text-sm text-[var(--c-text-muted)]">{{ ts.translate('WEAPONS_HUB.SHOWING_COUNT')().replace('{{count}}', filteredWeapons().length.toString()) }}</span>
					<div class="flex items-center gap-2 rounded-lg bg-[var(--c-bg-primary)] p-1">
						<button 
							(click)="viewMode.set('grid')"
							[class.bg-[var(--c-bg-secondary)]]="viewMode() === 'grid'"
							[class.shadow-sm]="viewMode() === 'grid'"
							class="rounded-md px-3 py-1.5 text-sm font-medium text-[var(--c-text-strong)] transition-all">
							{{ ts.translate('WEAPONS_HUB.GRID_VIEW')() }}
						</button>
						<button 
							(click)="viewMode.set('table')"
							[class.bg-[var(--c-bg-secondary)]]="viewMode() === 'table'"
							[class.shadow-sm]="viewMode() === 'table'"
							class="rounded-md px-3 py-1.5 text-sm font-medium text-[var(--c-text-strong)] transition-all">
							{{ ts.translate('WEAPONS_HUB.TABLE_VIEW')() }}
						</button>
					</div>
				</div>
			</section>

			<!-- 2. The Weapon Grid -->
			@if (viewMode() === 'grid') {
				<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					@for (weapon of filteredWeapons(); track weapon.id) {
						<a [routerLink]="['/arc-raiders/weapons', weapon.id]"
						   [style.--rarity-color]="getRarityColor(weapon.rarity)"
						   class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--rarity-color)] hover:shadow-[var(--rarity-color)] hover:shadow-lg">
							
							<!-- Faded gradient for rarity -->
							<div class="absolute inset-0 z-0 bg-gradient-to-t from-[var(--rarity-color)]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

							<!-- Image & Badge -->
							<div class="relative z-10 h-48 w-full overflow-hidden bg-black/50 p-6 flex flex-col items-center justify-center"
							     style="background: radial-gradient(circle at center, var(--rarity-color) 0%, transparent 80%);">
								<div class="absolute inset-0 bg-black/80"></div>
								<div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
								<div class="absolute inset-0 bg-gradient-to-t from-[var(--rarity-color)]/30 to-transparent"></div>
								<img [src]="weapon.image" [alt]="weapon.name" class="relative z-20 max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100 drop-shadow-2xl" />
								
								<!-- Top Left Badge -->
								<div class="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm border"
								     style="border-color: var(--rarity-color)">
									<span>{{ weapon.icon }}</span> {{ ts.translate('COMMON.' + formatKey(weapon.class))() || weapon.class }}
								</div>

								<!-- Hover Stats Overlay -->
								<div class="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
									<div class="flex gap-6 text-white">
										<div class="text-center">
											<span class="block text-2xl font-black" style="color: var(--rarity-color)">{{ weapon.baseDamage || weapon.advancedStats?.damage }}</span>
											<span class="text-xs uppercase tracking-wider text-gray-300">{{ ts.translate('WEAPONS_HUB.LBL_DAMAGE')() }}</span>
										</div>
										<div class="text-center">
											<span class="block text-2xl font-black" style="color: var(--rarity-color)">{{ weapon.magSize.toString().split(' ')[0] }}</span>
											<span class="text-xs uppercase tracking-wider text-gray-300">{{ ts.translate('WEAPONS_HUB.LBL_MAG_SIZE')() }}</span>
										</div>
									</div>
								</div>
							</div>
							
							<!-- Bottom Banner -->
							<div class="relative z-10 border-t border-[var(--c-border)] bg-gradient-to-b from-[var(--c-bg-secondary)] to-[var(--c-bg-primary)] p-4">
								<h3 class="text-xl font-bold text-[var(--c-text-strong)] transition-colors group-hover:!text-[var(--rarity-color)]">{{ weapon.name }}</h3>
								<div class="mt-1 flex items-center gap-2 text-xs text-[var(--c-text-muted)]">
									<span class="rounded bg-[var(--c-bg-primary)] px-2 py-0.5 border border-[var(--c-border)] transition-colors group-hover:border-[var(--rarity-color)] group-hover:text-[var(--rarity-color)]">{{ ts.translate('COMMON.' + formatKey(weapon.rarity))() || weapon.rarity }}</span>
									<span class="rounded bg-[var(--c-bg-primary)] px-2 py-0.5 border border-[var(--c-border)]">{{ ts.translate('COMMON.' + formatKey(weapon.ammoType))() || weapon.ammoType }}</span>
								</div>
							</div>
						</a>
					}
					@if (filteredWeapons().length === 0) {
						<div class="col-span-full py-12 text-center text-[var(--c-text-muted)]">
							{{ ts.translate('WEAPONS_HUB.NO_WEAPONS')() }}
						</div>
					}
				</section>
			}

			<!-- 3. Standard Table View -->
			@if (viewMode() === 'table') {
				<div class="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)]">
					<div class="overflow-x-auto">
						<table class="w-full text-left text-sm text-[var(--c-text)]">
							<thead class="bg-[var(--c-bg-primary)] text-xs uppercase text-[var(--c-text-strong)] border-b border-[var(--c-border)]">
								<tr>
									<th class="px-6 py-4 font-semibold">{{ ts.translate('WEAPONS_HUB.TH_WEAPON')() }}</th>
									<th class="px-6 py-4 font-semibold">{{ ts.translate('WEAPONS_HUB.TH_CLASS')() }}</th>
									<th class="px-6 py-4 font-semibold">{{ ts.translate('WEAPONS_HUB.TH_AMMO')() }}</th>
									<th class="px-6 py-4 font-semibold text-right">{{ ts.translate('WEAPONS_HUB.TH_BASE_DMG')() }}</th>
									<th class="px-6 py-4 font-semibold text-right">{{ ts.translate('WEAPONS_HUB.TH_MAG_SIZE')() }}</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-[var(--c-border)]">
								@for (weapon of filteredWeapons(); track weapon.id) {
									<tr class="hover:bg-[var(--c-bg-primary)]/50 transition-colors group" [style.--rarity-color]="getRarityColor(weapon.rarity)">
										<td class="px-6 py-4">
											<a [routerLink]="['/arc-raiders/weapons', weapon.id]" class="font-bold text-[var(--c-text-strong)] group-hover:text-[var(--rarity-color)] flex items-center gap-3 transition-colors">
												<div class="relative flex h-10 w-16 items-center justify-center rounded border border-[var(--c-border)] bg-black/50 p-1 overflow-hidden group-hover:border-[var(--rarity-color)] transition-colors">
													<div class="absolute inset-0 bg-gradient-to-t from-[var(--rarity-color)]/20 to-transparent"></div>
													<img [src]="weapon.image" class="relative z-10 max-h-full max-w-full object-contain" alt="">
												</div>
												{{ weapon.name }}
											</a>
										</td>
										<td class="px-6 py-4">{{ ts.translate('COMMON.' + formatKey(weapon.class))() || weapon.class }}</td>
										<td class="px-6 py-4">{{ ts.translate('COMMON.' + formatKey(weapon.ammoType))() || weapon.ammoType }}</td>
										<td class="px-6 py-4 text-right font-mono font-medium">{{ weapon.baseDamage || weapon.advancedStats?.damage }}</td>
										<td class="px-6 py-4 text-right font-mono">{{ weapon.magSize }}</td>
									</tr>
								}
								@if (filteredWeapons().length === 0) {
									<tr>
										<td colspan="5" class="px-6 py-8 text-center text-[var(--c-text-muted)]">
											{{ ts.translate('WEAPONS_HUB.NO_WEAPONS')() }}
										</td>
									</tr>
								}
							</tbody>
						</table>
					</div>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersWeaponsComponent {
	protected readonly ts = inject(TranslateService);

	protected readonly weapons = WEAPONS;

	// View Mode
	protected readonly viewMode = signal<'grid' | 'table'>('grid');

	// Filter Options
	protected readonly classes = ['All', 'Pistol', 'Hand Cannon', 'SMG', 'Assault Rifle', 'Battle Rifle', 'LMG', 'Shotgun', 'Sniper Rifle', 'Heavy'];
	protected readonly rarities = ['All', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
	protected readonly ammoTypes = ['All', 'Light Ammo', 'Medium Ammo', 'Heavy Ammo', 'Energy', 'Special'];

	// Selected Filters
	protected readonly selectedClass = signal<string>('All');
	protected readonly selectedRarity = signal<string>('All');
	protected readonly selectedAmmo = signal<string>('All');

	// Derived Filtered List
	protected readonly filteredWeapons = computed(() => {
		return this.weapons.filter(w => {
			const classMatch = this.selectedClass() === 'All' || w.class === this.selectedClass();
			const rarityMatch = this.selectedRarity() === 'All' || w.rarity === this.selectedRarity();
			const ammoMatch = this.selectedAmmo() === 'All' || w.ammoType === this.selectedAmmo();
			return classMatch && rarityMatch && ammoMatch;
		});
	});

	protected getRarityColor(rarity: string): string {
		switch (rarity) {
			case 'Common': return '#8b8d94';
			case 'Uncommon': return '#10b981';
			case 'Rare': return '#3b82f6';
			case 'Epic': return '#a855f7';
			case 'Legendary': return '#f59e0b';
			default: return '#eceef5';
		}
	}

	protected formatKey(str: string): string {
		return str.trim().toUpperCase().replace(/[^A-Z0-9]+/g, '_').replace(/^_+|_+$/g, '');
	}
}
