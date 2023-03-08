// https://qiita.com/ota-meshi/items/b29cfcf23226e952ac02
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],
  overrides: [
    {
      files: [
        '*.scss',
        '**/*.scss'
      ],
      extends: [
        'stylelint-config-recommended-scss'
      ]
    },
    {
      files: [
        '*.vue',
        '**/*.vue'
      ],
      extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue'
      ]
    }
  ]
}
