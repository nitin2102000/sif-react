import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import FeaturedFund from '../components/FeaturedFund'
import TopFunds from '../components/TopFunds'
import HeatmapSection from '../components/HeatmapSection'
import WhyChoose from '../components/WhyChoose'
import FundMarketplace from '../components/FundMarketplace'
import InvestmentPhilosophy from '../components/InvestmentPhilosophy'
import InvestmentProcess from '../components/InvestmentProcess'
import Comparison from '../components/Comparison'
import TrustSection from '../components/TrustSection'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedFund />
        <TopFunds />
        <HeatmapSection />
        <WhyChoose />
        <FundMarketplace />
        <InvestmentPhilosophy />
        <InvestmentProcess />
        <Comparison />
        <TrustSection />
        <Testimonials />
        <FAQ />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
