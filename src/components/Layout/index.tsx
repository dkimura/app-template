import React from 'react'
import { chakra } from '@chakra-ui/react'

type HeaderProps = {
  onClickLogo?: React.MouseEventHandler<HTMLAnchorElement>
}

const Header: React.VFC<HeaderProps> = ({ onClickLogo }) => (
  <chakra.header display="flex" justifyContent="center" p="4" w="full">
    <chakra.h1 color="twitter.500" fontSize="3xl" fontWeight="medium">
      <chakra.a href="/" onClick={onClickLogo} title="Todos">
        Todos
      </chakra.a>
    </chakra.h1>
  </chakra.header>
)

const Footer: React.VFC = () => (
  <chakra.footer>
    <span>copy dkimura</span>
  </chakra.footer>
)

type Props = HeaderProps

export const Layout: React.FC<Props> = ({ children, onClickLogo }) => (
  <chakra.div minH="100vh">
    <Header onClickLogo={onClickLogo} />
    <chakra.main>{children}</chakra.main>
    <Footer />
  </chakra.div>
)
