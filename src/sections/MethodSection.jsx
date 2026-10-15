import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { methodologySteps } from '../data/courseData.js'

function MethodSection() {
  return (
    <section className="section method">
      <div className="container">
        <SectionHeading
          eyebrow="Metodología"
          title="Aprende paso a paso"
          description="Una progresión clara desde los conceptos esenciales hacia su aplicación en situaciones eléctricas elementales."
          align="center"
        />
        <ol className="method__flow">
          {methodologySteps.map((step, index) => (
            <li key={step.title}>
              <span className="method__index">{index + 1}</span>
              <span className="method__icon"><Icon name={step.icon} size={27} /></span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < methodologySteps.length - 1 && (
                <span className="method__connector" aria-hidden="true"><Icon name="arrow" size={20} /></span>
              )}
            </li>
          ))}
        </ol>
        <p className="method__progression">
          De los fundamentos eléctricos hacia la comprensión de los sistemas fotovoltaicos.
        </p>
      </div>
    </section>
  )
}

export default MethodSection
