
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
