export interface AppLanguage {
	code: string;
	name: string;
	nativeName: string;
	flagSrc: string;
	htmlLang: string;
	population: number;
}

export const LANGUAGES: readonly AppLanguage[] = [
	{
		code: 'en',
		name: 'English',
		nativeName: 'English',
		flagSrc: 'flags/united-kingdom.svg',
		htmlLang: 'en',
		population: 280,
	},
	{
		code: 'ua',
		name: 'Ukrainian',
		nativeName: 'Українська',
		flagSrc: 'flags/ukraine.svg',
		htmlLang: 'uk',
		population: 35,
	},
];
