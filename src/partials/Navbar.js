import styled from 'styled-components'

const Navbar = ({ styles, menu, setMenu }) => {
  return (
    <Nav padding={`${styles.paddings.p3} ${styles.paddings.p2}`}>
      <a href="/" style={{ textDecoration: 'none' }}>
        <Name size={styles.paragraphs.p1} color={styles.colors.text}>
          baptiste
          <br />
          dauphouy
        </Name>
      </a>
      <Button
        size={styles.paragraphs.p1}
        color={styles.colors.text}
        onClick={() => setMenu(!menu)}>
        {menu ? <Cross color={styles.colors.text} /> : 'menu'}
      </Button>
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

const Button = styled.button`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`

const Cross = styled.span`
  width: 30px;
  height: 3px;
  display: inline-block;
  background: ${props => props.color};
  position: relative;
  margin-bottom: 3px;
  transform: rotate(45deg);

  &::before {
    position: absolute;
    content: '';
    width: 30px;
    height: 3px;
    background: ${props => props.color};
    top: 0;
    left: 0;
    transform: rotate(-90deg);
  }
`

export default Navbar
