import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';

import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import SearchSection from './components/sections/SearchSection';
import MissionSection from './components/sections/MissionSection';
import SolutionSection from './components/sections/SolutionSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground bg-black w-full overflow-x-hidden selection:bg-foreground/20 selection:text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SearchSection />
        <MissionSection />
        <SolutionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
