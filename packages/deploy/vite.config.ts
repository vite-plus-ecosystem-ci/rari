import { defineConfig } from 'vite-plus'
import { monorepoFmt, monorepoLint } from '../../.config/lint/monorepo'

export default defineConfig({
  fmt: monorepoFmt,
  lint: monorepoLint,
  pack: {
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
    },
    entry: ['src/index.ts', 'src/railway.ts', 'src/render.ts'],
    minify: true,
  },
})
