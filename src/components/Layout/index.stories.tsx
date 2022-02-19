import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj, DecoratorFn } from '@storybook/react'

import { Layout } from '.'

const meta: ComponentMeta<typeof Layout> = {
  argTypes: { onClickLogo: { action: 'onClickLogo' } },
  args: {
    children: <div>Hello</div>,
    onClickLogo: (event) => {
      event.preventDefault()
      return action('onClickLogo')(event)
    },
  },
  component: Layout,
  excludeStories: ['withLayout'],
}

export default meta

export const Standard: ComponentStoryObj<typeof Layout> = {}

// Helper
type WithLayoutFn = (
  props?: ComponentMeta<typeof Layout>['args']
) => DecoratorFn
export const withLayout: WithLayoutFn = (props) => (Component) =>
  (
    <Layout {...props}>
      <Component />
    </Layout>
  )
