import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WEAPONS } from './weapons.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-weapons-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-text-strong)] text-[var(--c-arc-yellow)] mb-4">Weapons & Arsenal</h1>
				<p class="text-lg text-[var(--c-text)]">
					Browse the arsenal available to Raiders. Filter by class, rarity, or ammo type to find the perfect gear for your next extraction.
				</p>
			</header>

			<!-- 1. The Interactive Filter Bar -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
				<div class="flex flex-wrap gap-x-8 gap-y-4">
					
					<!-- Class Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Class</span>
						<div class="flex flex-wrap gap-2">
							@for (cls of classes; track cls) {
								<button 
									(click)="selectedClass.set(cls)"
									[class.bg-[var(--c-arc-yellow)]]="selectedClass() === cls"
									[class.text-black]="selectedClass() === cls"
									[class.bg-[var(--c-bg-primary)]]="selectedClass() !== cls"
									[class.text-[var(--c-text-strong)]]="selectedClass() !== cls"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-yellow)] hover:text-black">
									{{ cls }}
								</button>
							}
						</div>
					</div>

					<!-- Rarity Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Rarity</span>
						<div class="flex flex-wrap gap-2">
							@for (rarity of rarities; track rarity) {
								<button 
									(click)="selectedRarity.set(rarity)"
									[class.bg-[var(--c-arc-yellow)]]="selectedRarity() === rarity"
									[class.text-black]="selectedRarity() === rarity"
									[class.bg-[var(--c-bg-primary)]]="selectedRarity() !== rarity"
									[class.text-[var(--c-text-strong)]]="selectedRarity() !== rarity"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-yellow)] hover:text-black">
									{{ rarity }}
								</button>
							}
						</div>
					</div>

					<!-- Ammo Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Ammo Type</span>
						<div class="flex flex-wrap gap-2">
							@for (ammo of ammoTypes; track ammo) {
								<button 
									(click)="selectedAmmo.set(ammo)"
									[class.bg-[var(--c-arc-yellow)]]="selectedAmmo() === ammo"
									[class.text-black]="selectedAmmo() === ammo"
									[class.bg-[var(--c-bg-primary)]]="selectedAmmo() !== ammo"
									[class.text-[var(--c-text-strong)]]="selectedAmmo() !== ammo"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-yellow)] hover:text-black">
									{{ ammo }}
								</button>
							}
						</div>
					</div>
				</div>

				<!-- View Toggle -->
				<div class="mt-6 flex items-center justify-between border-t border-[var(--c-border)] pt-4">
					<span class="text-sm text-[var(--c-text-muted)]">Showing {{ filteredWeapons().length }} weapon(s)</span>
					<div class="flex items-center gap-2 rounded-lg bg-[var(--c-bg-primary)] p-1">
						<button 
							(click)="viewMode.set('grid')"
							[class.bg-[var(--c-bg-secondary)]]="viewMode() === 'grid'"
							[class.shadow-sm]="viewMode() === 'grid'"
							class="rounded-md px-3 py-1.5 text-sm font-medium text-[var(--c-text-strong)] transition-all">
							Grid View
						</button>
						<button 
							(click)="viewMode.set('table')"
							[class.bg-[var(--c-bg-secondary)]]="viewMode() === 'table'"
							[class.shadow-sm]="viewMode() === 'table'"
							class="rounded-md px-3 py-1.5 text-sm font-medium text-[var(--c-text-strong)] transition-all">
							Table View
						</button>
					</div>
				</div>
			</section>

			<!-- 2. The Weapon Grid -->
			@if (viewMode() === 'grid') {
				<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					@for (weapon of filteredWeapons(); track weapon.id) {
						<a [routerLink]="['/arc-raiders/weapons', weapon.id]" class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-yellow)] hover:shadow-[var(--shadow-md)]">
							
							<!-- Image & Badge -->
							<div class="relative h-48 w-full overflow-hidden bg-black/50">
								<img [src]="weapon.image" [alt]="weapon.name" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
								
								<!-- Top Left Badge -->
								<div class="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm border border-white/10">
									<span>{{ weapon.icon }}</span> {{ weapon.class }}
								</div>

								<!-- Hover Stats Overlay -->
								<div class="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
									<div class="flex gap-6 text-white">
										<div class="text-center">
											<span class="block text-2xl font-black text-[var(--c-arc-yellow)]">{{ weapon.baseDamage }}</span>
											<span class="text-xs uppercase tracking-wider text-gray-300">Damage</span>
										</div>
										<div class="text-center">
											<span class="block text-2xl font-black text-[var(--c-arc-yellow)]">{{ weapon.magSize.split(' ')[0] }}</span>
											<span class="text-xs uppercase tracking-wider text-gray-300">Mag Size</span>
										</div>
									</div>
								</div>
							</div>
							
							<!-- Bottom Banner -->
							<div class="border-t border-[var(--c-border)] bg-gradient-to-b from-[var(--c-bg-secondary)] to-[var(--c-bg-primary)] p-4">
								<h3 class="text-xl font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)] transition-colors">{{ weapon.name }}</h3>
								<div class="mt-1 flex items-center gap-2 text-xs text-[var(--c-text-muted)]">
									<span class="rounded bg-[var(--c-bg-primary)] px-2 py-0.5 border border-[var(--c-border)]">{{ weapon.rarity }}</span>
									<span class="rounded bg-[var(--c-bg-primary)] px-2 py-0.5 border border-[var(--c-border)]">{{ weapon.ammoType }}</span>
								</div>
							</div>
						</a>
					}
					@if (filteredWeapons().length === 0) {
						<div class="col-span-full py-12 text-center text-[var(--c-text-muted)]">
							No weapons match your selected filters.
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
									<th class="px-6 py-4 font-semibold">Weapon</th>
									<th class="px-6 py-4 font-semibold">Class</th>
									<th class="px-6 py-4 font-semibold">Ammo</th>
									<th class="px-6 py-4 font-semibold text-right">Base Dmg</th>
									<th class="px-6 py-4 font-semibold text-right">Mag Size</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-[var(--c-border)]">
								@for (weapon of filteredWeapons(); track weapon.id) {
									<tr class="hover:bg-[var(--c-bg-primary)]/50 transition-colors">
										<td class="px-6 py-4">
											<a [routerLink]="['/arc-raiders/weapons', weapon.id]" class="font-bold text-[var(--c-text-strong)] hover:text-[var(--c-arc-yellow)] flex items-center gap-3">
												<img [src]="weapon.image" class="h-8 w-12 object-cover rounded border border-[var(--c-border)]" alt="">
												{{ weapon.name }}
											</a>
										</td>
										<td class="px-6 py-4">{{ weapon.class }}</td>
										<td class="px-6 py-4">{{ weapon.ammoType }}</td>
										<td class="px-6 py-4 text-right font-mono font-medium">{{ weapon.baseDamage }}</td>
										<td class="px-6 py-4 text-right font-mono">{{ weapon.magSize }}</td>
									</tr>
								}
								@if (filteredWeapons().length === 0) {
									<tr>
										<td colspan="5" class="px-6 py-8 text-center text-[var(--c-text-muted)]">
											No weapons match your selected filters.
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
	protected readonly weapons = WEAPONS;

	// View Mode
	protected readonly viewMode = signal<'grid' | 'table'>('grid');

	// Filter Options
	protected readonly classes = ['All', 'Pistol', 'SMG', 'Assault Rifle', 'Shotgun', 'Sniper Rifle', 'Heavy'];
	protected readonly rarities = ['All', 'Standard', 'Legendary', 'Melee'];
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
}
