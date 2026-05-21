import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PubgService } from './pubg.service';

@Component({
	selector: 'app-pubg-strategy',
	standalone: true,
	imports: [TranslateDirective],
	template: `
		<div class="bg-[var(--c-bg-primary)] py-12 lg:py-20 animate-in fade-in slide-in-from-right-8 duration-500">
			<div class="mx-auto max-w-[var(--container)] px-4">
				<div class="mb-16">
					<h2 class="text-4xl font-black uppercase tracking-tight text-[var(--c-text-strong)] sm:text-6xl mb-6" translate>
						Strategy & Survival
					</h2>
					<p class="text-xl text-[var(--c-text-muted)] max-w-3xl" translate>
						Master the essentials of looting, combat, and rotation to secure your spot at the top.
					</p>
				</div>

				<!-- Strategy Sections -->
				<div class="space-y-6">
					@for (tip of tips(); track tip.title) {
						<div class="group relative overflow-hidden rounded-[2.5rem] bg-[var(--c-bg-secondary)] border-2 border-[var(--c-border)] p-8 lg:p-12 transition-all hover:border-[var(--c-primary)]">
							<div class="flex flex-col lg:flex-row gap-8 items-start relative z-10">
								<div class="flex-shrink-0 h-20 w-20 flex items-center justify-center rounded-3xl bg-[var(--c-primary)] text-white text-4xl font-black shadow-[0_10px_30px_rgba(255,77,0,0.3)] group-hover:rotate-12 transition-transform duration-500">
									{{ $index + 1 }}
								</div>
								<div class="flex-1">
									<h3 class="text-3xl font-black text-[var(--c-text-strong)] mb-4 uppercase tracking-tight" translate>{{ tip.title }}</h3>
									<p class="text-lg text-[var(--c-text)] leading-relaxed mb-6" translate>{{ tip.content }}</p>
									<div class="flex flex-wrap gap-3">
										<span class="px-3 py-1 rounded-full bg-[var(--c-border)] text-[var(--c-text-muted)] text-[10px] font-black uppercase tracking-widest" translate>Professional Tip</span>
										<span class="px-3 py-1 rounded-full bg-[var(--c-border)] text-[var(--c-text-muted)] text-[10px] font-black uppercase tracking-widest" translate>Tactical Advantage</span>
									</div>
								</div>
							</div>
							
							<!-- Background Decorative Element -->
							<div class="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--c-primary)]/5 rounded-full blur-3xl group-hover:bg-[var(--c-primary)]/10 transition-colors"></div>
						</div>
					}
				</div>

				<!-- Quick Tips Grid -->
				<div class="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<div class="p-8 rounded-[2rem] bg-black text-white border border-white/10 flex flex-col items-center text-center">
						<div class="text-3xl mb-4">💨</div>
						<h4 class="font-black uppercase tracking-widest text-sm mb-2" translate>Blue Zone</h4>
						<p class="text-xs text-white/60 leading-relaxed" translate>Stay ahead of the circle. Late-game blue zone damage is lethal.</p>
					</div>
					<div class="p-8 rounded-[2rem] bg-black text-white border border-white/10 flex flex-col items-center text-center">
						<div class="text-3xl mb-4">🚗</div>
						<h4 class="font-black uppercase tracking-widest text-sm mb-2" translate>Vehicles</h4>
						<p class="text-xs text-white/60 leading-relaxed" translate>Always have a getaway vehicle. Tires are easy to pop, protect them.</p>
					</div>
					<div class="p-8 rounded-[2rem] bg-black text-white border border-white/10 flex flex-col items-center text-center">
						<div class="text-3xl mb-4">🩹</div>
						<h4 class="font-black uppercase tracking-widest text-sm mb-2" translate>Healing</h4>
						<p class="text-xs text-white/60 leading-relaxed" translate>Prioritize boosts (Painkillers/Energy drinks) before final fights.</p>
					</div>
					<div class="p-8 rounded-[2rem] bg-black text-white border border-white/10 flex flex-col items-center text-center">
						<div class="text-3xl mb-4">🔈</div>
						<h4 class="font-black uppercase tracking-widest text-sm mb-2" translate>Sound</h4>
						<p class="text-xs text-white/60 leading-relaxed" translate>Use headphones. Footsteps and gunshots tell you exactly where they are.</p>
					</div>
				</div>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PubgStrategyComponent {
	protected readonly tips = inject(PubgService).tips;
}
