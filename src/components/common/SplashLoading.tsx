'use client'

import Image from "next/image";

export default function SplashLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#4fd1e8] via-[#8be9fd] to-[#e6fcff]">
      
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]" />
      </div>

      {/* Main Glass Card */}
      <div className="relative z-10 text-center px-8 py-10 rounded-3xl bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/20">
        
        {/* Logo Area */}
        <div className="relative mb-10 flex items-center justify-center">
          
          {/* Outer Glow */}
          <div className="absolute w-36 h-36 rounded-full bg-white/20 blur-2xl animate-pulse" />

          {/* Outer Ring */}
          <div className="absolute w-32 h-32 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          
          {/* Inner Ring */}
          <div className="absolute w-24 h-24 border-4 border-white/20 border-b-white rounded-full animate-spin [animation-direction:reverse] [animation-duration:1.6s]" />

          {/* Center Logo */}
          <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl animate-float">
            <Image 
              src="/localGuide.png" 
              width={48} 
              height={48} 
              alt="Local Guide Logo"
              className="object-contain"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent animate-fade-in">
          Local Guide
        </h1>

        <div className="flex items-center justify-center gap-2 text-white/90 text-lg animate-fade-in [animation-delay:0.2s]">
          <span>Discover</span>
          <span className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <span>Explore</span>
          <span className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <span>Experience</span>
        </div>

        {/* Loading */}
        <div className="mt-6 flex items-center justify-center gap-3 text-white/80 animate-fade-in [animation-delay:0.4s]">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.15s]" />
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.3s]" />
          </div>
          <span className="text-sm font-medium tracking-wide">
            Loading your adventure
          </span>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
