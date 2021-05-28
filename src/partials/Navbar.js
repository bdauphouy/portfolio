import styled from 'styled-components'

const Navbar = ({ styles }) => {
  return (
    <Nav padding={styles.paddings.p2}>
      <a href="/" style={{ textDecoration: 'none' }}>
        <Name size={styles.paragraphs.p1} color={styles.palette.blacks.b1}>
          baptiste
          <br />
          dauphouy
        </Name>
      </a>
      <Button size={styles.paragraphs.p1} color={styles.palette.blacks.b1}>
        menu
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0;
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

const Button = styled.button`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
`

export default Navbar
