import { motion } from 'framer-motion'
import ConfettiEffect from '../components/ConfettiEffect'

const Apology = () => {
  return (
    <div className="text-center p-6 min-h-screen bg-gradient-to-r from-red-100 via-pink-100 to-purple-100 relative">
      <ConfettiEffect />

      <motion.h1
        className="text-5xl font-extrabold text-red-500 drop-shadow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        ❤️ I'm Sorry ❤️
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-700 max-w-xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I know I made mistakes and hurt you, and for that I am truly sorry. You
        mean the world to me, and I never want to see you upset because of me.
        Please forgive me and just forgive me.
        <span className="block mt-2 text-pink-600 font-semibold">
          You are adorable. 💖 Happy Birthday again.
        </span>
      </motion.p>

      <motion.img
        src="/images-videos/radhekrishna.jpeg"
        alt="Special Memory"
        className="mx-auto mt-6 rounded-2xl shadow-xl max-w-xs border-4 border-pink-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      <motion.button
        onClick={() => window.history.back()}
        className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        Take Me Back 🙏
      </motion.button>
    </div>
  )
}

export default Apology
