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
							<nav class="hidden md:flex space-x-6">
								<a routerLink="/arc-raiders" [routerLinkActiveOptions]="{exact: true}" routerLinkActive="text-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)] transition-colors">Home</a>
								<a routerLink="/arc-raiders/enemies" routerLinkActive="text-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)] transition-colors">Enemies</a>
								<a routerLink="/arc-raiders/weapons" routerLinkActive="text-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)] transition-colors">Weapons</a>
								<a routerLink="/arc-raiders/maps" routerLinkActive="text-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)] transition-colors">Maps</a>
								<a routerLink="/arc-raiders/loot" routerLinkActive="text-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)] transition-colors">Loot</a>
								<a routerLink="/arc-raiders/workshop" routerLinkActive="text-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)] transition-colors">Workshop</a>
								<a routerLink="/arc-raiders/guides" routerLinkActive="text-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)] transition-colors">Guides</a>
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
