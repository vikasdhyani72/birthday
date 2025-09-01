import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const audioRef = useRef(null)

  useEffect(() => {
    // Autoplay background music
    if (audioRef.current) {
      audioRef.current.play().catch(() => console.log('Autoplay blocked'))
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 text-center px-4 overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-pink-600 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        🎉 Happy Birthday <span className="text-purple-700">Sheetal</span> 🎂
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-lg md:text-2xl mt-4 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        You are the reason this day is so special ❤️
      </motion.p>

      {/* Surprise Button */}
      <motion.button
        className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/surprise')}
      >
        Click for a Surprise 🎁
      </motion.button>

      {/* Balloons (floating) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="balloon absolute left-10 bottom-0 w-12 h-16 bg-pink-400 rounded-full animate-float"></div>
        <div className="balloon absolute left-1/2 bottom-0 w-12 h-16 bg-purple-400 rounded-full animate-float delay-2000"></div>
        <div className="balloon absolute right-10 bottom-0 w-12 h-16 bg-yellow-400 rounded-full animate-float delay-4000"></div>
      </div>
    </div>
  )
}

export default Hero
