import SectionHeading from '../components/SectionHeading.jsx'
import { faqs } from '../data/courseData.js'

function FaqSection() {
  return (
    <section className="section faq">
      <div className="container faq__layout">
        <SectionHeading
          eyebrow="Información útil"
          title="Preguntas frecuentes"
          description="Lo esencial para saber si esta unidad es el punto de partida que necesitas."
        />
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq__toggle" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
