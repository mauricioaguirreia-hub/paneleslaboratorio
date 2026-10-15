import Icon from '../components/Icon.jsx'

function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div className="container final-cta__content">
        <div className="final-cta__mark"><Icon name="bolt" size={30} /></div>
        <div>
          <h2>Empieza por comprender la electricidad detrás de la energía solar.</h2>
          <p>Construye una base clara antes de avanzar hacia el estudio de sistemas solares fotovoltaicos.</p>
        </div>
        <a className="button button--light" href="#contenido">
          Explorar el contenido <Icon name="arrow" size={19} />
        </a>
      </div>
    </section>
  )
}

export default FinalCtaSection
