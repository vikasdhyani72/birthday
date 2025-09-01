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
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to={'/'}>
          <h1 className="text-2xl font-bold">Happy Birthday 🎂</h1>
        </Link>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? '✖' : '☰'}
        </button>

        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-pink-500 md:bg-transparent flex flex-col md:flex-row gap-6 p-6 md:p-0 transition-all duration-300 ${
            open ? 'block' : 'hidden md:flex'
          }`}
        >
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
    </header>
  )
}

export default Header
