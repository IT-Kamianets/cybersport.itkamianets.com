import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-pubg-about',
	standalone: true,
	imports: [TranslateDirective],
	template: `
		<div class="bg-[var(--c-bg-primary)] py-12 lg:py-20 animate-in fade-in slide-in-from-right-8 duration-500">
			<div class="mx-auto max-w-[var(--container)] px-4">
				<div class="max-w-4xl">
					<h2 class="text-4xl font-black uppercase tracking-tight text-[var(--c-text-strong)] sm:text-6xl mb-8 border-l-8 border-[var(--c-primary)] pl-6" translate>
						About PUBG
					</h2>
					<p class="text-xl text-[var(--c-text-muted)] leading-relaxed mb-12" translate>
						The pioneer of the Battle Royale genre that changed the gaming landscape forever.
					</p>
				</div>

				<div class="grid gap-16 lg:grid-cols-2 items-center mb-24">
					<div class="space-y-8 text-lg leading-relaxed text-[var(--c-text)]">
						<section>
							<h3 class="text-2xl font-bold text-[var(--c-text-strong)] mb-4" translate>The Concept</h3>
							<p translate>
								PUBG: BATTLEGROUNDS is a high-stakes survival shooter where 100 players are dropped onto an island. 
								The goal is simple: be the last person or squad alive. As the match progresses, a "Blue Zone" 
								forces players into a smaller and smaller circle, ensuring intense encounters.
							</p>
						</section>
						<section>
							<h3 class="text-2xl font-bold text-[var(--c-text-strong)] mb-4" translate>Tactical Depth</h3>
							<p translate>
								Unlike arcade shooters, PUBG emphasizes realism. Bullet drop, travel time, and recoil 
								management are crucial. Every decision, from when to jump out of the plane to 
								which house to hide in, can mean the difference between victory and defeat.
							</p>
						</section>
					</div>
					<div class="relative group">
						<div class="absolute -inset-4 bg-[var(--c-primary)] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity rounded-[3rem]"></div>
						<div class="relative rounded-[2.5rem] overflow-hidden border-2 border-[var(--c-border)] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
							<img src="https://wstatic-prod-boc.krafton.com/PUBG_OFFICIAL/20230328/mbxdf34X_thumb.png" alt="PUBG Gameplay" class="w-full h-full object-cover">
						</div>
					</div>
				</div>

				<!-- Stats/Features Grid -->
				<div class="grid gap-6 md:grid-cols-3">
					<div class="p-8 rounded-[2rem] bg-[var(--c-bg-secondary)] border border-[var(--c-border)] hover:border-[var(--c-primary)] transition-colors">
						<div class="text-4xl font-black text-[var(--c-primary)] mb-2">100</div>
						<div class="text-sm font-bold uppercase tracking-widest text-[var(--c-text-muted)]" translate>Players per match</div>
					</div>
					<div class="p-8 rounded-[2rem] bg-[var(--c-bg-secondary)] border border-[var(--c-border)] hover:border-[var(--c-primary)] transition-colors">
						<div class="text-4xl font-black text-[var(--c-primary)] mb-2">9+</div>
						<div class="text-sm font-bold uppercase tracking-widest text-[var(--c-text-muted)]" translate>Unique maps</div>
					</div>
					<div class="p-8 rounded-[2rem] bg-[var(--c-bg-secondary)] border border-[var(--c-border)] hover:border-[var(--c-primary)] transition-colors">
						<div class="text-4xl font-black text-[var(--c-primary)] mb-2">40+</div>
						<div class="text-sm font-bold uppercase tracking-widest text-[var(--c-text-muted)]" translate>Weapons to master</div>
					</div>
				</div>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PubgAboutComponent {}
