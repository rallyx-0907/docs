import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// Declared because the site sets `locales`. Add `src/content/i18n/vi.json`
	// here to override Starlight's built-in UI strings for a language.
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
