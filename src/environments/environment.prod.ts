import { LANGUAGES } from '../app/feature/language/language.const';
import type { AppLanguage } from '../app/feature/language/language.const';

export const environment: {
	apiUrl: string;
	appVersion: string;
	production: boolean;
	companyId: string;
	defaultLanguage: string;
	languages: readonly AppLanguage[];
} = {
	apiUrl: 'https://it.webart.work',
	appVersion: '1.0.0',
	production: true,
	companyId: 'demo',
	defaultLanguage: 'ua',
	languages: LANGUAGES,
};
