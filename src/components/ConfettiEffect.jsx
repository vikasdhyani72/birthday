import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const ConfettiEffect = () => {
  const [dim, setDim] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const update = () =>
      setDim({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return <Confetti width={dim.width} height={dim.height} recycle />
}

export default ConfettiEffect
