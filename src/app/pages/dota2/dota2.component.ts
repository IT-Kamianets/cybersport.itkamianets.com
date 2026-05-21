import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	template: `
		<section class="bg-[var(--c-bg-primary)]">
			<div class="mx-auto max-w-[var(--container)] px-4 py-12 sm:px-6 lg:py-16">
				<div class="max-w-3xl">
					<p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--c-primary)]">
						Five-player strategy
					</p>
					<h1 class="mt-4 text-4xl font-semibold text-[var(--c-text-strong)] sm:text-5xl">
						Dota 2
					</h1>
					<p class="mt-5 text-lg leading-8 text-[var(--c-text)]">
						Play structured Dota 2 matches with focused drafts, defined roles, and enough
						post-game discussion to make the next match sharper.
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
export class Dota2Component {
	protected readonly highlights = [
		{
			title: 'Team drafts',
			text: 'Build clear lane plans, win conditions, and hero combinations before the horn.',
		},
		{
			title: 'Role practice',
			text: 'Carry, mid, offlane, support, and captain roles all get room to improve.',
		},
		{
			title: 'Match review',
			text: 'Review key fights, objective timing, and map control without overcomplicating it.',
		},
	];
}
