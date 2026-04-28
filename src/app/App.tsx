import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Categories } from './components/Categories';
import { Benefits } from './components/Benefits';
import { ForProviders } from './components/ForProviders';
import { PlatformBenefits } from './components/PlatformBenefits';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Categories />
      <Benefits />
      <ForProviders /> 
      <PlatformBenefits />
      <FinalCTA />
      <Footer />
    </div>
  );
}
