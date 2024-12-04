import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8080,
    headers: {
      // This header is messing up dark mode
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  build: {
    target: 'esnext',
  },
});
