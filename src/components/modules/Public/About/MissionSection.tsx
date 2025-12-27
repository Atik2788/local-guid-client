"use client";

import { Heart, Eye, Target } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f9ff] via-[#e6f4fa] to-[#f8fbff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating meaningful connections between travelers and local communities
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Mission */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower local guides to share their passion and knowledge while providing travelers with authentic, memorable experiences that go beyond typical tourism.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Eye className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every traveler can discover the heart of a destination through the eyes of those who know it best — the locals who call it home.
              </p>
            </div>

            {/* Values */}
            <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Heart className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Authenticity, community, sustainability, and cultural respect guide everything we do. We celebrate diversity and foster genuine human connections.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
