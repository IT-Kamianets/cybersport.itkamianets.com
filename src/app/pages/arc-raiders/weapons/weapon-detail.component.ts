import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WEAPONS, ItemRequirement } from './weapons.data';
import { LOOT, resolveLootItem } from '../loot/loot.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-weapon-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/weapons" class="hover:text-[var(--c-arc-yellow)] transition-colors">Weapons</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ weapon()?.name || 'Not Found' }}</span>
			</nav>

			@if (weapon(); as w) {
				<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
					
					<!-- Left Side: Main Content Column -->
					<div class="flex-1 space-y-10">
						
						<!-- Header -->
						<header>
							<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ w.name }}</h1>
							<p class="mt-2 text-lg text-[var(--c-arc-yellow)] font-medium uppercase tracking-widest">{{ w.class }}</p>
						</header>

						<!-- 1. Overview -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
							<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ w.overview }}</p>
						</section>

						<!-- 2. Acquisition -->
						@if (w.acquisition && w.acquisition.sources && w.acquisition.sources.length) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Acquisition / How to Get</h2>
								<ul class="space-y-3 text-[var(--c-text)] list-disc pl-5">
									@for (source of w.acquisition.sources; track source) {
										<li>{{ source }}</li>
									}
								</ul>
							</section>
						}

						<!-- 3. Base Crafting Requirements -->
						@if (craftingMaterials().length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-yellow)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
									Base Crafting Requirements
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (material of craftingMaterials(); track material.lootItem.id) {
										<a [routerLink]="['/arc-raiders/loot', material.lootItem.id]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-yellow)] transition-colors flex justify-between items-center">
											<div class="flex items-center gap-3">
												<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-black/50 border border-[var(--c-border)] p-1 overflow-hidden">
													<img [src]="material.lootItem.image" [alt]="material.lootItem.name" class="h-full w-full object-contain" />
												</div>
												<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)]">{{ material.lootItem.name }}</h3>
											</div>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												x{{ material.quantity }}
											</div>
										</a>
									}
								</div>
								
								@if (w.craftingStation) {
									<div class="mt-4 inline-flex items-center gap-2 rounded border border-[var(--c-border)] bg-[var(--c-bg-primary)] px-4 py-2 text-sm text-[var(--c-text-muted)]">
										<span>Requires:</span>
										<a [routerLink]="['/arc-raiders/workshop', w.craftingStation.stationId]" class="font-bold text-[var(--c-arc-yellow)] hover:underline capitalize">{{ w.craftingStation.stationId.replace('-', ' ') }} (Level {{ w.craftingStation.level }})</a>
									</div>
								}
							</section>
						}

						<!-- TIER PROGRESSION -->
						@if (w.tiers && w.tiers.length > 0) {
							<section>
								<h2 class="mb-6 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Tier Progression</h2>
								<div class="space-y-8">
									@for (tier of w.tiers; track tier.tierLevel) {
										<div class="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
											<!-- Tier Header -->
											<div class="bg-[var(--c-bg-primary)] px-6 py-4 border-b border-[var(--c-border)] flex flex-wrap items-center justify-between gap-4">
												<div class="flex items-center gap-3">
													<span class="flex h-10 w-10 items-center justify-center rounded bg-[var(--c-arc-yellow)] text-xl font-black text-black shadow-lg shadow-[var(--c-arc-yellow)]/20">{{ tier.romanNumeral }}</span>
													<h3 class="text-xl font-bold text-[var(--c-text-strong)]">Tier {{ tier.tierLevel }}</h3>
												</div>
												<div class="flex gap-4 text-sm font-medium">
													<div class="flex flex-col"><span class="text-[var(--c-text-muted)]">Durability</span><span class="text-[var(--c-arc-cyan)]">{{ tier.durabilityMax }}</span></div>
													<div class="flex flex-col"><span class="text-[var(--c-text-muted)]">Weapon Value</span><span class="text-[var(--c-arc-yellow)]">{{ tier.weaponSalePrice }} ₡</span></div>
													<div class="flex flex-col"><span class="text-[var(--c-text-muted)]">Parts Value</span><span class="text-[var(--c-arc-yellow)]">{{ tier.componentSalePricePerSlot }} ₡</span></div>
												</div>
											</div>

											<div class="p-6 grid gap-8" [class.lg:grid-cols-2]="tier.upgradeRequirements?.length || tier.upgradePerks?.length">
												<!-- Upgrade Column -->
												@if (tier.upgradeRequirements?.length || tier.upgradePerks?.length) {
													<div class="space-y-6">
														@if (tier.upgradeRequirements && tier.upgradeRequirements.length > 0) {
															<div>
																<h4 class="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Upgrade Cost</h4>
																<div class="flex flex-col gap-2">
																	@for (mat of resolveMaterials(tier.upgradeRequirements); track mat.lootItem.id) {
																		<a [routerLink]="['/arc-raiders/loot', mat.lootItem.id]" class="group flex items-center justify-between rounded bg-[var(--c-bg-primary)] p-2 border border-transparent hover:border-[var(--c-arc-yellow)] transition-colors">
																			<div class="flex items-center gap-2">
																				<div class="flex h-6 w-6 items-center justify-center rounded bg-black/50 overflow-hidden">
																					<img [src]="mat.lootItem.image" [alt]="mat.lootItem.name" class="h-full w-full object-contain" />
																				</div>
																				<span class="text-sm font-medium text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)]">{{ mat.lootItem.name }}</span>
																			</div>
																			<span class="rounded bg-black/40 px-2 py-0.5 text-xs font-bold text-[var(--c-arc-cyan)]">x{{ mat.quantity }}</span>
																		</a>
																	}
																</div>
																@if (tier.upgradeStation) {
																	<div class="mt-2 text-xs text-[var(--c-text-muted)]">
																		Requires <a [routerLink]="['/arc-raiders/workshop', tier.upgradeStation.stationId]" class="font-bold text-[var(--c-arc-yellow)] hover:underline capitalize">{{ tier.upgradeStation.stationId.replace('-', ' ') }} Lvl {{ tier.upgradeStation.level }}</a>
																	</div>
																}
															</div>
														}

														@if (tier.upgradePerks && tier.upgradePerks.length > 0) {
															<div>
																<h4 class="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Tier Perks</h4>
																<ul class="space-y-2">
																	@for (perk of tier.upgradePerks; track perk) {
																		<li class="flex items-start gap-2 text-sm text-[var(--c-text-strong)]">
																			<span class="text-[var(--c-arc-yellow)] mt-0.5">✦</span>
																			<span>{{ perk }}</span>
																		</li>
																	}
																</ul>
															</div>
														}
													</div>
												}

												<!-- Maintenance Column -->
												<div class="space-y-6" [class.border-t]="tier.upgradeRequirements?.length || tier.upgradePerks?.length" [class.lg:border-t-0]="tier.upgradeRequirements?.length || tier.upgradePerks?.length" [class.lg:border-l]="tier.upgradeRequirements?.length || tier.upgradePerks?.length" [class.border-[var(--c-border)]]="tier.upgradeRequirements?.length || tier.upgradePerks?.length" [class.pt-6]="tier.upgradeRequirements?.length || tier.upgradePerks?.length" [class.lg:pt-0]="tier.upgradeRequirements?.length || tier.upgradePerks?.length" [class.lg:pl-8]="tier.upgradeRequirements?.length || tier.upgradePerks?.length">
													@if (tier.repairCost && tier.repairCost.length > 0) {
														<div>
															<h4 class="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Repair Cost <span class="text-xs text-[var(--c-arc-cyan)] normal-case ml-2">(+{{ tier.repairDurabilityRestored }} Durability)</span></h4>
															<div class="flex flex-col gap-2">
																@for (mat of resolveMaterials(tier.repairCost); track mat.lootItem.id) {
																	<a [routerLink]="['/arc-raiders/loot', mat.lootItem.id]" class="group flex items-center justify-between rounded bg-[var(--c-bg-primary)] p-2 border border-transparent hover:border-[var(--c-arc-yellow)] transition-colors">
																		<div class="flex items-center gap-2">
																			<div class="flex h-6 w-6 items-center justify-center rounded bg-black/50 overflow-hidden">
																				<img [src]="mat.lootItem.image" [alt]="mat.lootItem.name" class="h-full w-full object-contain" />
																			</div>
																			<span class="text-sm font-medium text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)]">{{ mat.lootItem.name }}</span>
																		</div>
																		<span class="rounded bg-black/40 px-2 py-0.5 text-xs font-bold text-[var(--c-arc-cyan)]">x{{ mat.quantity }}</span>
																	</a>
																}
															</div>
														</div>
													}

													<div class="grid grid-cols-2 gap-4">
														@if (tier.recycleYield && tier.recycleYield.length > 0) {
															<div>
																<h4 class="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Recycle Yield</h4>
																<div class="flex flex-col gap-2">
																	@for (mat of resolveMaterials(tier.recycleYield); track mat.lootItem.id) {
																		<a [routerLink]="['/arc-raiders/loot', mat.lootItem.id]" class="group flex items-center justify-between rounded bg-[var(--c-bg-primary)] p-1.5 border border-transparent hover:border-[var(--c-arc-yellow)] transition-colors">
																			<div class="flex items-center gap-2 truncate">
																				<div class="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-black/50 overflow-hidden">
																					<img [src]="mat.lootItem.image" [alt]="mat.lootItem.name" class="h-full w-full object-contain" />
																				</div>
																				<span class="text-xs font-medium text-[var(--c-text-strong)] truncate group-hover:text-[var(--c-arc-yellow)]" [title]="mat.lootItem.name">{{ mat.lootItem.name }}</span>
																			</div>
																			<span class="rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-bold text-[var(--c-text)]">x{{ mat.quantity }}</span>
																		</a>
																	}
																</div>
															</div>
														}
														@if (tier.salvageYield && tier.salvageYield.length > 0) {
															<div>
																<h4 class="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Salvage Yield</h4>
																<div class="flex flex-col gap-2">
																	@for (mat of resolveMaterials(tier.salvageYield); track mat.lootItem.id) {
																		<a [routerLink]="['/arc-raiders/loot', mat.lootItem.id]" class="group flex items-center justify-between rounded bg-[var(--c-bg-primary)] p-1.5 border border-transparent hover:border-[var(--c-arc-yellow)] transition-colors">
																			<div class="flex items-center gap-2 truncate">
																				<div class="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-black/50 overflow-hidden">
																					<img [src]="mat.lootItem.image" [alt]="mat.lootItem.name" class="h-full w-full object-contain" />
																				</div>
																				<span class="text-xs font-medium text-[var(--c-text-strong)] truncate group-hover:text-[var(--c-arc-yellow)]" [title]="mat.lootItem.name">{{ mat.lootItem.name }}</span>
																			</div>
																			<span class="rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-bold text-[var(--c-text)]">x{{ mat.quantity }}</span>
																		</a>
																	}
																</div>
															</div>
														}
													</div>
												</div>
											</div>
										</div>
									}
								</div>
							</section>
						}

						<!-- Compatible Weapon Mods -->
						@if (w.mods && w.mods.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Compatible Weapon Mods</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (mod of w.mods; track mod.category) {
										<div class="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4 shadow-[var(--shadow-sm)]">
											<h3 class="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--c-arc-yellow)]">{{ mod.category }}</h3>
											<p class="text-sm text-[var(--c-text)]">{{ mod.options }}</p>
										</div>
									}
								</div>
							</section>
						}

						<!-- Strategy & Synergies -->
						@if (w.strategies && w.strategies.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Strategy & Synergies</h2>
								<ul class="space-y-3 text-[var(--c-text)]">
									@for (strat of w.strategies; track strat) {
										<li class="flex items-start gap-3 rounded-lg bg-[var(--c-bg-primary)] p-4 border-l-4 border-[var(--c-arc-cyan)]">
											<span>{{ strat }}</span>
										</li>
									}
								</ul>
							</section>
						}

						<!-- Patch History -->
						@if (w.patchHistory && w.patchHistory.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Patch History</h2>
								<div class="relative pl-4 border-l-2 border-[var(--c-border)] space-y-6">
									@for (patch of w.patchHistory; track patch.version) {
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
								<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)]">{{ w.name }}</h2>
							</div>
							
							<div class="bg-black/80 flex items-center justify-center p-4 h-48">
								<img [src]="w.image" [alt]="w.name" class="max-w-full max-h-full object-contain drop-shadow-2xl" />
							</div>

							<div class="p-5 text-sm">
								<!-- ADVANCED STATS -->
								@if (w.advancedStats) {
									<div class="mb-6 space-y-3">
										<h3 class="border-b border-[var(--c-border)] pb-2 text-xs font-bold uppercase tracking-wider text-[var(--c-arc-yellow)]">Advanced Stats</h3>
										<div class="grid grid-cols-2 gap-x-4 gap-y-3">
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Damage</span><span class="font-medium text-[var(--c-text-strong)] text-[var(--c-arc-yellow)]">{{ w.advancedStats.damage }}</span></div>
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">RPM</span><span class="font-medium text-[var(--c-text-strong)]">{{ w.advancedStats.fireRateRpm }}</span></div>
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Armor Pen</span><span class="font-medium text-[var(--c-text-strong)]">{{ w.advancedStats.arcArmorPenetration }}</span></div>
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Headshot X</span><span class="font-medium text-[var(--c-text-strong)]">{{ w.advancedStats.headshotMultiplier }}x</span></div>
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Range</span><span class="font-medium text-[var(--c-text-strong)]">{{ w.advancedStats.range }}m</span></div>
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Stability</span><span class="font-medium text-[var(--c-text-strong)]">{{ w.advancedStats.stability }}</span></div>
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Agility</span><span class="font-medium text-[var(--c-text-strong)]">{{ w.advancedStats.agility }}</span></div>
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Stealth</span><span class="font-medium text-[var(--c-text-strong)]">{{ w.advancedStats.stealth }}</span></div>
											<div class="flex flex-col"><span class="text-[10px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Weight</span><span class="font-medium text-[var(--c-text-strong)]">{{ w.advancedStats.weight }}kg</span></div>
										</div>
									</div>
								} @else {
									<!-- LEGACY STATS -->
									<div class="mb-6 space-y-3">
										<h3 class="border-b border-[var(--c-border)] pb-2 text-xs font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Basic Stats</h3>
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Base Damage</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right text-[var(--c-arc-yellow)]">{{ w.baseDamage }} per shot</dd>
										</div>
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Headshot</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.headshotMultiplier }}</dd>
										</div>
										<div class="flex justify-between pt-1">
											<dt class="font-semibold text-[var(--c-text-muted)]">Effective Range</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.effectiveRange }}</dd>
										</div>
									</div>
								}

								<!-- GENERAL SPECS -->
								<dl class="space-y-3">
									<h3 class="border-b border-[var(--c-border)] pb-2 text-xs font-bold uppercase tracking-wider text-[var(--c-text-muted)]">Specifications</h3>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Type</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.class }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Rarity</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.rarity }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Firing Mode</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.firingMode }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Ammo Type</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.ammoType }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Magazine Size</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.magSize }}</dd>
									</div>
									@if (w.blueprintRequired) {
										<div class="flex justify-between pt-1">
											<dt class="font-semibold text-[var(--c-text-muted)]">Blueprint Req.</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ w.blueprintRequired }}</dd>
										</div>
									}
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
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Weapon Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The weapon you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/weapons" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-cyan)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Weapons Hub
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersWeaponDetailComponent {
	private readonly route = inject(ActivatedRoute);

	// Read the :id from the route URL
	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	// Find the matching weapon
	protected readonly weapon = computed(() => {
		const id = this.idParam();
		return WEAPONS.find(w => w.id === id);
	});

	protected readonly craftingMaterials = computed(() => {
		const item = this.weapon();
		if (!item || !item.craftingRequirements) return [];

		return item.craftingRequirements.map(req => {
			return {
				lootItem: resolveLootItem(req.itemId),
				quantity: req.quantity
			};
		});
	});

	// Helper to resolve an ItemRequirement array to loot objects
	protected resolveMaterials(reqs?: ItemRequirement[]) {
		if (!reqs) return [];
		return reqs.map(req => {
			return {
				lootItem: resolveLootItem(req.itemId),
				quantity: req.quantity
			};
		});
	}
}
