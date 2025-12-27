"use client";

import { MapPin, Users, Globe, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Experience Places Like a Local
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            We connect curious travelers with passionate local guides who share
            their cities through unique, personalized tours.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10">

            <StatCard icon={<Users />} value="500+" label="Local Guides" />
            <StatCard icon={<MapPin />} value="100+" label="Cities" />
            <StatCard icon={<Globe />} value="50+" label="Countries" />
            <StatCard icon={<Award />} value="10K+" label="Happy Travelers" />

          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Stat Card */
function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition">
      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
        <div className="text-white w-7 h-7">{icon}</div>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-200">{label}</p>
    </div>
  );
}
