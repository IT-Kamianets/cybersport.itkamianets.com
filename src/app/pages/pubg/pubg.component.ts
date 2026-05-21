import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	template: `
		<section class="bg-[var(--c-bg-primary)]">
			<div class="mx-auto max-w-[var(--container)] px-4 py-12 sm:px-6 lg:py-16">
				<div class="max-w-3xl">
					<p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--c-primary)]">
						Battle royale
					</p>
					<h1 class="mt-4 text-4xl font-semibold text-[var(--c-text-strong)] sm:text-5xl">
						PUBG
					</h1>
					<p class="mt-5 text-lg leading-8 text-[var(--c-text)]">
						Squad up for careful drops, disciplined rotations, and clutch endgames where
						communication matters as much as aim.
					</p>
				</div>

				<div class="mt-10 grid gap-4 md:grid-cols-3">
					@for (item of highlights; track item.title) {
						<article class="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5">
							<h2 class="text-lg font-semibold text-[var(--c-text-strong)]">{{ item.title }}</h2>
							<p class="mt-3 text-sm leading-6 text-[var(--c-text)]">{{ item.text }}</p>
						</article>
					}
				</div>
			</div>
		</section>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PubgComponent {
	protected readonly highlights = [
		{
			title: 'Squad formats',
			text: 'Duo and four-player sessions for both relaxed runs and competitive lobbies.',
		},
		{
			title: 'Map calls',
			text: 'Drop plans, vehicle routes, and zone reads help teams avoid random fights.',
		},
		{
			title: 'Final circles',
			text: 'Practice utility, positioning, and clear voice comms under pressure.',
		},
	];
}
