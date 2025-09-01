import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import Home from './pages/Home'
import Apology from './pages/Apology'
import Gallery from './pages/Gallery'
import Wishes from './pages/Wishes'

const App = () => {
  return (
    <Router>
      <Header />

      <div className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apology" element={<Apology />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/wishes" element={<Wishes />} />
        </Routes>
      </div>
      <MusicPlayer />
      <Footer />
    </Router>
  )
}

export default App
