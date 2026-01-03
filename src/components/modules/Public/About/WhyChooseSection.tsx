"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Clock,
  Headphones,
  BadgeCheck,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Verified Guides",
    description:
      "Every guide goes through a strict verification process to ensure safety, authenticity, and professionalism.",
    accent: "from-green-400 to-emerald-500",
  },
  {
    icon: Star,
    title: "Real Local Experiences",
    description:
      "Skip tourist traps and explore places only locals truly know and love.",
    accent: "from-yellow-400 to-orange-500",
  },
  {
    icon: Clock,
    title: "Your Time, Your Way",
    description:
      "Flexible booking options that adapt to your travel plans — not the other way around.",
    accent: "from-blue-400 to-cyan-500",
  },
  {
    icon: Headphones,
    title: "Always-On Support",
    description:
      "Day or night, our support team is here whenever you need help.",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    icon: BadgeCheck,
    title: "Fair & Transparent Pricing",
    description:
      "No hidden costs. You pay exactly what you see, always.",
    accent: "from-primary to-sky-500",
  },
  {
    icon: Users,
    title: "A Growing Global Community",
    description:
      "Thousands of travelers and guides trust LocalGuide every day.",
    accent: "from-rose-400 to-pink-500",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#b1d2f3] via-[#f7fbff] to-[#93c4f6] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Why Travelers Love Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Than a Platform — <br className="hidden sm:block" />
              A Better Way to Travel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              LocalGuide is built to connect travelers with real people,
              real stories, and unforgettable experiences.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Bottom trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16 text-sm text-gray-500"
          >
            Trusted by travelers from <span className="font-semibold text-gray-800">50+ countries</span> worldwide 🌍
          </motion.div>

        </div>
      </div>
    </section>
  );
}
