import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-arc-raiders-guides',
	template: `
		<div class="max-w-3xl">
			<h2 class="text-3xl font-semibold text-[var(--c-text-strong)] sm:text-4xl">Guides & Strategies</h2>
			<p class="mt-4 text-lg text-[var(--c-text)]">
				Learn how to survive the ARC menace, extract successfully, and become a legendary Raider.
			</p>
		</div>

		<div class="mt-8 space-y-6">
			@for (guide of guides; track guide.title) {
				<details class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] [&_summary::-webkit-details-marker]:hidden">
					<summary class="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors">
						<h3 class="text-lg font-medium">{{ guide.title }}</h3>
						<span class="shrink-0 rounded-full bg-[var(--c-bg-primary)] p-1.5 text-[var(--c-text-strong)] sm:p-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
							</svg>
						</span>
					</summary>
					<div class="border-t border-[var(--c-border)] px-5 py-4 text-sm leading-6 text-[var(--c-text)]">
						{{ guide.content }}
					</div>
				</details>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersGuidesComponent {
	protected readonly guides = [
		{
			title: 'Extraction Mechanics 101',
			content: 'Extraction points only become active at specific times or after completing objectives. Secure the area before calling in the dropship, as the noise will attract ARC machines and potentially other Raiders.',
		},
		{
			title: 'Looting vs Surviving',
			content: 'Greed gets you killed. Know when your inventory is full enough to justify extracting. A dead Raider keeps nothing.',
		},
		{
			title: 'Squad Roles',
			content: 'Balance your team. Having someone with a sniper to scout, a heavy hitter for ARC machines, and a medic/support player is highly recommended.',
		},
	];
}
