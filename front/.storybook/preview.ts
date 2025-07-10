import {withThemeByClassName} from '@storybook/addon-themes'
import type {Preview} from '@storybook-vue/nuxt'
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
