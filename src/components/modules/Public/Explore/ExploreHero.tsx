"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ExploreHero() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("searchTerm", searchTerm);
    if (location) params.set("city", location);
    
    router.push(`/explore?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Desktop Image */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/tourPic.jpg')",
        }}
      ></div>

      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Experience Places Like a Local
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            Meet passionate local guides and discover hidden gems worldwide
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-9">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are you looking for?
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Food tours, history walks..."
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-3 flex items-end">
              <Button
                onClick={handleSearch}
                className="w-full h-12 text-base font-semibold"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Tours
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#ffdd57]">300+</div>
            <div className="text-sm text-white/80">Tours Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#ffdd57]">100+</div>
            <div className="text-sm text-white/80">Local Guides</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#ffdd57]">60+</div>
            <div className="text-sm text-white/80">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#ffdd57]">5k+</div>
            <div className="text-sm text-white/80">Happy Tourists</div>
          </div>
        </div>
      </div>
    </section>
  );
}
