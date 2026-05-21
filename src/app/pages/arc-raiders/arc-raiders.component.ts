import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '@wawjs/ngx-translate';

import en from './i18n/en.json';
import ua from './i18n/ua.json';

@Component({
	selector: 'app-arc-raiders',
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	styleUrl: './arc-raiders.scss',
	template: `
		<div class="arc-raiders-theme">
			<section class="min-h-screen bg-[var(--c-bg-primary)]" style="--c-primary: var(--c-arc-cyan);">
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
								<a routerLink="/arc-raiders" routerLinkActive="text-[var(--c-arc-cyan)] border-b-2 border-[var(--c-arc-cyan)]" [routerLinkActiveOptions]="{exact: true}" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)]">
									<span>{{ t()['Wiki Home'] }}</span>
								</a>
								<a routerLink="/arc-raiders/enemies" routerLinkActive="text-[var(--c-arc-cyan)] border-b-2 border-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)]">
									<span>{{ t()['Enemies'] }}</span>
								</a>
								<a routerLink="/arc-raiders/weapons" routerLinkActive="text-[var(--c-arc-cyan)] border-b-2 border-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)]">
									<span>{{ t()['Weapons'] }}</span>
								</a>
								<a routerLink="/arc-raiders/maps" routerLinkActive="text-[var(--c-arc-cyan)] border-b-2 border-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)]">
									<span>{{ t()['Maps'] }}</span>
								</a>

								<a routerLink="/arc-raiders/loot" routerLinkActive="text-[var(--c-arc-cyan)] border-b-2 border-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)]">
									<span>Loot & Materials</span>
								</a>
								
								<!-- Gear & Mods Dropdown -->
								<div class="relative flex items-center">
									<button (click)="isGearMenuOpen.set(!isGearMenuOpen())" class="inline-flex items-center gap-1 px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)] transition-colors">
										<span>Gear & Mods</span>
										<svg class="h-4 w-4 transition-transform" [class.rotate-180]="isGearMenuOpen()" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
									</button>
									
									@if (isGearMenuOpen()) {
										<!-- Overlay to close menu when clicking outside -->
										<div class="fixed inset-0 z-40" (click)="isGearMenuOpen.set(false)"></div>
										
										<div class="absolute right-0 top-full mt-2 w-48 rounded-md bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)] z-50 border border-[var(--c-border)] overflow-hidden">
											<div class="py-1" role="menu" aria-orientation="vertical" (click)="isGearMenuOpen.set(false)">
												<a routerLink="/arc-raiders/gadgets" routerLinkActive="bg-[var(--c-bg-primary)] text-[var(--c-arc-cyan)]" class="block px-4 py-3 text-sm text-[var(--c-text-strong)] hover:bg-[var(--c-bg-primary)] hover:text-[var(--c-arc-cyan)] transition-colors">Gadgets</a>
												<a routerLink="/arc-raiders/consumables" routerLinkActive="bg-[var(--c-bg-primary)] text-[var(--c-arc-cyan)]" class="block px-4 py-3 text-sm text-[var(--c-text-strong)] hover:bg-[var(--c-bg-primary)] hover:text-[var(--c-arc-cyan)] transition-colors border-t border-[var(--c-border)]">Consumables</a>
												<a routerLink="/arc-raiders/mods" routerLinkActive="bg-[var(--c-bg-primary)] text-[var(--c-arc-cyan)]" class="block px-4 py-3 text-sm text-[var(--c-text-strong)] hover:bg-[var(--c-bg-primary)] hover:text-[var(--c-arc-cyan)] transition-colors border-t border-[var(--c-border)]">Weapon Mods</a>
											</div>
										</div>
									}
								</div>

								<a routerLink="/arc-raiders/guides" routerLinkActive="text-[var(--c-arc-cyan)] border-b-2 border-[var(--c-arc-cyan)]" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--c-text-strong)] hover:text-[var(--c-arc-cyan)]">
									<span>{{ t()['Guides'] }}</span>
								</a>
							</nav>
						</div>
					</div>
				</header>

				<!-- Main Content -->
				<main class="mx-auto max-w-[var(--container)] px-4 py-8 sm:px-6 lg:px-8">
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
	protected readonly isGearMenuOpen = signal(false);

	protected readonly t = computed(() => {
		return this.languageService.language() === 'ua' ? (ua as Record<string, string>) : (en as Record<string, string>);
	});
}
