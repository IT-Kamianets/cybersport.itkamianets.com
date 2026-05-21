import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CompanyService } from '../../feature/company/company.service';

@Component({
	imports: [RouterLink, TranslateDirective],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	protected readonly company = inject(CompanyService).company;
	protected readonly gamePages = [
		{
			name: 'Factorio',
			description: 'Automation, logistics, blueprints, and co-op factory planning.',
			path: '/factorio',
		},
		{
			name: 'PUBG',
			description: 'Squad drops, map rotations, survival pressure, and final-circle fights.',
			path: '/pubg',
		},
		{
			name: 'Dota 2',
			description: 'Drafts, roles, team fights, and structured five-player strategy.',
			path: '/dota2',
		},
		{
			name: 'ARC Raiders',
			description: 'Co-op raids, extraction routes, shared objectives, and risk control.',
			path: '/arc-raiders',
		},
	];
}
