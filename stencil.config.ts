import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { inlineSvg } from 'stencil-inline-svg'

export const config: Config = {
  namespace: 'web-components',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        './src/scss/_variables.scss',
        './src/scss/_breakpoints.scss',
      ],
    }),
    inlineSvg(),
  ],
}
