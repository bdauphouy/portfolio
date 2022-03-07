import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = ({ styles, theme }) => {
  const [logoSrc, setLogoSrc] = useState('/logo-white.svg')

  useEffect(() => {
    setLogoSrc(theme === 'light' ? '/logo-black.svg' : '/logo-white.svg')
  }, [theme])

  return (
    <Nav id="nav" padding={styles.paddings.p2}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <LogoContainer>
          <Logo data-nav-text data-gsap-text src={logoSrc}></Logo>
          <Name
            data-nav-text
            data-gsap-text
            size={styles.paragraphs.p1}
            color={styles.colors.text}>
            baptiste
            <br />
            dauphouy
          </Name>
        </LogoContainer>
      </NavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${props => props.padding};
`

const Name = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: 500;
  line-height: ${props => `calc(${1.2 * parseFloat(props.size)}px)`};
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Logo = styled.img`
  width: 50px;
`

export default Navbar
