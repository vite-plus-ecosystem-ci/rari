import { defineConfig } from 'vite-plus'
import { fmt, lint } from './src/vite'

export default defineConfig({
  fmt,
  lint,
  pack: {
    entry: ['src/vite.ts', 'src/eslint.ts'],
    minify: true,
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
      neverBundle: true,
    },
  },
})
