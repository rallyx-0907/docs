// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Placeholder until hosting is decided — powers sitemap + canonical/OG URLs.
	site: 'https://docs.rallyx.vn',
	integrations: [
		starlight({
			title: 'RallyX',
			description:
				'RallyX is a research lab building innovations for Vietnam. Rally, our first product, is a badminton court booking platform.',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			// Content lives at the repo root (no /en/ prefix) while still declaring
			// a locale, so adding `vi` later is a config change, not a file move.
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
			},
			customCss: ['./src/styles/rallyx.css'],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/rallyx-0907/docs/edit/main/',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/rallyx-0907' },
			],
			sidebar: [
				{
					label: 'RallyX',
					items: [
						{ label: 'About the lab', slug: 'about' },
						{ label: 'Missions', slug: 'missions' },
					],
				},
				{
					label: 'Rally',
					items: [{ autogenerate: { directory: 'rally' } }],
				},
			],
		}),
	],
});
