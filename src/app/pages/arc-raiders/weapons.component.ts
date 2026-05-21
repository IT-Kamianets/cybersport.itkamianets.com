import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-arc-raiders-weapons',
	template: `
		<div class="max-w-3xl">
			<h2 class="text-3xl font-semibold text-[var(--c-text-strong)] sm:text-4xl">Weapons & Gear</h2>
			<p class="mt-4 text-lg text-[var(--c-text)]">
				Equip yourself with scavenged and crafted weapons to fight back the ARC.
			</p>
		</div>

		<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			@for (weapon of weapons; track weapon.name) {
				<div class="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 hover:border-[var(--c-arc-yellow)] transition-colors">
					<img [src]="weapon.image" [alt]="weapon.name" class="w-full h-32 object-cover rounded mb-4" />
					<h3 class="text-lg font-bold text-[var(--c-text-strong)]">{{ weapon.name }}</h3>
					<p class="text-xs text-[var(--c-text-muted)] uppercase tracking-wider mb-2">{{ weapon.type }}</p>
					<p class="text-sm text-[var(--c-text)]">{{ weapon.description }}</p>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersWeaponsComponent {
	protected readonly weapons = [
		{
			name: 'Assault Rifle',
			type: 'Primary',
			description: 'Versatile automatic weapon for mid-range engagements.',
			image: 'https://placehold.co/400x200/282828/FFFF00?text=Assault+Rifle',
		},
		{
			name: 'Sniper Rifle',
			type: 'Primary',
			description: 'High damage precision rifle for picking off targets at a distance.',
			image: 'https://placehold.co/400x200/282828/FFFF00?text=Sniper+Rifle',
		},
		{
			name: 'SMG',
			type: 'Secondary',
			description: 'High fire rate for close quarters panic situations.',
			image: 'https://placehold.co/400x200/282828/FFFF00?text=SMG',
		},
		{
			name: 'EMP Grenade',
			type: 'Gadget',
			description: 'Temporarily disables ARC machines in a radius.',
			image: 'https://placehold.co/400x200/282828/FFFF00?text=EMP+Grenade',
		},
	];
}
