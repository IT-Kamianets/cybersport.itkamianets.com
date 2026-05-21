import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { LanguageService } from '@wawjs/ngx-translate';

import en from './i18n/en.json';
import ua from './i18n/ua.json';

@Component({
	selector: 'app-arc-raiders',
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	styleUrl: './arc-raiders.scss',
	template: `
		<div class="arc-raiders-theme">
			<section class="flex flex-col min-h-screen bg-[var(--c-bg-primary)]" style="--c-primary: var(--c-arc-cyan);">
				<!-- Wiki Header -->
				<header class="bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)] border-b border-[var(--c-border)]">
					<div class="mx-auto max-w-[var(--container)] px-4 sm:px-6 lg:px-8">
						<div class="flex h-16 justify-between items-center">
							<div class="flex items-center">
								<h1 class="text-2xl font-bold tracking-tight text-[var(--c-arc-cyan)] uppercase">
									{{ t()['ARC Raiders Wiki'] }}
								</h1>
							</div>
							<nav class="hidden md:flex space-x-8">
								
								<!-- Game Info Dropdown -->
								<div class="relative group inline-flex items-center">
									<button class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors"
											[class.text-[var(--c-arc-cyan)]]="['/arc-raiders', '/arc-raiders/enemies', '/arc-raiders/maps', '/arc-raiders/guides'].includes(router.url)">
										<span>Game Info</span>
										<svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
									</button>
									
									<div class="absolute left-0 top-full hidden w-48 flex-col rounded-md border border-[var(--c-border)] bg-[var(--c-bg-primary)] shadow-lg group-hover:flex z-50 overflow-hidden">
										<a routerLink="/arc-raiders" [routerLinkActiveOptions]="{exact: true}" routerLinkActive="bg-[var(--c-bg-secondary)] text-[var(--c-arc-cyan)]" class="px-4 py-3 text-sm font-medium text-[var(--c-text-strong)] hover:bg-[var(--c-bg-secondary)] hover:text-[var(--c-arc-cyan)] transition-colors">{{ t()['Wiki Home'] }}</a>
										<a routerLink="/arc-raiders/enemies" routerLinkActive="bg-[var(--c-bg-secondary)] text-[var(--c-arc-cyan)]" class="px-4 py-3 text-sm font-medium text-[var(--c-text-strong)] hover:bg-[var(--c-bg-secondary)] hover:text-[var(--c-arc-cyan)] transition-colors border-t border-[var(--c-border)]">{{ t()['Enemies'] }}</a>
										<a routerLink="/arc-raiders/maps" routerLinkActive="bg-[var(--c-bg-secondary)] text-[var(--c-arc-cyan)]" class="px-4 py-3 text-sm font-medium text-[var(--c-text-strong)] hover:bg-[var(--c-bg-secondary)] hover:text-[var(--c-arc-cyan)] transition-colors border-t border-[var(--c-border)]">{{ t()['Maps'] }}</a>
										<a routerLink="/arc-raiders/guides" routerLinkActive="bg-[var(--c-bg-secondary)] text-[var(--c-arc-cyan)]" class="px-4 py-3 text-sm font-medium text-[var(--c-text-strong)] hover:bg-[var(--c-bg-secondary)] hover:text-[var(--c-arc-cyan)] transition-colors border-t border-[var(--c-border)]">{{ t()['Guides'] }}</a>
									</div>
								</div>

								<!-- Economy & Crafting Dropdown -->
								<div class="relative group inline-flex items-center">
									<button class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors"
											[class.text-[var(--c-arc-cyan)]]="['/arc-raiders/loot', '/arc-raiders/workshop'].includes(router.url)">
										<span>Economy & Crafting</span>
										<svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
									</button>
									
									<div class="absolute left-0 top-full hidden w-48 flex-col rounded-md border border-[var(--c-border)] bg-[var(--c-bg-primary)] shadow-lg group-hover:flex z-50 overflow-hidden">
										<a routerLink="/arc-raiders/loot" routerLinkActive="bg-[var(--c-bg-secondary)] text-[var(--c-arc-cyan)]" class="px-4 py-3 text-sm font-medium text-[var(--c-text-strong)] hover:bg-[var(--c-bg-secondary)] hover:text-[var(--c-arc-cyan)] transition-colors">Loot & Economy</a>
										<a routerLink="/arc-raiders/workshop" routerLinkActive="bg-[var(--c-bg-secondary)] text-[var(--c-arc-cyan)]" class="px-4 py-3 text-sm font-medium text-[var(--c-text-strong)] hover:bg-[var(--c-bg-secondary)] hover:text-[var(--c-arc-cyan)] transition-colors border-t border-[var(--c-border)]">Workshop</a>
									</div>
								</div>

								<!-- Gear & Equipment Dropdown -->
								<div class="relative group inline-flex items-center">
									<button class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors"
											[class.text-[var(--c-arc-cyan)]]="['/arc-raiders/weapons', '/arc-raiders/equipment'].includes(router.url)">
										<span>Gear & Equipment</span>
										<svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
									</button>
					
									<div class="absolute left-0 top-full hidden w-48 flex-col rounded-md border border-[var(--c-border)] bg-[var(--c-bg-primary)] shadow-lg group-hover:flex z-50 overflow-hidden">
										<a routerLink="/arc-raiders/weapons" routerLinkActive="bg-[var(--c-bg-secondary)] text-[var(--c-arc-cyan)]" class="px-4 py-3 text-sm font-medium text-[var(--c-text-strong)] hover:bg-[var(--c-bg-secondary)] hover:text-[var(--c-arc-cyan)] transition-colors">Weapons</a>
										<a routerLink="/arc-raiders/equipment" routerLinkActive="bg-[var(--c-bg-secondary)] text-[var(--c-arc-cyan)]" class="px-4 py-3 text-sm font-medium text-[var(--c-text-strong)] hover:bg-[var(--c-bg-secondary)] hover:text-[var(--c-arc-cyan)] transition-colors border-t border-[var(--c-border)]">Equipment</a>
									</div>
								</div>
								
							</nav>
						</div>
					</div>
				</header>

				<!-- Main Content -->
				<main class="flex-grow w-full mx-auto max-w-[var(--container)] px-4 py-8 sm:px-6 lg:px-8">
					<router-outlet></router-outlet>
				</main>

				<!-- Wiki Footer with Copyright -->
				<footer class="mt-auto bg-[var(--c-bg-secondary)] py-8 border-t border-[var(--c-border)]">
					<div class="mx-auto max-w-[var(--container)] px-4 sm:px-6 lg:px-8 text-center">
						<p class="text-xs text-[var(--c-text-muted)] max-w-3xl mx-auto">
							{{ t()['Embark Copyright'] }}
						</p>
					</div>
				</footer>
			</section>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersComponent {
	private readonly languageService = inject(LanguageService);
	protected readonly router = inject(Router);
	protected readonly isGearMenuOpen = signal(false);

	protected readonly t = computed(() => {
		return this.languageService.language() === 'ua' ? (ua as Record<string, string>) : (en as Record<string, string>);
	});
}
