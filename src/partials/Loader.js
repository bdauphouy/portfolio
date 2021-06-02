import styled from 'styled-components'
import { Paragraph } from '../components/Components'

const Loader = ({ styles, load }) => {
  return (
    <LoaderContainer
      padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
      background={styles.colors.background}
      load={load}>
      <Paragraph color={styles.colors.text} size={styles.paragraphs.p1}>
        baptiste
        <br />
        dauphouy
      </Paragraph>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: ${props => props.background};
  padding: ${props => props.padding};
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.load ? 'hidden' : 'visible')};
  opacity: ${props => (props.load ? 0 : 1)};
  transition: opacity 0.5s, visibility 0s 0.5s;
`

export default Loader
