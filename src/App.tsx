import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import HumanIntuitionSection from "./components/HumanIntuitionSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HumanIntuitionSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;