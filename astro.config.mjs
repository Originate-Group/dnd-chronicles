// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dnd-chronicles.aaron-7fc.workers.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});