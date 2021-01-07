import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { inlineSvg } from 'stencil-inline-svg'

export const config: Config = {
  namespace: 'web-components',
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
        './src/globals/_variables.scss',
        './src/globals/_breakpoints.scss',
      ],
    }),
    inlineSvg(),
  ],
}
