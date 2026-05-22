import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EQUIPMENT, PlayerEquipment } from './equipment.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-equipment-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			<header class="mb-10 text-center">
				<h1 class="text-5xl font-black tracking-widest text-[var(--c-text-strong)] drop-shadow-md">PLAYER EQUIPMENT</h1>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-[var(--c-text)]">
					Armor up and expand your loadout. Shields protect you from the ARC threat, while Augments allow you to carry more loot out of the Rust Belt.
				</p>
			</header>

			<!-- Interactive Filter Bar -->
			<div class="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg bg-[var(--c-bg-secondary)] p-4 border border-[var(--c-border)] sm:flex-row shadow-[var(--shadow-sm)]">
				<div class="flex flex-wrap items-center gap-4">
					<span class="text-sm font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Type:</span>
					<button 
						(click)="activeType.set('All')" 
						class="rounded-full px-4 py-1 text-sm font-bold transition-all"
						[class.bg-[var(--c-arc-cyan)]]="activeType() === 'All'"
						[class.text-black]="activeType() === 'All'"
						[class.text-[var(--c-text-muted)]]="activeType() !== 'All'"
						[class.hover:bg-gray-800]="activeType() !== 'All'">All</button>
					<button 
						(click)="activeType.set('Shield')" 
						class="rounded-full px-4 py-1 text-sm font-bold transition-all"
						[class.bg-[var(--c-arc-cyan)]]="activeType() === 'Shield'"
						[class.text-black]="activeType() === 'Shield'"
						[class.text-[var(--c-text-muted)]]="activeType() !== 'Shield'"
						[class.hover:bg-gray-800]="activeType() !== 'Shield'">Shields</button>
					<button 
						(click)="activeType.set('Augment')" 
						class="rounded-full px-4 py-1 text-sm font-bold transition-all"
						[class.bg-[var(--c-arc-cyan)]]="activeType() === 'Augment'"
						[class.text-black]="activeType() === 'Augment'"
						[class.text-[var(--c-text-muted)]]="activeType() !== 'Augment'"
						[class.hover:bg-gray-800]="activeType() !== 'Augment'">Augments</button>
				</div>
			</div>

			<!-- Equipment Grid -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
				@for (item of filteredEquipment(); track item.id) {
					<a [routerLink]="['/arc-raiders/equipment', item.id]" [style.--rarity-color]="getRarityColor(item.rarity)" class="group flex flex-col overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)] transition-all hover:-translate-y-1 hover:border-[var(--rarity-color)] hover:shadow-lg hover:shadow-[var(--rarity-color)]/20">
						
						<!-- Image / Icon Header -->
						<div class="relative h-48 w-full bg-black">
							<!-- Subtitle glowing background for rarity -->
							<div class="absolute inset-0 bg-gradient-to-t from-[var(--rarity-color)]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
							
							<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
							<img [src]="item.image" [alt]="item.name" class="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-100" />
							
							<div class="absolute top-4 right-4 rounded bg-black/80 px-2 py-1 text-xs font-bold uppercase tracking-wider border transition-colors border-[var(--c-border)] group-hover:border-[var(--rarity-color)] z-20"
								 [style.color]="'var(--rarity-color)'">
								{{ item.rarity }}
							</div>
							
							<div class="absolute bottom-4 left-4 text-4xl z-20">
								{{ item.icon }}
							</div>
						</div>

						<!-- Content -->
						<div class="relative z-10 flex flex-1 flex-col p-5 bg-gradient-to-b from-[var(--c-bg-secondary)] to-[var(--c-bg-primary)]">
							<h2 class="text-xl font-black tracking-wide text-[var(--c-text-strong)] transition-colors group-hover:!text-[var(--rarity-color)]">{{ item.name }}</h2>
							<p class="mt-1 text-sm font-bold uppercase tracking-widest text-[var(--c-text-muted)] group-hover:text-[var(--c-text-strong)] transition-colors">{{ item.type }}</p>
							
							<div class="mt-4 flex gap-4 text-sm text-[var(--c-text)]">
								@if (item.type === 'Shield') {
									<div class="flex flex-col">
										<span class="text-xs text-[var(--c-text-muted)] uppercase tracking-wider">Shield Health</span>
										<span class="font-bold font-mono text-[var(--c-arc-cyan)]">{{ item.shieldHealth }}</span>
									</div>
								}
								@if (item.type === 'Augment') {
									<div class="flex flex-col">
										<span class="text-xs text-[var(--c-text-muted)] uppercase tracking-wider">Inventory Slots</span>
										<span class="font-bold font-mono text-[var(--c-arc-cyan)]">+{{ item.inventorySlots }}</span>
									</div>
								}
							</div>
						</div>
					</a>
				}
			</div>

			<!-- Empty State -->
			@if (filteredEquipment().length === 0) {
				<div class="rounded-xl border border-dashed border-[var(--c-border)] py-20 text-center text-[var(--c-text-muted)]">
					<p class="text-lg">No equipment found matching the current filters.</p>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersEquipmentHubComponent {
	protected readonly activeType = signal<'All' | 'Shield' | 'Augment'>('All');

	protected readonly filteredEquipment = computed(() => {
		let items = EQUIPMENT;
		const type = this.activeType();
		
		if (type !== 'All') {
			items = items.filter(i => i.type === type);
		}
		
		return items;
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
}
