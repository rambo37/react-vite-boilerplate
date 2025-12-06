import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    // Exclude E2E tests from unit test runs
    exclude: ['**/e2e/**', '**/node_modules/**'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        // Test files
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        'tests/',
        '**/e2e/**',

        // Build outputs
        'dist/',
        'build/',

        // Config files
        '**/*.config.{ts,js}',
        'vite.config.ts',
        'vitest.config.ts',
        'playwright.config.ts',

        // Type definition files
        '**/*.d.ts',
        '**/types/**',

        // Entry point (typically not unit tested)
        'src/main.tsx',

        // Dependencies
        'node_modules/'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
