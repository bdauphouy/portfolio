import styled from 'styled-components'
import { Container, Title, Column } from '../components/Components'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Use = ({ styles }) => {
  const greaterThan = useResolutionIsGreaterThan(1365)

  const tech = [
    'HTML',
    'CSS',
    'SCSS',
    'Tailwind',
    'Javascript',
    'React',
    'Next',
    'Vue',
    'Svelte',
    'Node',
    'Express',
    'MongoDB',
    'Strapi',
    'Greensock',
    'Framer Motion',
    'Three.js',
    'Figma',
    'Git',
    'Python',
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.item', {
      scrollTrigger: {
        trigger: '#use',
        start: 'center bottom',
        end: '+=500',
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
          color={styles.colors.text}>
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
                  size={styles.paragraphs.p1}>
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
