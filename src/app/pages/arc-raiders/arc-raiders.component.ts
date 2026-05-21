import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	template: `
		<section class="bg-[var(--c-bg-primary)]">
			<div class="mx-auto max-w-[var(--container)] px-4 py-12 sm:px-6 lg:py-16">
				<div class="max-w-3xl">
					<p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--c-primary)]">
						Co-op extraction
					</p>
					<h1 class="mt-4 text-4xl font-semibold text-[var(--c-text-strong)] sm:text-5xl">
						ARC Raiders
					</h1>
					<p class="mt-5 text-lg leading-8 text-[var(--c-text)]">
						Plan raids, protect your squad, and extract with the right gear while every
						decision changes the risk of the next fight.
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
export class ArcRaidersComponent {
	protected readonly highlights = [
		{
			title: 'Squad routes',
			text: 'Pick entry points, objectives, and extraction paths before the pressure builds.',
		},
		{
			title: 'Shared objectives',
			text: 'Coordinate loot, covering angles, revives, and decisions to push or leave.',
		},
		{
			title: 'Risk control',
			text: 'Keep every run readable with simple callouts and clear fallback plans.',
		},
	];
}
