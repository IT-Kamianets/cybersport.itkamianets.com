import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LOOT } from './loot.data';
import { CommonModule } from '@angular/common';

type LootSortKey =
	| 'name-asc'
	| 'name-desc'
	| 'category-asc'
	| 'category-desc'
	| 'rarity-asc'
	| 'rarity-desc'
	| 'stack-asc'
	| 'stack-desc'
	| 'value-asc'
	| 'value-desc';

const rarityOrder: Record<string, number> = {
	Common: 0,
	Uncommon: 1,
	Rare: 2,
	Epic: 3,
	Legendary: 4,
};

const categoryOrder: Record<string, number> = {
	Material: 0,
	Recyclable: 1,
	Valuable: 2,
	Key: 3,
	Core: 4,
};

@Component({
	selector: 'app-loot-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-arc-cyan)] mb-4">Loot & Materials</h1>
				<p class="text-lg text-[var(--c-text)]">
					A comprehensive database of all scavengable items in the Rust Belt. Track crafting materials, high-value trade goods, keys, and rare boss drops.
				</p>
			</header>

			<!-- 1. The Interactive Filter Bar -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
				<div class="flex flex-wrap gap-x-8 gap-y-4">
					
					<!-- Category Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Category</span>
						<div class="flex flex-wrap gap-2">
							@for (cat of categories; track cat) {
								<button 
									(click)="selectedCategory.set(cat)"
									[class.bg-[var(--c-arc-cyan)]]="selectedCategory() === cat"
									[class.text-black]="selectedCategory() === cat"
									[class.bg-[var(--c-bg-primary)]]="selectedCategory() !== cat"
									[class.text-[var(--c-text-strong)]]="selectedCategory() !== cat"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-cyan)] hover:text-black">
									{{ cat }}
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
									[class.bg-[var(--c-arc-cyan)]]="selectedRarity() === rarity"
									[class.text-black]="selectedRarity() === rarity"
									[class.bg-[var(--c-bg-primary)]]="selectedRarity() !== rarity"
									[class.text-[var(--c-text-strong)]]="selectedRarity() !== rarity"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-cyan)] hover:text-black">
									{{ rarity }}
								</button>
							}
						</div>
					</div>

				</div>

				<div class="mt-6 border-t border-[var(--c-border)] pt-4 text-sm text-[var(--c-text-muted)]">
					Showing {{ visibleLoot().length }} item(s).
				</div>
			</section>

			<!-- 2. The Loot List (Dense Scannable Grid/List) -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] overflow-hidden shadow-[var(--shadow-sm)]">
				<div class="overflow-x-auto">
					<table class="w-full text-left text-sm text-[var(--c-text)]">
						<thead class="bg-[var(--c-bg-primary)] text-xs uppercase text-[var(--c-text-strong)] border-b border-[var(--c-border)]">
							<tr>
								<th class="px-6 py-4 font-semibold w-[40%]">
									<button type="button" (click)="toggleSort('name')" class="flex w-full items-center gap-2 text-left transition-colors hover:text-[var(--c-arc-cyan)]">
										<span>Item Name</span>
										<span class="text-[10px] tracking-[0.3em] text-[var(--c-text-muted)]">{{ sortIndicator('name') }}</span>
									</button>
								</th>
								<th class="px-6 py-4 font-semibold">
									<button type="button" (click)="toggleSort('category')" class="flex w-full items-center gap-2 text-left transition-colors hover:text-[var(--c-arc-cyan)]">
										<span>Category</span>
										<span class="text-[10px] tracking-[0.3em] text-[var(--c-text-muted)]">{{ sortIndicator('category') }}</span>
									</button>
								</th>
								<th class="px-6 py-4 font-semibold">
									<button type="button" (click)="toggleSort('rarity')" class="flex w-full items-center gap-2 text-left transition-colors hover:text-[var(--c-arc-cyan)]">
										<span>Rarity</span>
										<span class="text-[10px] tracking-[0.3em] text-[var(--c-text-muted)]">{{ sortIndicator('rarity') }}</span>
									</button>
								</th>
								<th class="px-6 py-4 font-semibold text-center">
									<button type="button" (click)="toggleSort('stack')" class="flex w-full items-center justify-center gap-2 transition-colors hover:text-[var(--c-arc-cyan)]">
										<span>Stack Limit</span>
										<span class="text-[10px] tracking-[0.3em] text-[var(--c-text-muted)]">{{ sortIndicator('stack') }}</span>
									</button>
								</th>
								<th class="px-6 py-4 font-semibold text-right">
									<button type="button" (click)="toggleSort('value')" class="flex w-full items-center justify-end gap-2 text-right transition-colors hover:text-[var(--c-arc-cyan)]">
										<span>Value (Max Stack)</span>
										<span class="text-[10px] tracking-[0.3em] text-[var(--c-text-muted)]">{{ sortIndicator('value') }}</span>
									</button>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-[var(--c-border)]">
							@for (item of visibleLoot(); track item.id) {
								<tr class="hover:bg-[var(--c-bg-primary)]/50 transition-colors group" [style.--rarity-color]="getRarityColor(item.rarity)">
									<td class="px-6 py-4">
										<a [routerLink]="['/arc-raiders/loot', item.id]" class="flex items-center gap-3 font-bold text-[var(--c-text-strong)] group-hover:text-[var(--rarity-color)] transition-colors">
											<div class="relative flex h-10 w-10 shrink-0 items-center justify-center rounded bg-black/50 border border-[var(--c-border)] p-1 overflow-hidden group-hover:border-[var(--rarity-color)] transition-colors">
												<div class="absolute inset-0 bg-gradient-to-t from-[var(--rarity-color)]/20 to-transparent"></div>
												<img [src]="item.image" [alt]="item.name" class="relative z-10 h-full w-full object-contain drop-shadow-md" />
											</div>
											{{ item.name }}
										</a>
									</td>
									<td class="px-6 py-4">{{ item.category }}</td>
									<td class="px-6 py-4">
										<span [style.color]="'var(--rarity-color)'"
											  class="font-bold">
											{{ item.rarity }}
										</span>
									</td>
									<td class="px-6 py-4 text-center">
										<div class="text-[var(--c-text-strong)] font-bold">{{ item.stackLimit }}</div>
									</td>
									<td class="px-6 py-4 text-right">
										<div class="font-mono font-bold text-[var(--c-arc-cyan)] group-hover:text-[var(--rarity-color)] transition-colors">{{ item.sellValue }}</div>
										<div class="text-xs text-[var(--c-text-muted)]">({{ item.maxStackValue }} max)</div>
									</td>
								</tr>
							}
							@if (visibleLoot().length === 0) {
								<tr>
									<td colspan="5" class="px-6 py-12 text-center text-[var(--c-text-muted)]">
										No loot items match your selected filters.
									</td>
								</tr>
							}
						</tbody>
					</table>
				</div>
			</section>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersLootHubComponent {
	protected readonly loot = LOOT.map(item => ({
		...item,
		maxStackValue: item.sellValue * item.stackLimit
	}));

	protected readonly categories = ['All', 'Material', 'Recyclable', 'Valuable', 'Key', 'Core'];
	protected readonly rarities = ['All', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];

	protected readonly selectedCategory = signal<string>('All');
	protected readonly selectedRarity = signal<string>('All');
	protected readonly selectedSort = signal<LootSortKey>('rarity-asc');

	protected readonly visibleLoot = computed(() => {
		const filteredLoot = this.loot.filter(item => {
			const catMatch = this.selectedCategory() === 'All' || item.category === this.selectedCategory();
			const rarMatch = this.selectedRarity() === 'All' || item.rarity === this.selectedRarity();
			return catMatch && rarMatch;
		});

		return [...filteredLoot].sort((left, right) => {
			switch (this.selectedSort()) {
				case 'name-asc':
					return left.name.localeCompare(right.name);
				case 'name-desc':
					return right.name.localeCompare(left.name);
				case 'category-asc':
					return categoryOrder[left.category] - categoryOrder[right.category] || left.name.localeCompare(right.name);
				case 'category-desc':
					return categoryOrder[right.category] - categoryOrder[left.category] || left.name.localeCompare(right.name);
				case 'rarity-asc':
					return rarityOrder[left.rarity] - rarityOrder[right.rarity] || left.name.localeCompare(right.name);
				case 'rarity-desc':
					return rarityOrder[right.rarity] - rarityOrder[left.rarity] || left.name.localeCompare(right.name);
				case 'stack-asc':
					return left.stackLimit - right.stackLimit || left.name.localeCompare(right.name);
				case 'stack-desc':
					return right.stackLimit - left.stackLimit || left.name.localeCompare(right.name);
				case 'value-asc':
					return left.maxStackValue - right.maxStackValue || left.name.localeCompare(right.name);
				case 'value-desc':
					return right.maxStackValue - left.maxStackValue || left.name.localeCompare(right.name);
			}

			return 0;
		});
	});

	protected toggleSort(column: 'name' | 'category' | 'rarity' | 'stack' | 'value'): void {
		const current = this.selectedSort();
		const nextSort: Record<typeof column, [LootSortKey, LootSortKey]> = {
			name: ['name-asc', 'name-desc'],
			category: ['category-asc', 'category-desc'],
			rarity: ['rarity-asc', 'rarity-desc'],
			stack: ['stack-asc', 'stack-desc'],
			value: ['value-asc', 'value-desc'],
		};

		const [ascending, descending] = nextSort[column];
		if (current === ascending) {
			this.selectedSort.set(descending);
			return;
		}

		this.selectedSort.set(ascending);
	}

	protected sortIndicator(column: 'name' | 'category' | 'rarity' | 'stack' | 'value'): string {
		const current = this.selectedSort();
		const matchesAscending = current === `${column}-asc`;
		const matchesDescending = current === `${column}-desc`;

		if (matchesAscending) return '▲';
		if (matchesDescending) return '▼';
		return '↕';
	}

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
