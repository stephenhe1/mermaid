import { defineConfig, devices } from '@playwright/test';

// Browsers were installed to /tmp/pw-browsers
process.env['PLAYWRIGHT_BROWSERS_PATH'] = '/tmp/pw-browsers';

export default defineConfig({
  testDir: './rq6-agent',
  timeout: 60_000,
  expect: { timeout: 30_000 },
  fullyParallel: true,
  retries: 1,
  workers: 4,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:9066',
    headless: true,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
