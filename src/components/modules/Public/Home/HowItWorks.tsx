import { Search, UserCheck, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Guide",
    description: "Browse local guides by destination, expertise, and reviews",
  },
  {
    icon: UserCheck,
    title: "Choose & Connect",
    description: "Select the perfect guide and communicate your preferences",
  },
  {
    icon: Calendar,
    title: "Book Your Tour",
    description: "Schedule your experience and make secure payment",
  },
  {
    icon: Star,
    title: "Enjoy & Review",
    description: "Experience authentic local culture and share your story",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-tr from-[#166f9c] via-[#1e91b3] to-[#43c0e7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Follow these four simple steps to plan your perfect local experience
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              {/* Step Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
                <step.icon className="h-10 w-10 text-white" />
              </div>

              {/* Step Number */}
              <div className="w-10 h-10 rounded-full bg-white text-[#166f9c] font-bold flex items-center justify-center mb-4">
                {index + 1}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>

              {/* Step Description */}
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
