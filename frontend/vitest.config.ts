import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'c8', // Use c8 for coverage support
      reporter: ['text-summary', 'html'], // Output coverage report in text and HTML format
    },
  },
});
