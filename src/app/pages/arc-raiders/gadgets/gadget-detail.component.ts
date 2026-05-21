import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GADGETS } from './gadgets.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-gadget-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/gadgets" class="hover:text-[var(--c-arc-cyan)] transition-colors">Gadgets</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ gadget()?.name || 'Not Found' }}</span>
			</nav>

			@if (gadget(); as g) {
				<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
					
					<!-- Left Side: Main Content Column -->
					<div class="flex-1 space-y-10">
						
						<!-- Header -->
						<header>
							<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ g.name }}</h1>
							<p class="mt-2 text-lg text-[var(--c-arc-cyan)] font-medium uppercase tracking-widest">{{ g.category }} Gadget</p>
						</header>

						<!-- 1. Overview -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
							<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ g.description }}</p>
						</section>

						<!-- 2. Tactical Advice -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Tactical Advice</h2>
							<ul class="space-y-4">
								@for (tip of g.tacticalAdvice; track tip) {
									<li class="flex items-start gap-3 rounded-lg bg-[var(--c-bg-primary)] p-4 border-l-4 border-[var(--c-arc-cyan)]">
										<span class="text-[var(--c-text)]">{{ tip }}</span>
									</li>
								}
							</ul>
						</section>

					</div>

					<!-- Right Side: The Infobox (Sticky) -->
					<aside class="w-full lg:w-80 shrink-0">
						<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
							
							<div class="bg-[var(--c-bg-primary)] p-4 text-center border-b border-[var(--c-border)] flex items-center justify-center gap-3">
								<span class="text-2xl">{{ g.icon }}</span>
								<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)]">{{ g.name }}</h2>
							</div>
							
							<div class="bg-black/80 flex items-center justify-center p-8">
								<div class="text-7xl drop-shadow-[0_0_25px_rgba(0,255,255,0.4)] text-[var(--c-arc-cyan)]">
									{{ g.icon }}
								</div>
							</div>

							<div class="p-5 text-sm">
								<dl class="space-y-3">
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Category</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ g.category }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Activation</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ g.activationType }}</dd>
									</div>
									<div class="flex flex-col border-b border-[var(--c-border)] pb-2 gap-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Cooldown</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-[var(--c-arc-cyan)] font-mono">{{ g.cooldown }}</dd>
									</div>
									<div class="flex flex-col pt-1 gap-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Duration</dt>
										<dd class="font-medium text-[var(--c-text-strong)] font-mono">{{ g.duration }}</dd>
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
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Gadget Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The gadget you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/gadgets" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-cyan)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Gadgets Hub
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersGadgetDetailComponent {
	private readonly route = inject(ActivatedRoute);

	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	protected readonly gadget = computed(() => {
		const id = this.idParam();
		return GADGETS.find(g => g.id === id);
	});
}
