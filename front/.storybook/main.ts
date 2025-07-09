import type { StorybookConfig } from '@storybook-vue/nuxt'

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
}

export default config
