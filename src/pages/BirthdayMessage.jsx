import { motion } from 'framer-motion'

const BirthdayMessage = () => {
  return (
    <section className="py-16 bg-white text-gray-800 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        A Special Message for You 💌
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        From the day we met, you have brought joy and happiness into my life.
        Today, on your special day, I just want to say – thank you for being
        YOU! Wishing you endless smiles, laughter, and magical memories! 🎂✨
      </motion.p>
    </section>
  )
}

export default BirthdayMessage
