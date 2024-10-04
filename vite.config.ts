import { sveltekit } from '@sveltejs/kit/vite';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(() => {
	// Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
	process.env = { ...process.env, ...loadEnv('', process.cwd()) };

	return {
		plugins: [sveltekit()],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
			globals: true,
			environment: 'jsdom'
		}
	};
});
