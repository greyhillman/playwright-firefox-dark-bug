import { defineConfig, devices } from '@playwright/test';

const BASE_URL = "http://localhost:8080/";

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'firefox-dark',
      use: {
        ...devices['Desktop Firefox'],
        colorScheme: "dark",
      },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
  },
});
