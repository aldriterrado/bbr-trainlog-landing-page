import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ProblemSection } from './components/ProblemSection'
import { FeaturesSection } from './components/FeaturesSection'
import { UserRolesSection } from './components/UserRolesSection'
import { WorkflowSection } from './components/WorkflowSection'
import { TechStackSection } from './components/TechStackSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <UserRolesSection />
        <WorkflowSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
