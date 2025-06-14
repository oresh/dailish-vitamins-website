
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
          <div className="flex justify-center">
            <div className="relative w-72 h-[560px] bg-gray-800 rounded-[52px] border-[14px] border-gray-800 shadow-2xl overflow-hidden -rotate-3 transition-transform hover:rotate-0">
               <img src="/placeholder.svg" alt="Dailish App Nerdy Features" className="absolute top-0 left-0 w-full h-full object-cover" />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-gray-800 rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
