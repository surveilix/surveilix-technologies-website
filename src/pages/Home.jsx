import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Industries from '../components/Industries'
import Projects from '../components/Projects'
import Process from '../components/Process'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from "../components/WhatsAppButton";
import CtaBanner from "../components/CtaBanner";
import Stats from '../components/Stats'
import ScrollToTop from '../components/ScrollToTop'
import TrustedBy from '../components/TrustedBy'
import Testimonials from '../components/Testimonials'


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <Services />
        <About />
        <WhyChooseUs />
        <Industries />
        <Projects />
        <Testimonials />
        <Process />
        <CtaBanner />
        <Contact />
      </main>

      <ScrollToTop />
      <WhatsAppButton />
        
      <Footer />
    </>
  )
}

export default Home