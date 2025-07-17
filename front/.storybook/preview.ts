import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook-vue/nuxt' // @ts-ignore
import { useI18n, watchEffect } from '#imports'
import '../assets/css/main.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        order: ['components', ['atoms', 'molecules', 'organisms', 'templates', 'pages'], '*'],
      },
    },
    controls: { matchers: { color: /(background|color)$/i, date: /(Date)$/i } },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
    }),
    (story, context) => {
      const { setLocale } = useI18n()
      watchEffect(() => {
        setLocale(context.globals.locale || navigator.language || 'en')
      })
      return story()
    },
  ],
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
        ],
      },
    },
  },
  initialGlobals: {
    locale: 'en',
  },
}
export default preview
