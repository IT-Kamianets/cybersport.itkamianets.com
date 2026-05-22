import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@wawjs/ngx-translate';
import { WORKSHOP_STATIONS } from './workshop.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-workshop-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<header class="mb-10 text-center">
				<h1 class="text-5xl font-black tracking-widest text-[var(--c-text-strong)] drop-shadow-md">{{ ts.translate('WORKSHOP_HUB.TITLE')() }}</h1>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-[var(--c-text)]">
					{{ ts.translate('WORKSHOP_HUB.SUBTITLE')() }}
				</p>
			</header>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
				@for (station of stations; track station.id) {
					<a [routerLink]="['/arc-raiders/workshop', station.id]" class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-cyan)] hover:shadow-lg flex flex-col">
						
						<!-- Hover Glow Effect -->
						<div class="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-[var(--c-arc-cyan)] to-transparent opacity-0 blur transition-opacity group-hover:opacity-20"></div>
						
						<!-- Image Section -->
						<div class="relative h-48 w-full overflow-hidden bg-[var(--c-bg-primary)] border-b border-[var(--c-border)] group-hover:border-[var(--c-arc-cyan)] transition-colors">
							@if (station.image) {
								<img [src]="station.image" [alt]="station.name" class="h-full w-full object-contain p-2 opacity-80 mix-blend-screen transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100" />
							}
							<div class="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--c-bg-primary)]/80 backdrop-blur-sm border border-[var(--c-border)] text-2xl group-hover:border-[var(--c-arc-cyan)] transition-colors shadow-sm">
								{{ station.icon }}
							</div>
							<div class="absolute right-4 top-4 rounded bg-black/60 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-[var(--c-arc-cyan)] border border-[var(--c-border)] shadow-sm">
								{{ ts.translate('WORKSHOP_HUB.LBL_TIERS')().replace('{{count}}', station.tiers.length.toString()) }}
							</div>
						</div>

						<div class="relative z-10 p-6 flex-1 flex flex-col">
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
	protected readonly ts = inject(TranslateService);

	protected readonly stations = WORKSHOP_STATIONS;
}
