import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Solutions from "@/components/solutions";
import Research from "@/components/research";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solutions />
      <Research />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
