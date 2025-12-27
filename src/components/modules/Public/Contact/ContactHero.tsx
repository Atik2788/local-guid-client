"use client";

import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: "url('/tour4.jpg')",
        }}  
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full transition hover:scale-105">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">
              Contact LocalGuide
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight transition-all duration-300 hover:tracking-wide">
            Let’s Connect & Plan Something Amazing
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-200 leading-relaxed transition-opacity duration-300 hover:opacity-90">
            Whether you have a question, feedback, or a travel idea —  
            our team is always ready to listen and guide you forward.
          </p>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            <div className="group p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              <div className="flex items-center justify-center gap-2 text-white">
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition" />
                <span className="text-sm">support@localguide.com</span>
              </div>
            </div>

            <div className="group p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              <div className="flex items-center justify-center gap-2 text-white">
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition" />
                <span className="text-sm">Available 24/7</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
