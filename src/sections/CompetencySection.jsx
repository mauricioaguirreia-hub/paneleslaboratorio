import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function CompetencySection() {
  return (
    <section className="section competency">
      <div className="container competency__panel">
        <SectionHeading
          eyebrow="Competencia de la unidad"
          title="¿Qué serás capaz de hacer?"
          theme="dark"
        />
        <p className="competency__lead">
          Resolver circuitos eléctricos elementales de corriente continua utilizando correctamente las magnitudes de tensión, corriente, resistencia y potencia, la Ley de Ohm y las relaciones fundamentales de conexiones en serie y paralelo.
        </p>
        <div className="competency__cards">
          <article>
            <span className="competency__icon"><Icon name="book" /></span>
            <div>
              <h3>Saber</h3>
              <p>Reconocer los fundamentos físicos mínimos de la electricidad y las relaciones entre corriente, tensión, resistencia, potencia, serie y paralelo.</p>
            </div>
          </article>
          <article>
            <span className="competency__icon"><Icon name="calculator" /></span>
            <div>
              <h3>Saber hacer</h3>
              <p>Realizar cálculos elementales de V, I, R y P y resolver configuraciones resistivas simples en serie y paralelo.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default CompetencySection
