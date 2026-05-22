import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { PubgAboutComponent } from './pubg-about.component';
import { PubgCharactersComponent } from './pubg-characters.component';
import { PubgMapsComponent } from './pubg-maps.component';
import { PubgStrategyComponent } from './pubg-strategy.component';
import { PubgWeaponsComponent } from './pubg-weapons.component';
import { PubgService } from './pubg.service';

import en from './i18n/en.json';
import ua from './i18n/ua.json';

@Component({
	imports: [
		TranslateDirective,
		PubgAboutComponent,
		PubgCharactersComponent,
		PubgMapsComponent,
		PubgStrategyComponent,
		PubgWeaponsComponent,
	],
	template: `
		<div class="flex min-h-screen flex-col text-[var(--c-text)] font-sans">
			<!-- Header -->
			<header
				class="sticky top-0 z-50 border-b border-[var(--c-border)] bg-[var(--c-bg-secondary)]/80 backdrop-blur-md transition-all duration-300"
			>
				<div class="mx-auto flex max-w-[var(--container)] items-center justify-between px-4 py-4">
					<div
						class="cursor-pointer text-2xl font-black tracking-tighter text-[var(--c-primary)] hover:opacity-80 transition-opacity"
						(click)="activeTab.set('home')"
					>
						PUBG WIKI
					</div>

					<nav class="hidden space-x-8 lg:flex">
						@for (tab of tabs; track tab.id) {
							<button
								(click)="activeTab.set(tab.id)"
								[class.text-[var(--c-primary)]]="activeTab() === tab.id"
								class="text-sm font-bold uppercase tracking-widest transition-colors hover:text-[var(--c-primary)] relative group"
							>
								<span translate>{{ tab.label }}</span>
								<span 
									[class.scale-x-100]="activeTab() === tab.id"
									class="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--c-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
								></span>
							</button>
						}
					</nav>

					<div class="flex items-center space-x-3">
						<button
							(click)="setLang('ua')"
							[class.text-[var(--c-primary)]]="currentLang() === 'ua'"
							class="text-xs font-bold transition-all hover:scale-110 active:scale-95"
						>
							UA
						</button>
						<span class="text-[var(--c-border)] font-light">|</span>
						<button
							(click)="setLang('en')"
							[class.text-[var(--c-primary)]]="currentLang() === 'en'"
							class="text-xs font-bold transition-all hover:scale-110 active:scale-95"
						>
							EN
						</button>
					</div>
				</div>
			</header>

			<!-- Main Content -->
			<main class="flex-1 overflow-hidden relative" (mousemove)="onMouseMove($event)">
				@if (activeTab() === 'home') {
					<div class="animate-in fade-in slide-in-from-bottom-4 duration-700">
						<!-- Hero Welcome Section -->
						<section class="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
							<div class="absolute inset-0 z-0 pointer-events-none">
								<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--c-bg-secondary)]/50"></div>
							</div>
							
							<div class="mx-auto max-w-[var(--container)] px-4 relative z-10 text-center">
								<h1 class="text-5xl font-black uppercase tracking-tight text-[var(--c-text-strong)] sm:text-7xl lg:text-8xl mb-6 leading-[0.9]" translate>
									Welcome to the ultimate <span class="text-[var(--c-primary)]">PUBG WIKI</span>
								</h1>
								<p class="mx-auto max-w-2xl text-xl lg:text-2xl text-[var(--c-text-muted)] font-medium leading-relaxed" translate>
									Your comprehensive guide to survival, strategy, and world of BATTLEGROUNDS.
								</p>
								
								<div class="mt-12 flex flex-wrap justify-center gap-4">
									<button (click)="activeTab.set('about')" class="px-8 py-4 bg-[var(--c-primary)] text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-[0_15px_30_rgba(255,77,0,0.4)]" translate>
										Survival Guide
									</button>
									<button (click)="activeTab.set('strategy')" class="px-8 py-4 bg-[var(--c-bg-secondary)] text-[var(--c-text-strong)] border-2 border-[var(--c-border)] font-black uppercase tracking-widest rounded-2xl hover:border-[var(--c-primary)] transition-all" translate>
										Learn Strategy
									</button>
								</div>
							</div>
						</section>

						<!-- Interactive Map Section -->
						<section class="py-12 lg:py-24 bg-[var(--c-bg-secondary)]/30 border-y border-[var(--c-border)]/50">
							<div class="mx-auto max-w-[var(--container)] px-4">
								<div class="mb-12 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
									<div class="max-w-xl">
										<h2 class="text-4xl font-black uppercase tracking-tight text-[var(--c-text-strong)] sm:text-6xl mb-4" translate>
											Erangel
										</h2>
										<p class="text-lg text-[var(--c-text-muted)] font-medium" translate>
											The heart of PUBG. Master the OG battleground with our interactive navigation.
										</p>
									</div>
									<div class="px-6 py-3 bg-[var(--c-bg-primary)] border border-[var(--c-border)] rounded-2xl inline-flex items-center gap-3">
										<span class="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
										<span class="text-sm font-bold uppercase tracking-widest" translate>Hover over locations to see details</span>
									</div>
								</div>

								<div class="relative w-full max-w-[900px] aspect-square mx-auto bg-[#1a2a3a] border-4 border-[var(--c-border)] rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] group/map">
									<div 
										class="absolute inset-0 bg-cover bg-center opacity-90 transition-all duration-1000 group-hover/map:scale-110 saturate-[1.2] contrast-[1.1]"
										style="background-image: url('https://wstatic-prod.pubg.com/web/live/main_fa53437/img/590dba7.webp')"
									></div>
									<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

									@for (marker of markers(); track marker.name) {
										<div
											class="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group/marker"
											[style.top.%]="marker.y"
											[style.left.%]="marker.x"
										>
											<div class="absolute inset-0 animate-ping rounded-full bg-[#ff4d00] opacity-60"></div>
											<div class="relative w-full h-full rounded-full border-[1.5px] border-white bg-[#ff4d00] shadow-[0_0_10px_rgba(255,77,0,0.6)] transition-all duration-300 group-hover/marker:scale-125 group-hover/marker:bg-white group-hover/marker:border-[#ff4d00]"></div>
											<div class="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/95 px-3 py-1.5 text-xs font-black text-white opacity-0 invisible translate-y-2 transition-all duration-300 group-hover/marker:opacity-100 group-hover/marker:visible group-hover/marker:translate-y-0 shadow-2xl border border-white/10 ring-1 ring-white/20">
												<span translate>{{ marker.name }}</span>
												<div class="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-black/95"></div>
											</div>
										</div>
									}
								</div>
							</div>
						</section>

						<!-- Patch Highlights & Statistics -->
						<section class="py-20 lg:py-32">
							<div class="mx-auto max-w-[var(--container)] px-4">
								<div class="grid gap-12 lg:grid-cols-[1fr,400px]">
									<!-- Patch Notes -->
									<div class="space-y-12">
										<div class="flex items-center gap-6">
											<div class="h-px flex-1 bg-[var(--c-border)]"></div>
											<h3 class="text-sm font-black uppercase tracking-[0.4em] text-[var(--c-primary)]" translate>Latest News</h3>
											<div class="h-px flex-1 bg-[var(--c-border)]"></div>
										</div>
										
										<div class="group relative p-8 lg:p-12 rounded-[3rem] bg-[var(--c-bg-secondary)] border-2 border-[var(--c-border)] overflow-hidden hover:border-[var(--c-primary)] transition-all">
											<div class="absolute top-0 right-0 w-64 h-64 bg-[var(--c-primary)]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[var(--c-primary)]/10 transition-colors"></div>
											<div class="relative z-10">
												<span class="inline-block px-4 py-1.5 rounded-full bg-[var(--c-primary)] text-white text-[10px] font-black uppercase tracking-widest mb-6" translate>Patch Highlights</span>
												<h4 class="text-3xl font-black uppercase tracking-tight text-[var(--c-text-strong)] mb-6 sm:text-5xl" translate>What's New in Patch 32.1</h4>
												<p class="text-lg text-[var(--c-text)] leading-relaxed mb-8" translate>New weapon: PKM, Map adjustments on Vikendi, and improved vehicle physics.</p>
												<button class="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[var(--c-primary)] hover:gap-5 transition-all">
													<span translate>Read More</span>
													<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
												</button>
											</div>
										</div>
									</div>

									<!-- Stats Sidebar -->
									<div class="space-y-8">
										<h3 class="text-2xl font-black uppercase tracking-tight text-[var(--c-text-strong)] mb-8" translate>Survival Statistics</h3>
										<div class="space-y-4">
											<div class="p-6 rounded-2xl bg-[var(--c-bg-secondary)] border border-[var(--c-border)] flex items-center justify-between">
												<div class="text-xs font-bold uppercase tracking-widest text-[var(--c-text-muted)]" translate>Average match duration</div>
												<div class="text-xl font-black text-[var(--c-primary)]" translate>30 Minutes</div>
											</div>
											<div class="p-6 rounded-2xl bg-[var(--c-bg-secondary)] border border-[var(--c-border)] flex items-center justify-between">
												<div class="text-xs font-bold uppercase tracking-widest text-[var(--c-text-muted)]" translate>Total players worldwide</div>
												<div class="text-xl font-black text-[var(--c-primary)]" translate>100 Million+</div>
											</div>
											<div class="p-6 rounded-2xl bg-[var(--c-bg-secondary)] border border-[var(--c-border)] flex items-center justify-between">
												<div class="text-xs font-bold uppercase tracking-widest text-[var(--c-text-muted)]" translate>Weapons available</div>
												<div class="text-xl font-black text-[var(--c-primary)]" translate>40+</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<!-- Quick Navigation -->
						<section class="pb-24">
							<div class="mx-auto max-w-[var(--container)] px-4">
								<h3 class="text-center text-sm font-black uppercase tracking-[0.4em] text-[var(--c-text-muted)] mb-12 opacity-50" translate>Quick Access</h3>
								<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
									<button (click)="activeTab.set('about')" class="p-8 rounded-[2rem] bg-[var(--c-bg-secondary)] border border-[var(--c-border)] hover:border-[var(--c-primary)] transition-all text-left group">
										<div class="text-2xl mb-4 group-hover:scale-125 transition-transform origin-left">📖</div>
										<h4 class="font-black uppercase tracking-widest text-xs mb-2 text-[var(--c-text-strong)]" translate>About</h4>
										<p class="text-[10px] text-[var(--c-text-muted)] font-medium" translate>Learn the basics of survival and tactics.</p>
									</button>
									<button (click)="activeTab.set('weapons')" class="p-8 rounded-[2rem] bg-[var(--c-bg-secondary)] border border-[var(--c-border)] hover:border-[var(--c-primary)] transition-all text-left group">
										<div class="text-2xl mb-4 group-hover:scale-125 transition-transform origin-left">🔫</div>
										<h4 class="font-black uppercase tracking-widest text-xs mb-2 text-[var(--c-text-strong)]" translate>Weapons</h4>
										<p class="text-[10px] text-[var(--c-text-muted)] font-medium" translate>Master the diverse arsenal of BATTLEGROUNDS.</p>
									</button>
									<button (click)="activeTab.set('maps')" class="p-8 rounded-[2rem] bg-[var(--c-bg-secondary)] border border-[var(--c-border)] hover:border-[var(--c-primary)] transition-all text-left group">
										<div class="text-2xl mb-4 group-hover:scale-125 transition-transform origin-left">🗺️</div>
										<h4 class="font-black uppercase tracking-widest text-xs mb-2 text-[var(--c-text-strong)]" translate>Maps</h4>
										<p class="text-[10px] text-[var(--c-text-muted)] font-medium" translate>Explore the maps and find the best loot spots.</p>
									</button>
									<button (click)="activeTab.set('strategy')" class="p-8 rounded-[2rem] bg-[var(--c-bg-secondary)] border border-[var(--c-border)] hover:border-[var(--c-primary)] transition-all text-left group">
										<div class="text-2xl mb-4 group-hover:scale-125 transition-transform origin-left">⚡</div>
										<h4 class="font-black uppercase tracking-widest text-xs mb-2 text-[var(--c-text-strong)]" translate>Strategy</h4>
										<p class="text-[10px] text-[var(--c-text-muted)] font-medium" translate>Get advanced tips for higher rankings.</p>
									</button>
								</div>
							</div>
						</section>
					</div>
				} @else if (activeTab() === 'about') {
					<div class="animate-in fade-in slide-in-from-right-4 duration-500">
						<app-pubg-about />
					</div>
				} @else if (activeTab() === 'characters') {
					<div class="animate-in fade-in slide-in-from-right-4 duration-500">
						<app-pubg-characters />
					</div>
				} @else if (activeTab() === 'weapons') {
					<div class="animate-in fade-in slide-in-from-right-4 duration-500">
						<app-pubg-weapons />
					</div>
				} @else if (activeTab() === 'maps') {
					<div class="animate-in fade-in slide-in-from-right-4 duration-500">
						<app-pubg-maps />
					</div>
				} @else if (activeTab() === 'strategy') {
					<div class="animate-in fade-in slide-in-from-right-4 duration-500">
						<app-pubg-strategy />
					</div>
				}
			</main>

			<!-- Footer -->
			<footer class="border-t border-[var(--c-border)] bg-[var(--c-bg-secondary)] py-3">
				<div class="mx-auto max-w-[var(--container)] px-4 text-center">
					<div class="mb-1 text-lg font-black tracking-tighter text-[var(--c-primary)]">PUBG WIKI</div>
					<p
						class="mx-auto max-w-md text-xs font-semibold leading-relaxed text-[var(--c-text-muted)]"
						translate
					>
						All rights belong to PUBG Corporation
					</p>
					<div class="mt-2 flex justify-center space-x-6">
						<div class="h-1 w-8 bg-[var(--c-border)]/30 rounded-full"></div>
					</div>
					<div
						class="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--c-text-muted)] opacity-30"
					>
						&copy; {{ currentYear }} PUBG Wiki &bull; Krafton Inc. &bull; All Rights Reserved
					</div>
				</div>
			</footer>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PubgComponent {
	protected readonly translate = inject(TranslateService);
	private readonly pubgService = inject(PubgService);

	protected readonly currentYear = new Date().getFullYear();
	protected readonly currentLang = this.translate.language;
	protected readonly activeTab = signal('home');
	protected readonly markers = this.pubgService.markers;
	protected readonly mouseX = signal(0);
	protected readonly mouseY = signal(0);

	protected readonly tabs = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'weapons', label: 'Weapons' },
		{ id: 'characters', label: 'Characters' },
		{ id: 'maps', label: 'Maps' },
		{ id: 'strategy', label: 'Strategy' },
	];

	constructor() {
		effect(() => {
			const lang = this.translate.language();
			const dict: Record<string, string> = lang === 'ua' ? ua : en;

			for (const [key, value] of Object.entries(dict)) {
				// Ensure signal exists and set its value
				this.translate.translate(key).set(value);
			}
		});
	}

	protected setLang(lang: string): void {
		this.translate.setLanguage(lang);
	}

	protected onMouseMove(event: MouseEvent): void {
		const { clientX, clientY } = event;
		const { innerWidth, innerHeight } = window;
		
		// Normalize mouse position to range [-0.5, 0.5]
		this.mouseX.set((clientX / innerWidth) - 0.5);
		this.mouseY.set((clientY / innerHeight) - 0.5);
	}
}

