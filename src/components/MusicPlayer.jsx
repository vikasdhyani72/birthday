import { useEffect, useRef, useState } from 'react'

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false)
  // one shared audio instance (public path)
  const audioRef = useRef(
    typeof Audio !== 'undefined' ? new Audio('/happy-birthday.mp3') : null
  )

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.loop = true

    const startOnFirstInteraction = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {}) // ignore policy errors
      document.removeEventListener('click', startOnFirstInteraction)
      document.removeEventListener('touchstart', startOnFirstInteraction)
    }

    // start after first gesture anywhere
    document.addEventListener('click', startOnFirstInteraction, { once: true })
    document.addEventListener('touchstart', startOnFirstInteraction, {
      once: true,
    })

    return () => {
      document.removeEventListener('click', startOnFirstInteraction)
      document.removeEventListener('touchstart', startOnFirstInteraction)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {})
    }
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600 z-[60]"
    >
      {playing ? 'Pause Music 🎵' : 'Play Music 🎵'}
    </button>
  )
}

export default MusicPlayer
