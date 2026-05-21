import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WORKSHOP_STATIONS } from './workshop.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-workshop-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<header class="mb-10 text-center">
				<h1 class="text-5xl font-black tracking-widest text-[var(--c-text-strong)] drop-shadow-md">WORKSHOP STATIONS</h1>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-[var(--c-text)]">
					Manage and upgrade your specialized crafting stations in Speranza to unlock advanced weaponry, gear, and supplies.
				</p>
			</header>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
				@for (station of stations; track station.id) {
					<a [routerLink]="['/arc-raiders/workshop', station.id]" class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 shadow-[var(--shadow-md)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-cyan)] hover:shadow-lg">
						
						<!-- Hover Glow Effect -->
						<div class="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-[var(--c-arc-cyan)] to-transparent opacity-0 blur transition-opacity group-hover:opacity-20"></div>
						
						<div class="relative z-10">
							<div class="mb-4 flex items-center justify-between">
								<div class="flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--c-bg-primary)] border border-[var(--c-border)] text-3xl group-hover:border-[var(--c-arc-cyan)] transition-colors">
									{{ station.icon }}
								</div>
								<span class="text-sm font-bold text-[var(--c-arc-cyan)]">{{ station.tiers.length }} Tiers</span>
							</div>
							
							<h2 class="mb-2 text-2xl font-black tracking-wide text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors">{{ station.name }}</h2>
							<p class="text-sm leading-relaxed text-[var(--c-text-muted)] line-clamp-3">{{ station.description }}</p>
						</div>
					</a>
				}
			</div>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersWorkshopHubComponent {
	protected readonly stations = WORKSHOP_STATIONS;
}
