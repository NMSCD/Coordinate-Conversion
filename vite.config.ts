// vite.config.js
import path, { resolve } from 'path';
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
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'nmscdCoordinateConversion',
      formats: ['es', 'umd'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ...testDef,
});
