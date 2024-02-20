// vite.config.js
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import dts from 'vite-plugin-dts';

const testDef = {
  test: {
    exclude: [...configDefaults.exclude, './build/**', './dist/**'],
  },
};

export default defineConfig({
  base: './',
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: fileURLToPath(new URL('src/index.ts', import.meta.url)),
      formats: ['es'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ...testDef,
});
