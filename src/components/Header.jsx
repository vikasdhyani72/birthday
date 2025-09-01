import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`text-lg transition-colors hover:text-yellow-300 ${
        pathname === to ? 'underline underline-offset-4' : ''
      }`}
    >
      {children}
    </Link>
  )

  return (
    <header className="fixed top-0 left-0 w-full bg-pink-500 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        <Link to={'/'}>
          <h1 className="text-2xl font-bold">Happy Birthday 🎂</h1>
        </Link>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-3xl relative"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? '✖' : '☰'}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/wishes">Wishes</NavLink>
          </li>
          <li>
            <NavLink to="/apology">Apology</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Popup Menu BELOW toggle button */}
      <div className="md:hidden relative">
        {open && (
          <ul className="absolute right-1 mt-1 bg-gradient-to-br from-pink-400 via-purple-400 to-pink-200 rounded-xl shadow-lg p-4 flex flex-col gap-3 w-48 animate-fadeIn z-50">
            <li>
              <NavLink to="/">🎉 Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">🎈 Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/wishes">🎁 Wishes</NavLink>
            </li>
            <li>
              <NavLink to="/apology">💌 Apology</NavLink>
            </li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header
