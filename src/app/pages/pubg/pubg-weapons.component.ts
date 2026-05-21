import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PubgService } from './pubg.service';

@Component({
	selector: 'app-pubg-weapons',
	standalone: true,
	imports: [TranslateDirective],
	template: `
		<div class="bg-[var(--c-bg-primary)] py-12 lg:py-20 animate-in fade-in slide-in-from-right-8 duration-500">
			<div class="mx-auto max-w-[var(--container)] px-4">
				<div class="max-w-4xl mb-16">
					<h2 class="text-4xl font-black uppercase tracking-tight text-[var(--c-text-strong)] sm:text-6xl mb-8 border-l-8 border-[var(--c-primary)] pl-6" translate>
						Armory
					</h2>
					<p class="text-xl text-[var(--c-text-muted)] leading-relaxed" translate>
						Master the diverse arsenal of BATTLEGROUNDS. From stealthy pistols to devastating sniper rifles.
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					@for (weapon of weapons(); track weapon.name) {
						<div class="group relative bg-[var(--c-bg-secondary)] border-2 border-[var(--c-border)] rounded-[2.5rem] overflow-hidden hover:border-[var(--c-primary)] transition-all duration-300 shadow-xl">
							<!-- Weapon Image Holder -->
							<div class="relative h-48 bg-[#1a2a3a]/50 flex items-center justify-center p-8 overflow-hidden">
								<div class="absolute inset-0 bg-gradient-to-br from-[var(--c-primary)]/5 to-transparent"></div>
								<img [src]="weapon.image" [alt]="weapon.name" class="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
							</div>

							<!-- Weapon Details -->
							<div class="p-8">
								<div class="flex items-start justify-between mb-4">
									<div>
										<h3 class="text-2xl font-black uppercase tracking-tight text-[var(--c-text-strong)] group-hover:text-[var(--c-primary)] transition-colors">{{ weapon.name }}</h3>
										<span class="text-xs font-bold uppercase tracking-widest text-[var(--c-text-muted)]" translate>{{ weapon.type }}</span>
									</div>
									<div class="px-3 py-1 bg-[var(--c-bg-primary)] border border-[var(--c-border)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--c-primary)]">
										{{ weapon.ammo }}
									</div>
								</div>

								<!-- Stats Grid -->
								<div class="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[var(--c-border)]">
									<div>
										<div class="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] mb-1" translate>Damage</div>
										<div class="flex items-center gap-2">
											<div class="h-1.5 flex-1 bg-[var(--c-bg-primary)] rounded-full overflow-hidden">
												<div class="h-full bg-[var(--c-primary)]" [style.width.%]="weapon.damage"></div>
											</div>
											<span class="text-xs font-black text-[var(--c-text-strong)]">{{ weapon.damage }}</span>
										</div>
									</div>
									<div>
										<div class="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] mb-1" translate>Effective Range</div>
										<div class="text-xs font-black text-[var(--c-text-strong)]" translate>{{ weapon.range }}</div>
									</div>
								</div>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PubgWeaponsComponent {
	private readonly pubgService = inject(PubgService);
	protected readonly weapons = this.pubgService.weapons;
}
