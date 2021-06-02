import styled from 'styled-components'
import { Title, Paragraph } from '../components/Components'

const Menu = ({ styles, palette, tablet }) => {
  return (
    <MenuContainer
      padding={styles.paddings.p1}
      background={styles.colors.background}>
      <NavLinks>
        <li>
          <NavLink href="/">
            <Title size={styles.titles.t1} color={styles.colors.text} stroked>
              About
            </Title>
          </NavLink>
        </li>
        <li>
          <NavLink href="/">
            <Title size={styles.titles.t1} color={styles.colors.text} stroked>
              What I use
            </Title>
          </NavLink>
        </li>
        <li>
          <NavLink href="/">
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
  padding: 100px ${props => props.padding};
  display: flex;
  align-items: center;
`

const NavLinks = styled.ul`
  list-style: none;
`

const NavLink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
`

export default Menu
