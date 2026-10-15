import Header from './components/Header.jsx'
import AudienceSection from './sections/AudienceSection.jsx'
import CompetencySection from './sections/CompetencySection.jsx'
import CurriculumSection from './sections/CurriculumSection.jsx'
import FaqSection from './sections/FaqSection.jsx'
import FinalCtaSection from './sections/FinalCtaSection.jsx'
import Footer from './sections/Footer.jsx'
import HeroSection from './sections/HeroSection.jsx'
import InstructorSection from './sections/InstructorSection.jsx'
import LearningSection from './sections/LearningSection.jsx'
import MethodSection from './sections/MethodSection.jsx'
import SolarBridgeSection from './sections/SolarBridgeSection.jsx'
import StatsSection from './sections/StatsSection.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Ir al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <StatsSection />
        <LearningSection />
        <SolarBridgeSection />
        <CurriculumSection />
        <CompetencySection />
        <MethodSection />
        <InstructorSection />
        <AudienceSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
