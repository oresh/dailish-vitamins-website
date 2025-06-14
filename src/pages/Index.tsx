
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Showcase from "@/components/landing/Showcase";
import Reviews from "@/components/landing/Reviews";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
