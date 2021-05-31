import styled from 'styled-components'
import { Title, Paragraph } from '../components/Components'

const Menu = ({ styles, menu, setMenu, mobile }) => {
  return (
    <MenuContainer padding={styles.paddings.p1}>
      <NavLinks>
        <li>
          <NavLink href="/">
            <Title
              size={styles.titles.t1}
              color={styles.palette.blacks.b1}
              stroked>
              About
            </Title>
          </NavLink>
        </li>
        <li>
          <NavLink href="/">
            <Title
              size={styles.titles.t1}
              color={styles.palette.blacks.b1}
              stroked>
              What I use
            </Title>
          </NavLink>
        </li>
        <li>
          <NavLink href="/">
            <Title
              size={styles.titles.t1}
              color={styles.palette.blacks.b1}
              stroked>
              Contact
            </Title>
          </NavLink>
        </li>
      </NavLinks>
      <Paragraph
        color={styles.palette.grays.g1}
        size={styles.paragraphs.p1}
        style={{
          marginTop: '80px',
          position: 'absolute',
          bottom: styles.paddings.p2,
          right: mobile ? '50%' : styles.paddings.p1,
          transform: mobile && 'translateX(50%)',
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
  background: white;
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
