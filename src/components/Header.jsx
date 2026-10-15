import { useEffect, useState } from 'react'
import SolarMark from './SolarMark.jsx'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#aprendizajes', label: 'Qué aprenderás' },
  { href: '#contenido', label: 'Contenido' },
  { href: '#instructor', label: 'Instructor' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Formación solar, ir al inicio">
          <SolarMark />
          <span>
            <strong>Formación solar</strong>
            <small>Fundamentos para comenzar</small>
          </span>
        </a>

        <button
          className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${isOpen ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="button button--small" href="#contenido" onClick={() => setIsOpen(false)}>
            Ver curso
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
