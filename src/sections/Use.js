import styled from 'styled-components'
import { Container, Title, Column } from '../components/Components'

const Use = ({ styles }) => {
  return (
    <>
      <Container padding={styles.paddings.p1}>
        <Column style={{ width: '100%', alignItems: 'center' }}>
          <Title
            size={styles.titles.t3}
            stroked
            color={styles.palette.blacks.b1}>
            What I use
          </Title>
          <List>
            <Item color={styles.palette.blacks.b1} size={styles.paragraphs.p1}>
              HTML
            </Item>
            <Item color={styles.palette.blacks.b1} size={styles.paragraphs.p1}>
              CSS
            </Item>
            <Item color={styles.palette.blacks.b1} size={styles.paragraphs.p1}>
              Javascript
            </Item>
            <Item color={styles.palette.blacks.b1} size={styles.paragraphs.p1}>
              React
            </Item>
            <Item color={styles.palette.blacks.b1} size={styles.paragraphs.p1}>
              Three.js
            </Item>
          </List>
        </Column>
      </Container>
    </>
  )
}

const List = styled.ul`
  display: flex;
  margin-top: 80px;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  grid-gap: 50px;
`

const Item = styled.li`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
`

export default Use
