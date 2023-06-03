import { useState } from 'react'

const useAnimation = (diameter, setDiameter) => {
  let [overInterval, setOverInterval] = useState(null)
  let [outInterval, setOutInterval] = useState(null)

  return [
    () => {
      clearInterval(outInterval)
      setOutInterval(null)
      setOverInterval(
        setInterval(() => {
          if (diameter >= 39) {
            setDiameter(diameter--)
          } else clearInterval(overInterval)
        }),
      )
    },
    () => {
      clearInterval(overInterval)
      setOverInterval(null)
      setOutInterval(
        setInterval(() => {
          if (diameter <= 57) {
            setDiameter(diameter++)
          } else clearInterval(outInterval)
        }),
      )
    },
  ]
}

export default useAnimation
