import type {Meta, StoryObj} from '@nuxtjs/storybook'
import {delay, graphql, HttpResponse} from 'msw'

import component from './Card.vue'

const meta = { component } satisfies Meta<typeof component>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [graphql.query('SpaceQuery', () => HttpResponse.json({ data: { test: 'test' } }))],
    },
  },
}
export const Loading: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        graphql.query('SpaceQuery', async () => {
          await delay(1000000)
        }),
      ],
    },
  },
}
export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        graphql.query('SpaceQuery', async () => {
          await delay(1000)
          return HttpResponse.json({ errors: [{ message: 'Nop' }] })
        }),
      ],
    },
  },
}
