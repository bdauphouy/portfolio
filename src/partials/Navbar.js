import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = ({ styles }) => {
  return (
    <Nav padding={styles.paddings.p2}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Name size={styles.paragraphs.p1} color={styles.colors.text}>
          baptiste
          <br />
          dauphouy
        </Name>
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
`

export default Navbar
