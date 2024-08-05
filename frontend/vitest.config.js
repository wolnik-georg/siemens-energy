import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom', // Simulates a DOM environment for Vue components
    setupFiles: './src/tests/setup.js', // Add setup file if needed
    include: ['src/tests/unit/**/*.spec.js'], // Adjust the path to your test files
    coverage: {
      provider: 'istanbul', // Use 'c8' for built-in coverage
    },
  },
});
