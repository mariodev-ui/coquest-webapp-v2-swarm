import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8', // Use Node.js built-in coverage support
      reporter: ['text-summary', 'html'], // Output coverage report in text and HTML format
    },
  },
});
