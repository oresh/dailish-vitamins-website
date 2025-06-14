import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden h-[500px] md:h-[680px]">
      <div className="absolute top-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float [animation-delay:-1.5s]"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-center">
          <div className="space-y-6 text-center md:text-left ml-4 md:ml-8 lg:ml-12 md:col-span-1 lg:col-span-2">
            <h1 className="text-4xl md:text-6xl font-bold !text-accent leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Take your vitamins…<br/><span style={{ color: 'rgb(45 90 90 / var(--tw-bg-opacity, 1))' }}>dail-ish</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-up max-w-[530px]" style={{ animationDelay: '0.3s' }}>
              Dailish helps you track your supplements, build a habit, and maybe even feel like a responsible adult.
            </p>
            <div className="animate-fade-in-up flex justify-center md:justify-start" style={{ animationDelay: '0.5s' }}>
              <a href="#download">
                <img src="/download-icon.svg" alt="Download on the App Store" className="h-14 w-auto" />
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in-up md:col-span-1 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            {/* Empty space for grid layout */}
          </div>
        </div>
      </div>
      
      {/* Hand holding phone positioned absolutely in bottom right corner */}
      <div className="absolute bottom-0 right-0 animate-fade-in-up hidden md:block" style={{ animationDelay: '0.2s' }}>
        <div className="relative">
          <img src="/hand.png" alt="Hand holding phone" className="relative w-80 md:w-[400px] h-auto z-20" />
          {/* Phone mockup positioned inside the hand */}
          <div className="absolute overflow-hidden z-10" style={{ top: '24px', left: '63px', width: '217px', height: '471px' }}>
            <img src="/homescreen.png" alt="Dailish App Screenshot" className="w-full h-full object-cover z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
