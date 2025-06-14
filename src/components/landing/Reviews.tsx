
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah K.",
    review: "Finally, a vitamin tracker that doesn't scream at me. The design is so calming, and I love the cheeky tone. It actually makes me want to take my vitamins.",
    rating: 5,
  },
  {
    name: "Mike T.",
    review: "As a data-driven person, I love the 'For the Nerds' features. Syncing with Apple Health is seamless. 10/10 would recommend.",
    rating: 5,
  },
  {
    name: "Jessie P.",
    review: "I'm the 'every other Thursday' type and this app gets me. No pressure, just gentle reminders. The AI suggestions are surprisingly helpful too!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">No sign-ups, no ads, no pop-ups.</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Just a clean, slightly cheeky app that helps you feel better, one capsule at a time. Here's what people are saying.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm space-y-4">
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 italic">"{review.review}"</p>
              <p className="font-bold text-primary">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
