import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Column, Container, Title } from '../components/Components'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'

const Use = ({ styles }) => {
  const greaterThan = useResolutionIsGreaterThan(1365)

  const tech = [
    'Typescript',
    'React',
    'Next',
    'Svelte',
    'SvelteKit',
    'Tailwind',
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.item', {
      scrollTrigger: {
        trigger: '#use',
        start: 'center bottom',
        end: '+=800',
        scrub: true,
      },
      opacity: 0,
      y: '100%',
      ease: 'power4.out',
      stagger: 0.1,
    })
  }, [])

  return (
    <Container id="use" padding={`${styles.paddings.p4} ${styles.paddings.p1}`}>
      <Column style={{ width: '100%', alignItems: 'center' }}>
        <Title
          data-use-text
          data-gsap-text
          size={styles.titles.t3}
          stroked
          color={styles.colors.text}
        >
          What I use
        </Title>
        <div className="trigger">
          <List greaterThan={greaterThan}>
            {tech.map(item => {
              return (
                <Item
                  key={item}
                  className="item"
                  color={styles.colors.text}
                  size={styles.paragraphs.p1}
                >
                  {item}
                </Item>
              )
            })}
          </List>
        </div>
      </Column>
    </Container>
  )
}

const List = styled.ul`
  display: flex;
  margin-top: 50px;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  grid-gap: 50px;
`

const Item = styled.li`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
`

export default Use
