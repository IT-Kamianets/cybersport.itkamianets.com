import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PubgService } from './pubg.service';

@Component({
	selector: 'app-pubg-weapons',
	standalone: true,
	imports: [TranslateDirective],
	template: `
		<div class="py-12 lg:py-20 animate-in fade-in slide-in-from-right-8 duration-500 relative">
			<div class="mx-auto max-w-[var(--container)] px-4">
				<div class="max-w-4xl mb-12">
					<h2 class="text-4xl font-black uppercase tracking-tight text-[var(--c-text-strong)] sm:text-6xl mb-8 border-l-8 border-[var(--c-primary)] pl-6" translate>
						Armory
					</h2>
					<p class="text-xl text-[var(--c-text-muted)] leading-relaxed" translate>
						Master the diverse arsenal of BATTLEGROUNDS. From stealthy pistols to devastating sniper rifles.
					</p>
				</div>

				<!-- Filter Bar -->
				<div class="mb-12 flex items-center gap-4">
					<button
						(click)="filterOpen.set(!filterOpen())"
						[class]="'flex shrink-0 items-center gap-2 px-6 py-2.5 rounded-xl border-2 font-black uppercase tracking-widest text-xs transition-all duration-300 ' + (filterOpen() ? 'bg-[var(--c-bg-tertiary)] border-[var(--c-border)] text-[var(--c-text-strong)] shadow-inner' : 'bg-[var(--c-bg-secondary)] border-[var(--c-border)] text-[var(--c-text)] hover:border-[var(--c-primary)] hover:text-[var(--c-primary)] shadow-sm')"
					>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
						</svg>
						<span translate>Filter</span>
					</button>

					<div 
						[class]="'flex gap-3 overflow-x-auto overflow-y-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] scrollbar-hide py-1 ' + (filterOpen() ? 'max-w-full opacity-100' : 'max-w-0 opacity-0 pointer-events-none')"
					>
						<div class="flex gap-3 w-max px-1">
							@for (category of categories; track category) {
								<button
									(click)="selectedCategory.set(category)"
									[class]="'px-6 py-2.5 rounded-xl border-2 font-black uppercase tracking-widest text-xs transition-all duration-300 whitespace-nowrap ' + (selectedCategory() === category ? 'bg-[var(--c-primary)] border-[var(--c-primary)] text-white shadow-[0_5px_15px_rgba(255,77,0,0.3)]' : 'bg-[var(--c-bg-secondary)] border-[var(--c-border)] text-[var(--c-text-muted)] hover:border-[var(--c-primary)] hover:text-[var(--c-text-strong)]')"
								>
									<span translate>{{ category === 'All' ? 'All Weapons' : category }}</span>
								</button>
							}
						</div>
					</div>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					@for (weapon of filteredWeapons(); track weapon.name) {
						<div class="group relative bg-[var(--c-bg-secondary)] border-2 border-[var(--c-border)] rounded-[2.5rem] overflow-hidden hover:border-[var(--c-primary)] transition-all duration-300 shadow-xl">
							<!-- Weapon Image Holder -->
							<div class="relative h-48 bg-[#1a2a3a]/50 flex items-center justify-center p-8 overflow-hidden">
								<div class="absolute inset-0 bg-gradient-to-br from-[var(--c-primary)]/5 to-transparent"></div>
								<img [src]="weapon.image" [alt]="weapon.name" class="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
							</div>

							<!-- Weapon Details -->
							<div class="p-8">
								<div class="flex items-start justify-between mb-4">
									<div>
										<h3 class="text-2xl font-black uppercase tracking-tight text-[var(--c-text-strong)] group-hover:text-[var(--c-primary)] transition-colors">{{ weapon.name }}</h3>
										<span class="text-xs font-bold uppercase tracking-widest text-[var(--c-text-muted)]" translate>{{ weapon.type }}</span>
									</div>
									<div class="px-3 py-1 bg-[var(--c-bg-primary)] border border-[var(--c-border)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--c-primary)]">
										{{ weapon.ammo }}
									</div>
								</div>

								<!-- Stats Grid -->
								<div class="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[var(--c-border)]">
									<div>
										<div class="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] mb-1" translate>Damage</div>
										<div class="flex items-center gap-2">
											<div class="h-1.5 flex-1 bg-[var(--c-bg-primary)] rounded-full overflow-hidden">
												<div class="h-full bg-[var(--c-primary)]" [style.width.%]="weapon.damage"></div>
											</div>
											<span class="text-xs font-black text-[var(--c-text-strong)]">{{ weapon.damage }}</span>
										</div>
									</div>
									<div>
										<div class="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] mb-1" translate>Effective Range</div>
										<div class="text-xs font-black text-[var(--c-text-strong)]" translate>{{ weapon.range }}</div>
									</div>
								</div>

								<!-- Description -->
								<div class="mt-4 pt-4 border-t border-[var(--c-border)]">
									<p class="text-sm text-[var(--c-text)] leading-relaxed" translate>{{ weapon.description }}</p>
								</div>
							</div>
						</div>
					}
					
					@if (filteredWeapons().length === 0) {
						<div class="col-span-full py-12 text-center text-[var(--c-text-muted)]">
							<p class="text-xl font-bold uppercase tracking-widest">No weapons found in this category.</p>
						</div>
					}
				</div>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PubgWeaponsComponent {
	private readonly pubgService = inject(PubgService);
	private readonly weapons = this.pubgService.weapons;

	protected readonly categories = [
		'All',
		'Assault Rifle',
		'Sniper Rifle',
		'DMR',
		'SMG',
		'LMG',
		'Shotgun',
		'Pistol',
		'Misc',
		'Melee'
	];
	
	protected readonly selectedCategory = signal<string>('All');
	protected readonly filterOpen = signal<boolean>(false);
	
	protected readonly filteredWeapons = computed(() => {
		const category = this.selectedCategory();
		const allWeapons = this.weapons();
		
		if (category === 'All') {
			return allWeapons;
		}
		return allWeapons.filter(w => w.type === category);
	});
}
