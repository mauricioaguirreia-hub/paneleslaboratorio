import Icon from '../components/Icon.jsx'
import { quickFacts } from '../data/courseData.js'

function StatsSection() {
  return (
    <section className="stats" aria-label="Datos principales del curso">
      <div className="stats__grid container">
        {quickFacts.map((fact) => (
          <article className="stat" key={fact.value}>
            <span className="stat__icon"><Icon name={fact.icon} size={23} /></span>
            <div>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
