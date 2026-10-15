import Icon from '../components/Icon.jsx'

function SolarBridgeSection() {
  const steps = ['Fundamentos eléctricos', 'Circuitos', 'Energía solar fotovoltaica']

  return (
    <section className="section solar-bridge">
      <div className="container solar-bridge__panel">
        <div className="solar-bridge__copy">
          <p className="eyebrow">El punto de partida correcto</p>
          <h2>Antes de conectar paneles, necesitas comprender la electricidad que circula por ellos.</h2>
          <p>
            Los sistemas fotovoltaicos trabajan con tensión, corriente, potencia y conexiones eléctricas. Comprender estas relaciones facilita posteriormente interpretar módulos, conexiones, equipos y dimensionamientos.
          </p>
        </div>

        <ol className="solar-path" aria-label="Progresión de aprendizaje">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="solar-path__number">{index + 1}</span>
              <strong>{step}</strong>
              {index < steps.length - 1 && <Icon name="arrow" size={22} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default SolarBridgeSection
