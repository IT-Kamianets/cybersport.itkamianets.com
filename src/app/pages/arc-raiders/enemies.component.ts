import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-arc-raiders-enemies',
	template: `
		<div class="max-w-3xl">
			<h2 class="text-3xl font-semibold text-[var(--c-text-strong)] sm:text-4xl">ARC Machines</h2>
			<p class="mt-4 text-lg text-[var(--c-text)]">
				The ARC machines are relentless and adapt to your tactics. Learn their behaviors to survive.
			</p>
		</div>

		<div class="mt-8 grid gap-6 md:grid-cols-2">
			@for (enemy of enemies; track enemy.name) {
				<div class="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] overflow-hidden hover:border-[var(--c-arc-red)] transition-colors">
					<img [src]="enemy.image" [alt]="enemy.name" class="w-full h-48 object-cover" />
					<div class="p-5">
						<h3 class="text-xl font-bold text-[var(--c-text-strong)]">{{ enemy.name }}</h3>
						<p class="mt-2 text-sm text-[var(--c-text)]">{{ enemy.description }}</p>
						<div class="mt-4 flex gap-2">
							<span class="inline-flex items-center rounded-full bg-[var(--c-bg-primary)] px-2.5 py-0.5 text-xs font-medium text-[var(--c-arc-red)]">
								Weakness: {{ enemy.weakness }}
							</span>
						</div>
					</div>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersEnemiesComponent {
	protected readonly enemies = [
		{
			name: 'Drones',
			description: 'Scout units that alert heavier reinforcements if not dealt with quickly.',
			weakness: 'Optics',
			image: 'https://placehold.co/600x400/282828/FF0000?text=Drone',
		},
		{
			name: 'Ticks',
			description: 'Fast, swarming ground units that overwhelm unprepared raiders.',
			weakness: 'Explosives',
			image: 'https://placehold.co/600x400/282828/FF0000?text=Tick',
		},
		{
			name: 'Heavy Walkers',
			description: 'Massive heavily armored units with devastating firepower.',
			weakness: 'Joints / Back Vents',
			image: 'https://placehold.co/600x400/282828/FF0000?text=Heavy+Walker',
		},
	];
}
