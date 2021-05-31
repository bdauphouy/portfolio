import styled from 'styled-components'
import { useRef, useEffect } from 'react'

const DownloadCV = () => {
  const circle = useRef()

  useEffect(() => {
    console.log(circle.current)
    window.addEventListener('mousemove', e => {
      circle.current.style.left = e.clientX + 'px'
      circle.current.style.top = e.clientY + 'px'
    })
  }, [])

  const d = 68.5

  return (
    <Circle ref={circle}>
      <SVG width="160" height="160">
        <path
          d={`M ${d},0 A ${d},${d} 0 0 1 -${d},0 A ${d},${d} 0 0 1 ${d},0`}
          id="text-path"
          transform="translate(80, 80)"
          fill="none"
        />

        <text style={{ fontWeight: 500 }}>
          <textPath href="#text-path">
            <tspan dy="2">
              Download my CV - Download my CV - Download my CV -
            </tspan>
          </textPath>
        </text>
      </SVG>
      <Arrow src="./arrow-down.svg" alt="arrow-down" />
    </Circle>
  )
}

const Circle = styled.div`
  position: absolute;
  z-index: 97;
  transform: translate(-50%, -50%);
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
  width: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default DownloadCV
