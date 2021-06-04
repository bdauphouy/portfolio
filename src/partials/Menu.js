import styled from 'styled-components'
import { Paragraph } from '../components/Components'
import gsap from 'gsap'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Menu = ({
  styles,
  palette,
  tablet,
  menu,
  setMenu,
  closeMenu,
  setCloseMenu,
}) => {
  const location = useLocation()

  useEffect(() => {
    console.log(location)
    const view = document.querySelector(
      `#${location.pathname === '/' ? 'home' : location.pathname.slice(1)}`,
    )
    setTimeout(() => view.scrollIntoView(), 500)
  }, [location])

  useEffect(() => {
    menu && gsap.to('#menu', { opacity: 1, duration: 0.5 })
  }, [menu])

  useEffect(() => {
    closeMenu && gsap.to('#menu', { opacity: 0, duration: 0.5 })
  }, [closeMenu])

  return (
    <MenuContainer
      padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
      background={styles.colors.background}
      id="menu">
      <NavLinks>
        <li>
          <NavLink to="/about" onClick={() => setCloseMenu(true)}>
            <NavItem size={styles.titles.t1} color={styles.colors.text} stroked>
              About
            </NavItem>
          </NavLink>
        </li>
        <li>
          <NavLink to="/use" onClick={() => setCloseMenu(true)}>
            <NavItem size={styles.titles.t1} color={styles.colors.text} stroked>
              What I use
            </NavItem>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setCloseMenu(true)}>
            <NavItem size={styles.titles.t1} color={styles.colors.text} stroked>
              Contact
            </NavItem>
          </NavLink>
        </li>
      </NavLinks>
      <Paragraph
        color={palette.grays.g1}
        size={styles.paragraphs.p1}
        style={{
          marginTop: '80px',
          position: 'absolute',
          bottom: '30px',
          right: tablet ? '50%' : styles.paddings.p1,
          transform: tablet && 'translateX(50%)',
          whiteSpace: 'nowrap',
        }}>
        © 2021 - Baptiste Dauphouy
      </Paragraph>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${props => props.background};
  z-index: 98;
  padding: ${props => props.padding};
  display: flex;
  align-items: center;
  opacity: 0;
`

const NavLinks = styled.ul`
  list-style: none;

  & a {
    text-decoration: none;
    display: inline-block;
  }
`

const NavItem = styled.h2`
  font-size: ${props => props.size};
  -webkit-text-stroke: ${props => props.stroked && `1px ${props.color}`};
  color: ${props => (props.stroked ? 'transparent' : props.color)};
  line-height: ${props => props.size};
  transition: color 0.4s;
  margin-top: 20px;

  &:hover {
    color: ${props => props.color};
  }
`

export default Menu
