import { useState, useEffect } from 'react'

const useResolutionIsGreaterThan = resolution => {
  const [greaterThan, setGreaterThan] = useState(window.innerWidth > resolution)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setGreaterThan(window.innerWidth > resolution ? true : false)
    })
  }, [resolution])

  return greaterThan
}

export default useResolutionIsGreaterThan
