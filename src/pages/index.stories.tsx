import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import * as stories from '../components/Layout/index.stories'

import Home from '.'

const meta: ComponentMeta<typeof Home> = {
  args: {},
  component: Home,
  decorators: [stories.withLayout(stories.default.args)],
}

export default meta

export const Default: ComponentStoryObj<typeof Home> = {}
