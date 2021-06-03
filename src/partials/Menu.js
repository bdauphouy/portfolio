import styled from 'styled-components'
import { Title, Paragraph } from '../components/Components'
import gsap from 'gsap'
import { useEffect } from 'react'

const Menu = ({
  styles,
  palette,
  tablet,
  menu,
  setMenu,
  closeMenu,
  setCloseMenu,
}) => {
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
          <NavLink href="/about" color={styles.colors.text}>
            <Title size={styles.titles.t1} color={styles.colors.text} stroked>
              About
            </Title>
          </NavLink>
        </li>
        <li>
          <NavLink href="/use" color={styles.colors.text}>
            <Title size={styles.titles.t1} color={styles.colors.text} stroked>
              What I use
            </Title>
          </NavLink>
        </li>
        <li>
          <NavLink href="/contact" color={styles.colors.text}>
            <Title size={styles.titles.t1} color={styles.colors.text} stroked>
              Contact
            </Title>
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
`

const NavLink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;

  & h2 {
    transition: color 0.4s;
  }

  & h2:hover {
    color: ${props => props.color};
  }
`

export default Menu
