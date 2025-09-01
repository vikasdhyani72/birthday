const Gallery = () => {
  const photos = [
    '/images-videos/black&white.jpeg',
    '/images-videos/u&me.jpeg',
    '/images-videos/redblack.jpeg',
    '/images-videos/pull.jpeg',
    '/images-videos/streetlight.jpeg',
    '/images-videos/scooty.jpeg',
    '/images-videos/bluesuit3.jpeg',
    '/images-videos/mall.jpeg',
    '/images-videos/bluesuit2.jpeg',
    '/images-videos/bluesuit.jpeg',
  ]

  const videos = ['/images-videos/vid1.mp4', '/images-videos/vid2.mp4']

  return (
    <div className="p-6 bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <h1 className="text-center text-4xl font-extrabold text-pink-600 mb-6 drop-shadow">
        Beautiful Memories ❤️
      </h1>

      {/* Apology Message */}
      <p className="text-center text-lg text-gray-700 italic mb-10 px-4">
        "Main jaanta hu maine galtiyaan ki hain... par yeh yaadein hamesha yaad
        dilati hain ki tu meri life ka sabse khoobsurat hissa hai. Sorry for
        everything, aur thank you for giving me these priceless moments. ❤️"
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={img}
              alt={`Memory ${i + 1}`}
              className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}

        {videos.map((video, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <video
              src={video}
              className="w-full h-52 object-cover"
              controls
              preload="metadata"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
