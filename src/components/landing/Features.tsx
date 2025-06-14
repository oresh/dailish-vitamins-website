
import {
  PackagePlus,
  Pipette,
  Activity,
  UserCheck,
  PieChart,
  HeartPulse,
  Bell,
  BrainCircuit,
  Icon as LucideIcon,
} from "lucide-react";

const features = [
  { icon: PackagePlus, title: "Build your stack", description: "Create custom vitamin and supplement collections." },
  { icon: Pipette, title: "Track your intake", description: "Add doses, units, and track what you actually take." },
  { icon: Activity, title: "Daily progress", description: "Get daily progress insights & a personalized health score." },
  { icon: UserCheck, title: "Personalized Profile", description: "Answer quick dietary questions to personalize your profile." },
  { icon: PieChart, title: "RDA Tracking", description: "See your intake as a % of your Recommended Daily Amount." },
  { icon: HeartPulse, title: "Apple Health Sync", description: "Sync with Apple Health so your doctor is proud." },
  { icon: Bell, title: "Gentle Reminders", description: "Stay gently nudged with morning and evening reminders." },
  { icon: BrainCircuit, title: "Smart AI Suggestions", description: "Use smart AI to suggest missing nutrients in your diet." },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need. Nothing you don't.</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Whether you're consistent, chaotic, or “every other Thursday” kind of healthy — Dailish keeps you on track without judging your vibe.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-secondary/20 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold !text-primary mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
