
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float [animation-delay:-1.5s]"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold !text-accent leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Take your vitamins… dail-ish.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Dailish helps you track your supplements, build a habit, and maybe even feel like a responsible adult.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
                <a href="#download">
                  <Apple className="mr-2 h-5 w-5" /> Download on the App Store
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Decorations */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop"
              alt="Green leaves decoration"
              className="absolute -top-20 -right-20 w-56 h-auto object-contain transform -rotate-12 opacity-90"
            />
            
            <div className="relative w-64 h-[520px] bg-gray-800 rounded-[48px] border-[12px] border-gray-800 shadow-2xl overflow-hidden z-10">
              <img src="/placeholder.svg" alt="Dailish App Screenshot" className="absolute top-0 left-0 w-full h-full object-cover" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
