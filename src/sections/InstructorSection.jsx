import Icon from '../components/Icon.jsx'

function InstructorSection() {
  const instructorImage = `${import.meta.env.BASE_URL}profesor-henry.jpeg`

  return (
    <section className="section instructor" id="instructor">
      <div className="container instructor__card">
        <div className="instructor__image-wrap">
          <span className="instructor__orbit instructor__orbit--one" aria-hidden="true" />
          <span className="instructor__orbit instructor__orbit--two" aria-hidden="true" />
          <img
            src={instructorImage}
            alt="Retrato del profesor Henry Vanegas Mejía"
            width="288"
            height="288"
            loading="lazy"
          />
          <span className="instructor__badge"><Icon name="bolt" size={20} /></span>
        </div>
        <div className="instructor__content">
          <p className="eyebrow">Tu instructor</p>
          <h2>Henry Vanegas Mejía</h2>
          <p className="instructor__role">Ingeniero eléctrico · Magíster en ingeniería eléctrica</p>
          <p className="instructor__bio">
            Ingeniero eléctrico y magíster en ingeniería eléctrica con más de 20 años de experiencia en docencia universitaria y proyectos en tecnología.
          </p>
          <div className="instructor__signals" aria-label="Áreas de experiencia">
            <span><Icon name="bolt" size={18} /> Experiencia técnica</span>
            <span><Icon name="book" size={18} /> Experiencia académica</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorSection
