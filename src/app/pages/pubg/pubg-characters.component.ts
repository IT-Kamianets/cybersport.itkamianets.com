import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PubgService } from './pubg.service';

@Component({
	selector: 'app-pubg-characters',
	standalone: true,
	imports: [TranslateDirective],
	template: `
		<div class="bg-[var(--c-bg-primary)] py-12 lg:py-20 animate-in fade-in slide-in-from-right-8 duration-500">
			<div class="mx-auto max-w-[var(--container)] px-4">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-black uppercase tracking-tight text-[var(--c-text-strong)] sm:text-6xl mb-6" translate>
						Characters & Roles
					</h2>
					<p class="mx-auto max-w-2xl text-lg text-[var(--c-text-muted)]" translate>
						Every member of the squad has a vital part to play. Mastery of your role is the key to chicken dinner.
					</p>
				</div>

				<!-- Roles Grid -->
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-24">
					@for (role of roles(); track role.title) {
						<div class="group relative overflow-hidden rounded-[2.5rem] bg-[var(--c-bg-secondary)] border-2 border-[var(--c-border)] p-8 transition-all hover:border-[var(--c-primary)] hover:-translate-y-2">
							<div class="absolute -right-4 -top-4 text-9xl opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-500">
								{{ role.icon }}
							</div>
							<div class="relative z-10">
								<div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--c-primary)]/10 text-4xl shadow-inner">
									{{ role.icon }}
								</div>
								<h3 class="text-2xl font-black text-[var(--c-text-strong)] mb-4" translate>{{ role.title }}</h3>
								<p class="text-[var(--c-text)] leading-relaxed" translate>{{ role.description }}</p>
							</div>
						</div>
					}
				</div>

				<!-- Customization Section -->
				<div class="rounded-[3rem] bg-gradient-to-br from-[var(--c-bg-secondary)] to-[var(--c-bg-primary)] border border-[var(--c-border)] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
					<div class="flex-1 space-y-6">
						<h3 class="text-3xl font-black uppercase tracking-tight text-[var(--c-text-strong)]" translate>Personal Style</h3>
						<p class="text-lg leading-relaxed text-[var(--c-text)]" translate>
							In PUBG, your character is your identity. From tactical military gear to flamboyant 
							streetwear, the customization system allows you to stand out or blend into the environment. 
							Skins aren't just for looks; some camouflages can provide a slight tactical advantage on certain terrains.
						</p>
						<div class="flex flex-wrap gap-4">
							<span class="px-4 py-2 rounded-full bg-[var(--c-primary)]/10 text-[var(--c-primary)] font-bold text-sm uppercase tracking-widest border border-[var(--c-primary)]/20" translate>Epic Skins</span>
							<span class="px-4 py-2 rounded-full bg-[var(--c-primary)]/10 text-[var(--c-primary)] font-bold text-sm uppercase tracking-widest border border-[var(--c-primary)]/20" translate>Gear Sets</span>
							<span class="px-4 py-2 rounded-full bg-[var(--c-primary)]/10 text-[var(--c-primary)] font-bold text-sm uppercase tracking-widest border border-[var(--c-primary)]/20" translate>Weapon Charms</span>
						</div>
					</div>
					<div class="w-full lg:w-1/3 grid grid-cols-2 gap-4">
						<div class="aspect-[3/4] rounded-2xl bg-[#2a3b4c] border border-white/10 overflow-hidden shadow-lg">
							<img src="https://web-assets.pubg.com/pubg-world/assets/images/characters/bg-characters.jpg" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500">
						</div>
						<div class="mt-8 aspect-[3/4] rounded-2xl bg-[#3d4e5f] border border-white/10 overflow-hidden shadow-lg">
							<img src="https://web-assets.pubg.com/pubg-world/assets/images/characters/bg-characters.jpg" class="w-full h-full object-cover scale-x-[-1] grayscale hover:grayscale-0 transition-all duration-500">
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PubgCharactersComponent {
	protected readonly roles = inject(PubgService).roles;
}
