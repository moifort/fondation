import type { Meta, StoryObj } from '@nuxtjs/storybook'
import component from './CardIntl.vue'

const meta = { component } satisfies Meta<typeof component>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
