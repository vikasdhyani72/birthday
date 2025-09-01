const Wishes = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 overflow-hidden">
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-300 text-3xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className="relative bg-white/80 backdrop-blur rounded-3xl shadow-2xl max-w-xl w-full p-8 text-center transition-transform duration-500 hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 drop-shadow-md mb-4">
          🎂 Happy Birthday, Sheetal !
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          You are Adorable. Every moment with you is a beautiful story.❤️
        </p>

        {/* Apology Message */}
        <div className="bg-pink-50 p-4 rounded-xl shadow-inner border border-pink-200">
          <p className="text-base md:text-lg text-pink-700 font-medium leading-relaxed">
            Mujhe maaf karna... har wo galti ke liye jo maine ki. Mai kabhi
            tumhe hurt karna nahi chahta tha. Tum meri life ka sabse khoobsurat
            hissa rahe ho, aur mai tumhe khone ka soch bhi nahi sakta jisse mai
            hamesha darta tha. Please mujhe galat mat samjhna ❤️
          </p>
        </div>
      </div>
    </div>
  )
}

export default Wishes
