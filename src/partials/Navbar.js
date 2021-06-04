import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Navbar = ({ styles, menu, setMenu, setCloseMenu, closeMenu }) => {
  const history = useHistory()

  return (
    <Nav padding={`${styles.paddings.p3} ${styles.paddings.p2}`}>
      <a href="/" style={{ textDecoration: 'none' }}>
        <Name size={styles.paragraphs.p1} color={styles.colors.text}>
          baptiste
          <br />
          dauphouy
        </Name>
      </a>

      <Burger
        active={!closeMenu}
        color={styles.colors.text}
        onClick={() =>
          !menu
            ? (setMenu(true), setCloseMenu(false), history.push('/'))
            : setCloseMenu(true)
        }
      />
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.padding};
`

const Name = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: 500;
`

const Burger = styled.span`
  width: 30px;
  height: 30px;
  position: relative;
  display: block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: ${props => props.color};
    left: 0;
    transition: top 0.3s, transform 0.3s;
  }
  &::before {
    top: ${props => (!props.active ? 'calc(100% / 3)' : '50%')};
    transform: translateY(-50%) ${props => props.active && 'rotate(45deg)'};
  }

  &::after {
    top: ${props => (!props.active ? 'calc(200% / 3)' : '50%')};
    transform: translateY(-50%) ${props => props.active && 'rotate(-45deg)'};
  }
`

export default Navbar
