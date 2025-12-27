import { ArrowRight, DollarSign, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function BecomeGuide() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#c3f1ff] via-[#1e91b3] to-[#107e6b]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Share Your City, Earn Money
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12">
            Turn your local knowledge into income. Join our community of passionate guides and create unforgettable experiences for travelers.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg text-center">
              <DollarSign className="h-12 w-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">Earn More</h3>
              <p className="text-white/80 text-sm md:text-base">
                Set your own rates and keep 85% of your earnings
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg text-center">
              <Calendar className="h-12 w-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Schedule</h3>
              <p className="text-white/80 text-sm md:text-base">
                Work when you want and create your own tours
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg text-center">
              <TrendingUp className="h-12 w-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">Grow Your Business</h3>
              <p className="text-white/80 text-sm md:text-base">
                Access tools and support to build your reputation
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/become-a-guide"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition text-lg shadow-lg"
            >
              Become a Guide
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/become-a-guide#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
