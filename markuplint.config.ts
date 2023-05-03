import type { Config } from '@markuplint/ml-config'

// https://markuplint.dev/docs/configuration
const config: Config = {
  extends: [
    'markuplint:recommended'
  ],
  parser: {
    '\\.vue$': '@markuplint/vue-parser'
  },
  specs: {
    '\\.vue$': '@markuplint/vue-spec'
  },
  excludeFiles: [
    './node_modules/**/*'
  ]
}

export default config
