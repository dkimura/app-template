import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import Home from '.'

const meta: ComponentMeta<typeof Home> = {
  args: {},
  component: Home,
}

export default meta

export const Default: ComponentStoryObj<typeof Home> = {}
