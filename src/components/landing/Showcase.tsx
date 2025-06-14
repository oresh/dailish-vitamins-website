const Showcase = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">For the nerds (we love you)</h2>
            <ul className="space-y-4 text-lg text-foreground/80">
              <li className="flex items-start"><span className="text-secondary mr-3 mt-1">✓</span> Full HealthKit integration</li>
              <li className="flex items-start"><span className="text-secondary mr-3 mt-1">✓</span> Supports units like mg, mcg, IU</li>
              <li className="flex items-start"><span className="text-secondary mr-3 mt-1">✓</span> Tracks collections down to each dose</li>
              <li className="flex items-start"><span className="text-secondary mr-3 mt-1">✓</span> Uses structured supplement data (no snake oil, we promise)</li>
            </ul>
          </div>
          <div className="relative flex justify-center">
             {/* Decorations */}
            <div className="absolute top-10 -right-10 w-64 h-80 bg-secondary/20 -rotate-12 rounded-2xl opacity-50"></div>
            <div className="absolute bottom-10 -left-10 w-56 h-72 bg-primary/10 rotate-6 rounded-2xl opacity-50"></div>
            
            <div className="relative w-72 h-[600px] bg-gray-800 rounded-[52px] border-[14px] border-gray-800 shadow-2xl overflow-hidden -rotate-3 transition-transform hover:rotate-0 z-10">
               <img src="vitamins.png" alt="Dailish App Vitamins Screenshot" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
