import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '@wawjs/ngx-translate';
import { environment } from '../environments/environment';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TopbarComponent, FooterComponent],
	template: `
		<!-- Alive Atmospheric Green Background Layer -->
		<div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#09110d]">
			<!-- Noise Overlay for Texture -->
			<div class="absolute inset-0 z-10 opacity-[0.06] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
			
			<!-- Floating Glowing Orbs -->
			<div class="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#153b22] blur-[120px] opacity-70 animate-float-slow"></div>
			<div class="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0e2916] blur-[100px] opacity-80 animate-float-medium"></div>
			<div class="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-[#1c4d2d] blur-[140px] opacity-40 animate-float-fast"></div>
		</div>

		<div class="relative z-10 flex min-h-screen flex-col">
			<app-topbar />
			<main class="flex-1">
				<router-outlet />
			</main>
			<app-footer />
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	private readonly _document = inject(DOCUMENT);
	private readonly _languageService = inject(LanguageService);

	constructor() {
		effect(() => {
			const language = this._languageService.language();
			const htmlLang =
				environment.languages.find((item) => item.code === language)?.htmlLang ?? language;

			if (htmlLang) {
				this._document.documentElement.lang = htmlLang;
			}
		});
	}
}
