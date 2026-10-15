import Icon from '../components/Icon.jsx'

function HeroIllustration() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <span className="hero-visual__label hero-visual__label--sun">Energía</span>
      <span className="hero-visual__label hero-visual__label--meter">Medición</span>
      <svg viewBox="0 0 620 560" role="img">
        <defs>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0b3d7a" />
            <stop offset="1" stopColor="#075ccb" />
          </linearGradient>
          <linearGradient id="surface" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#d8eaff" />
          </linearGradient>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#0b2341" floodOpacity=".13" />
          </filter>
        </defs>

        <circle cx="478" cy="99" r="54" fill="#f5b700" opacity=".14" />
        <circle cx="478" cy="99" r="31" fill="#f5b700" />
        <g stroke="#f5b700" strokeWidth="5" strokeLinecap="round">
          <path d="M478 35V19M478 179v-16M414 99h-16M558 99h-16M433 54l-12-12M535 156l-12-12M523 54l12-12M421 156l12-12" />
        </g>

        <path
          className="energy-line"
          d="M474 154c-20 55-57 53-81 91-19 30-8 55 6 73"
          fill="none"
          stroke="#f5b700"
          strokeDasharray="8 11"
          strokeLinecap="round"
          strokeWidth="5"
        />

        <g filter="url(#shadow)">
          <path d="m111 223 296-47 91 212-306 62-81-227Z" fill="url(#panel)" />
          <path d="m111 223 296-47 91 212-306 62-81-227Z" fill="none" stroke="#5ca5ff" strokeWidth="4" />
          <path d="M172 213l79 218M234 203l79 216M296 193l79 213M358 183l80 210M130 276l299-50M150 333l301-53M171 391l303-56" stroke="#8ac0ff" strokeWidth="2" opacity=".75" />
          <path d="m238 441-15 62M427 403l43 53M194 505h88M435 458h74" stroke="#0b2341" strokeWidth="8" strokeLinecap="round" />
        </g>

        <g transform="translate(63 74)" filter="url(#shadow)">
          <rect width="132" height="103" rx="20" fill="url(#surface)" />
          <path d="M28 71a39 39 0 0 1 76 0" fill="none" stroke="#aac9ec" strokeWidth="8" strokeLinecap="round" />
          <path d="m66 64 20-28" stroke="#075ccb" strokeWidth="6" strokeLinecap="round" />
          <circle cx="66" cy="65" r="7" fill="#075ccb" />
          <path d="M42 84h48" stroke="#0b2341" strokeWidth="5" strokeLinecap="round" />
        </g>

        <g transform="translate(451 420)" filter="url(#shadow)">
          <rect width="112" height="72" rx="18" fill="#fff" />
          <path d="M24 36h18l9-15 14 31 10-16h16" fill="none" stroke="#075ccb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <circle cx="92" cy="379" r="10" fill="#f5b700" />
        <circle cx="537" cy="296" r="8" fill="#075ccb" opacity=".25" />
        <circle cx="67" cy="308" r="5" fill="#075ccb" opacity=".4" />
      </svg>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid container">
        <div className="hero__content">
          <p className="eyebrow">Curso online · Nivel inicial</p>
          <h1>
            Introducción a los sistemas solares <span>fotovoltaicos</span>
          </h1>
          <p className="hero__lead">
            Construye las bases eléctricas que necesitas para comprender, calcular y avanzar con seguridad hacia el estudio de los sistemas solares fotovoltaicos.
          </p>
          <p className="hero__support">
            No necesitas formación eléctrica previa. Comienza por los conceptos fundamentales de corriente, tensión, resistencia, potencia y circuitos.
          </p>
          <div className="hero__actions">
            <a className="button" href="#contenido">
              Conocer el curso <Icon name="arrow" size={19} />
            </a>
            <a className="button button--secondary" href="#aprendizajes">
              Ver lo que aprenderás
            </a>
          </div>
          <div className="hero__note">
            <span className="hero__note-icon"><Icon name="bolt" size={17} /></span>
            De los fundamentos eléctricos a la energía solar
          </div>
        </div>
        <HeroIllustration />
      </div>
    </section>
  )
}

export default HeroSection
