import styled from 'styled-components'
import { useRef, useEffect, useState } from 'react'

const Cursor = ({ styles, tablet }) => {
  const cursor = useRef()
  const [size, setSize] = useState(30)

  useEffect(() => {
    window.addEventListener('mousemove', e => {
      if (cursor.current)
        cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`

      if (e.target.getAttribute('data-cursor')) {
        setSize(50)
      } else {
        setSize(30)
      }
    })
  }, [])

  return <Circle ref={cursor} size={size} color={styles.colors.text} />
}

const Circle = styled.div`
  position: fixed;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${props => props.color};
  pointer-events: none;
  z-index: 999;

  &::after {
    content: '';
    position: absolute;
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    border-radius: 50%;
    transform: translate(calc(-50% + 2.5px), calc(-50% + 2.5px));
    transition: width 0.2s, height 0.2s;
    border: solid 1px ${props => props.color};
  }
`

export default Cursor
