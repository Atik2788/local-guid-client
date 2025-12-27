"use client";

import { Compass, Sparkles } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#b1d2f3] via-[#f7fbff] to-[#93c4f6] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit">
                <Compass className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Our Journey
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Built on Stories, <br /> Driven by Local Voices
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  LocalGuide started with a simple realization — the most
                  unforgettable travel moments don’t come from guidebooks,
                  but from conversations with locals.
                </p>

                <p>
                  We noticed that travelers were craving deeper experiences,
                  while passionate locals were eager to share their culture,
                  history, and hidden gems. Yet, there was no trusted space
                  connecting the two.
                </p>

                <p>
                  That’s when LocalGuide was born — a platform designed to
                  turn cities into stories and journeys into meaningful
                  connections.
                </p>

                <p>
                  Today, we proudly support a growing community of local guides
                  and travelers who believe travel should feel personal,
                  authentic, and human.
                </p>
              </div>

              {/* Extra value points */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <p className="text-lg font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-500">Authentic Experiences</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <p className="text-lg font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-500">Destinations Worldwide</p>
                </div>
              </div>
            </div>

            {/* Right Highlight Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-10 text-center space-y-6 border border-gray-100">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>

                <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
                  “We don’t sell tours. <br />
                  We create moments that travelers carry forever.”
                </p>

                <p className="text-sm text-gray-500">
                  — The LocalGuide Promise
                </p>
              </div>

              {/* Glow effects */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-blue-400/20 rounded-full blur-3xl" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
