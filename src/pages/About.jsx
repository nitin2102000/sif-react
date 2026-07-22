import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import StatsSection from '../components/StatsSection';
import MissionVision from '../components/MissionVision';
import ExpertiseSection from '../components/ExpertiseSection';
import ProcessTimeline from '../components/ProcessTimeline';
import TeamSection from '../components/TeamSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CoreValues from '../components/CoreValues';
import CTASection from '../components/CTASection';
import Newsletter from '../components/Newsletter';

export default function About() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar />
      
      <main>
        <AboutHero />
        <StatsSection />
        <MissionVision />
        <ExpertiseSection />
        <ProcessTimeline />
        <TeamSection />
        <WhyChooseSection />
        <CoreValues />
        <CTASection />
      </main>

      {/* Note: I removed Newsletter because CTASection is right above Footer, but if requested to keep standard layout, I can add it, or maybe skip it as CTASection is massive. Let's keep the layout flow seamless. */}
      
      <Footer />
    </div>
  );
}
