import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';
import QuickContactCards from '../components/QuickContactCards';
import ContactForm from '../components/ContactForm';
import OfficeInformation from '../components/OfficeInformation';
import GoogleMapSection from '../components/GoogleMapSection';
import ContactFAQ from '../components/ContactFAQ';
import ContactCTASection from '../components/ContactCTASection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar />
      
      <main>
        <ContactHero />
        <QuickContactCards />

        {/* Main Contact Section */}
        <section className="py-20 bg-[#f7f9fc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-7 xl:col-span-8 h-full">
                <ContactForm />
              </div>
              <div className="lg:col-span-5 xl:col-span-4 h-full">
                <OfficeInformation />
              </div>
            </div>
          </div>
        </section>

        <GoogleMapSection />
        <ContactFAQ />
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
