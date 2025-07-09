import type { Preview } from '@storybook-vue/nuxt'
import {withThemeByClassName, withThemeByDataAttribute} from '@storybook/addon-themes';
import '../assets/css/main.css'

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                order: ['components', ['atoms', 'molecules', 'organisms', 'templates', 'pages'], '*'],
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /(Date)$/i,
            },
        },
        docs: { canvas: { sourceState: 'none' } },
    },
    tags: ['autodocs'],
     decorators: [
      withThemeByClassName({
            themes: {
          light: '',
              dark: 'dark',
            },
    defaultTheme: 'light',
      }),
 ]
}
export default preview;
