import SectionHeading from '../components/SectionHeading.jsx'
import { courseModules } from '../data/courseData.js'

function CurriculumSection() {
  return (
    <section className="section curriculum" id="contenido">
      <div className="container curriculum__layout">
        <div className="curriculum__intro">
          <SectionHeading
            eyebrow="Ruta de aprendizaje"
            title="Contenido de la unidad"
            description="Seis temas organizados para avanzar desde el fenómeno eléctrico hasta la resolución de circuitos resistivos elementales."
          />
          <div className="curriculum__summary">
            <span>01</span>
            <div className="curriculum__line" />
            <span>06</span>
          </div>
          <p className="curriculum__hint">Selecciona cada tema para consultar su objetivo.</p>
        </div>

        <div className="module-list">
          {courseModules.map((module, index) => (
            <details className="module" key={module.number} open={index === 0}>
              <summary>
                <span className="module__number">{module.number}</span>
                <span className="module__title">{module.title}</span>
                <span className="module__toggle" aria-hidden="true" />
              </summary>
              <div className="module__content">
                <span className="module__label">Objetivo</span>
                <p>{module.objective}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurriculumSection
