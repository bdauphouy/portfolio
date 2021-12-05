import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import useAnimation from '../hooks/useAnimation'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'

const DownloadCV = ({ styles, tablet }) => {
  const greaterThan = useResolutionIsGreaterThan(1500)

  let [diameter, setDiameter] = useState(tablet ? 34 : 64)

  const circle = useRef()

  useEffect(() => {
    setDiameter(tablet ? 34 : 64)

    const moveCircle = e => {
      const { clientX, clientY } = e
      const posX = tablet ? 0 : clientX / window.innerWidth - 0.5
      const posY = tablet ? 0 : clientY / window.innerHeight - 0.5

      if (circle.current)
        circle.current.style.transform = `translate3d(${posX * 50}px, ${
          posY * 50
        }px, 0)`
    }

    const handleMouseMove = moveCircle

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [tablet])

  const [handleOnMouseOver, handleOnMouseOut] = useAnimation(
    diameter,
    setDiameter,
  )

  return (
    <Circle
      tablet={tablet}
      ref={circle}
      padding={`${parseFloat(styles.paddings.p3) + 80 + 'px'} ${
        styles.paddings.p2
      }`}
      greaterThan={greaterThan}>
      <SVG
        width={tablet ? 90 : 170}
        height={tablet ? 90 : 170}
        data-fixed-element>
        <path
          id="text-diameter"
          d={`M ${diameter},0 A ${diameter},${diameter} 0 0 1 -${diameter},0 A ${diameter},${diameter} 0 0 1 ${diameter},0`}
          transform={`translate(${tablet ? 45 : 85}, ${tablet ? 45 : 85})`}
          fill="none"
        />
        <text
          style={{
            fontWeight: 500,
            fontSize: styles.links.l2,
            fill: styles.colors.text,
            letterSpacing: diameter > 43 ? '1.55px' : tablet ? '3.8px' : '5px',
          }}>
          <textPath href="#text-diameter">
            <tspan>
              Download my Resume -
              {!tablet && diameter > 43 && ' Download my Resume -'}
              {/* {!tablet && diameter > 43 && ' Download my CV -'} */}
            </tspan>
          </textPath>
        </text>
      </SVG>
      <a href="./resume.pdf" download style={{ display: 'inline-block' }}>
        <Arrow
          data-fixed-element
          data-cursor
          src="./arrow-down.svg"
          alt="arrow-down"
          onMouseOver={() => !tablet && handleOnMouseOver()}
          onMouseOut={() => !tablet && handleOnMouseOut()}
        />
      </a>
    </Circle>
  )
}

const Circle = styled.div`
  position: ${props => (props.tablet ? 'fixed' : 'absolute')};
  z-index: 97;
  right: ${props => (props.greaterThan ? '10%' : '5%')};
  top: ${props => (props.greaterThan ? '30%' : '5%')};
  height: 170px;

  @media (max-width: 1024px) {
    & {
      top: unset;
      left: unset;
      right: ${props => props.padding.split(' ')[1]};
      bottom: ${props => props.padding.split(' ')[0]};
      height: 90px;
    }
  }
`

const SVG = styled.svg`
  animation: rotate 15s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Arrow = styled.img`
  width: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  display: inline-block;
  transform: translate(-50%, -50%);
  padding: 5px;

  @media (max-width: 1024px) {
    & {
      width: 30px;
    }
  }
`

export default DownloadCV
