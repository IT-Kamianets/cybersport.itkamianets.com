import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CONSUMABLES } from './consumables.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-consumable-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/consumables" class="hover:text-[var(--c-arc-green)] transition-colors">Consumables</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ consumable()?.name || 'Not Found' }}</span>
			</nav>

			@if (consumable(); as c) {
				<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
					
					<!-- Left Side: Main Content Column -->
					<div class="flex-1 space-y-10">
						
						<!-- Header -->
						<header>
							<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ c.name }}</h1>
							<p class="mt-2 text-lg text-[var(--c-arc-green)] font-medium uppercase tracking-widest">{{ c.category }} Supply</p>
						</header>

						<!-- 1. Overview & Effect -->
						<section>
							<div class="rounded-lg bg-[var(--c-arc-green)]/10 p-5 border-l-4 border-[var(--c-arc-green)] mb-8">
								<h2 class="text-sm font-bold uppercase tracking-wider text-[var(--c-arc-green)] mb-1">Primary Effect</h2>
								<p class="text-xl font-medium text-[var(--c-text-strong)]">{{ c.effect }}</p>
							</div>

							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
							<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ c.description }}</p>
						</section>

					</div>

					<!-- Right Side: The Infobox (Sticky) -->
					<aside class="w-full lg:w-80 shrink-0">
						<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
							
							<div class="bg-[var(--c-bg-primary)] p-4 text-center border-b border-[var(--c-border)] flex items-center justify-center gap-3">
								<span class="text-2xl">{{ c.icon }}</span>
								<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)]">{{ c.name }}</h2>
							</div>
							
							<div class="bg-black/80 flex items-center justify-center p-8">
								<div class="text-7xl drop-shadow-[0_0_25px_rgba(0,255,0,0.4)] text-[var(--c-arc-green)]">
									{{ c.icon }}
								</div>
							</div>

							<div class="p-5 text-sm">
								<dl class="space-y-3">
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Category</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ c.category }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Max Stack Size</dt>
										<dd class="font-bold text-[var(--c-text-strong)] text-right">{{ c.stackSize }}</dd>
									</div>
									<div class="flex justify-between pt-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Use Time</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right text-[var(--c-arc-green)]">{{ c.useTime }}</dd>
									</div>
								</dl>
							</div>
						</div>
					</aside>

				</div>
			} @else {
				<!-- Not Found State -->
				<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-12 text-center shadow-[var(--shadow-sm)]">
					<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-bg-primary)] text-3xl">
						❓
					</div>
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Item Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The consumable you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/consumables" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-green)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Supplies
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersConsumableDetailComponent {
	private readonly route = inject(ActivatedRoute);

	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	protected readonly consumable = computed(() => {
		const id = this.idParam();
		return CONSUMABLES.find(c => c.id === id);
	});
}
