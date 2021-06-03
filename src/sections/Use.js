import styled from 'styled-components'
import { Container, Title, Column } from '../components/Components'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'

const Use = ({ styles }) => {
  const greaterThan486 = useResolutionIsGreaterThan(486)

  return (
    <>
      <Container
        id="use"
        padding={`${styles.paddings.p4} ${styles.paddings.p1}`}>
        <Column style={{ width: '100%', alignItems: 'center' }}>
          <Title size={styles.titles.t3} stroked color={styles.colors.text}>
            What I use
          </Title>
          <List greaterThan486={greaterThan486}>
            <Item color={styles.colors.text} size={styles.paragraphs.p1}>
              HTML
            </Item>
            <Item color={styles.colors.text} size={styles.paragraphs.p1}>
              CSS
            </Item>
            <Item color={styles.colors.text} size={styles.paragraphs.p1}>
              Javascript
            </Item>
            <Item color={styles.colors.text} size={styles.paragraphs.p1}>
              React
            </Item>
            <Item color={styles.colors.text} size={styles.paragraphs.p1}>
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
  margin-top: 50px;
  list-style: none;
  flex-wrap: wrap;
  justify-content: ${props =>
    props.greaterThan486 ? 'space-between' : 'center'};
  width: 100%;
  grid-gap: 50px;
`

const Item = styled.li`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
`

export default Use
