import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { studentProfiles } from '../data/courseData.js'

function AudienceSection() {
  return (
    <section className="section audience">
      <div className="container audience__layout">
        <SectionHeading
          eyebrow="Punto de partida"
          title="¿Para quién es este curso?"
          description="Para quienes quieren avanzar con una base clara, sin asumir conocimientos eléctricos previos."
        />
        <div className="audience__list">
          {studentProfiles.map((profile, index) => (
            <article key={profile}>
              <span className="audience__icon"><Icon name="user" size={22} /></span>
              <p>{profile}</p>
              <span className="audience__number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AudienceSection
