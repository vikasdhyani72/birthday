import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gradient-to-br from-pink-200 via-purple-100 to-pink-50 p-6 relative overflow-hidden">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow-lg text-center"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 Happy Birthday, Sheetal! 🎂
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-700 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Today is all about YOU ❤️ Let’s make it unforgettable!
      </motion.p>

      {/* Added personal message */}
      <motion.div
        className="mt-6 text-center max-w-xl bg-white bg-opacity-70 rounded-xl shadow-lg p-4 text-gray-800 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>
          <strong>Mujhe maaf karna Sheetal...</strong> Main tumhare birthday par
          wish nahi kar paya, aur us din tumhe special feel karane ka chance
          miss kar diya. Main dil se sorry hoon apni purani sab galtiyon ke
          liye. Tum meri zindagi ka sabse khoobsurat hissa rahe ho ❤️ Aur main
          chahta hu ki tum hamesha khush raho.
        </p>
      </motion.div>

      {/* Floating images (use public paths) */}
      <div className="relative mt-16 flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-3xl">
        <motion.img
          src="/images-videos/lovely.jpeg"
          alt="Birthday"
          className="w-40 md:w-56 rounded-xl shadow-2xl border-4 border-white animate-float"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.img
          src="/images-videos/radhetilak.jpeg"
          alt="Smile"
          className="w-40 md:w-56 rounded-xl shadow-2xl border-4 border-white animate-float"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        />
      </div>

      {/* Floating hearts background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute text-pink-400 text-6xl opacity-30"
          initial={{ y: '100vh', x: '10%' }}
          animate={{ y: '-10vh' }}
          transition={{ duration: 9, repeat: Infinity, delay: 1 }}
        >
          ❤️
        </motion.div>
        <motion.div
          className="absolute text-purple-400 text-6xl opacity-30"
          initial={{ y: '100vh', x: '75%' }}
          animate={{ y: '-10vh' }}
          transition={{ duration: 11, repeat: Infinity, delay: 2 }}
        >
          💜
        </motion.div>
      </div>
    </div>
  )
}

export default Home
