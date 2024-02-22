/// <reference types="vitest" />
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import dts from 'vite-plugin-dts';

const testDef = {
  test: {
    exclude: [...configDefaults.exclude, './build/**', './dist/**'],
    coverage: {
      reporter: ['text', 'html'],
      extension: ['.ts'],
      include: ['src'],
      exclude: ['src/contracts', 'src/types'],
    },
  },
};

export default defineConfig({
  base: './',
  plugins: [
    dts({
      exclude: ['**/**.spec.**', '*.config.*'],
      insertTypesEntry: true,
    }),
  ],
  define: {
    PACKAGE_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: fileURLToPath(new URL('src/index.ts', import.meta.url)),
      name: 'nmscdCoordinateConversion',
      formats: ['es', 'umd'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ...testDef,
});
