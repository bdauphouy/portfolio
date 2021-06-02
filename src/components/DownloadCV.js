import styled from 'styled-components'
import { useState, useEffect } from 'react'

const DownloadCV = ({ styles, tablet }) => {
  let [diameter, setDiameter] = useState(tablet ? 34 : 64)

  useEffect(() => {
    setDiameter(tablet ? 34 : 64)
  }, [tablet])

  const handleOnMouseOver = () => {
    const interval = setInterval(() => {
      if (diameter >= 43) {
        setDiameter(diameter--)
      } else clearInterval(interval)
    }, 5)
  }

  const handleOnMouseLeave = () => {
    const interval = setInterval(() => {
      if (diameter <= 64) {
        setDiameter(diameter++)
      } else clearInterval(interval)
    }, 5)
  }

  return (
    <Circle
      padding={`${parseFloat(styles.paddings.p3) + 80 + 'px'} ${
        styles.paddings.p2
      }`}>
      <SVG width={tablet ? 90 : 170} height={tablet ? 90 : 170}>
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
          }}>
          <textPath href="#text-diameter">
            <tspan>
              Download my CV - Download my CV -
              {!tablet && diameter > 43 && ' Download my CV -'}
            </tspan>
          </textPath>
        </text>
      </SVG>
      <a href="./cv.pdf" download style={{ display: 'inline-block' }}>
        <Arrow
          src="./arrow-down.svg"
          alt="arrow-down"
          onMouseOver={() => !tablet && handleOnMouseOver()}
          onMouseLeave={() => !tablet && handleOnMouseLeave()}
        />
      </a>
    </Circle>
  )
}

const Circle = styled.div`
  position: fixed;
  z-index: 97;
  left: 80%;
  top: 30%;
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
