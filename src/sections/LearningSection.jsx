import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { learningOutcomes } from '../data/courseData.js'

function LearningSection() {
  return (
    <section className="section learning" id="aprendizajes">
      <div className="container">
        <SectionHeading
          eyebrow="Resultados de aprendizaje"
          title="Qué aprenderás"
          description="Al terminar esta unidad tendrás las bases para interpretar y resolver situaciones eléctricas elementales que posteriormente aparecerán en sistemas fotovoltaicos."
          align="center"
        />
        <div className="learning__grid">
          {learningOutcomes.map((outcome, index) => (
            <article className="learning-card" key={outcome.title}>
              <div className="learning-card__top">
                <span className="icon-box"><Icon name={outcome.icon} /></span>
                <span className="learning-card__number">0{index + 1}</span>
              </div>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
        <p className="learning__note">
          <Icon name="check" size={20} />
          Aprenderás a aplicar las relaciones eléctricas, no solo a memorizar conceptos.
        </p>
      </div>
    </section>
  )
}

export default LearningSection
