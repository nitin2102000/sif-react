import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar />
      
      <main className="pt-16">
        <Blog />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
