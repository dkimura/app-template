import type { AppProps } from 'next/app'

import ThemeProvider from '../providers/ThemeProvider'

const App = ({ Component }: AppProps) => (
  <ThemeProvider>
    <Component />
  </ThemeProvider>
)

export default App
