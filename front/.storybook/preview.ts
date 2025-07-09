import type { Preview } from '@storybook-vue/nuxt'

const preview: Preview = {
    parameters: {
        darkMode: {
            current: 'dark',
            darkClass: 'dark',
            lightClass: 'light',
            stylePreview: true,
        },
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
}
export default preview;
