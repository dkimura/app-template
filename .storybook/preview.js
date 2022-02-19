/** @type {import('@storybook/react').Parameters} */
export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/** @type {import('@storybook/react').DecoratorFn[]} */
// export const decorators = []
