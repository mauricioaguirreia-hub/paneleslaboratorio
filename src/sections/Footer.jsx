import SolarMark from '../components/SolarMark.jsx'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <SolarMark />
          <div>
            <strong>Introducción a los sistemas solares fotovoltaicos</strong>
            <span>Prototipo de formación online.</span>
          </div>
        </div>
        <a href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

export default Footer
