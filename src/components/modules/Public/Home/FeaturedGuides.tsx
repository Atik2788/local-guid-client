import { Star, MapPin, Languages, Award, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { UserInfo } from "@/types/user.interface";

interface FeaturedGuidesProps {
  guides: UserInfo[];
}

export default function FeaturedGuides({ guides }: FeaturedGuidesProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#166f9c] via-[#1e91b3] to-[#43c0e7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Top-Rated Local Guides
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Meet our verified expert guides who bring destinations to life
          </p>
        </div>

        {guides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide._id}
                href={`/all-guides/${guide._id}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg group"
              >
                {/* Avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    {guide.avatarUrl ? (
                      <Image
                        src={guide.avatarUrl}
                        alt={guide.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                        {guide.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                    {guide.isVerified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full">
                        <CheckCircle size={16} />
                      </div>
                    )}
                  </div>
                  {guide.isVerified && (
                    <div className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      Verified
                    </div>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-yellow-300 transition-colors">
                  {guide.name}
                </h3>

                {/* Location */}
                {guide.location && (
                  <div className="flex items-center gap-1 text-white/80 text-sm mb-3">
                    <MapPin className="h-4 w-4" />
                    {guide.location}
                  </div>
                )}

                {/* Rating */}
                {guide.reviewCount && guide.reviewCount > 0 ? (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm text-white">
                        {guide.averageRating?.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-white/70 text-sm">
                      ({guide.reviewCount} review{guide.reviewCount !== 1 ? 's' : ''})
                    </span>
                  </div>
                ) : (
                  <div className="mb-3">
                    <span className="text-white/70 text-sm">New Guide</span>
                  </div>
                )}

                {/* Languages */}
                {guide.languages && guide.languages.length > 0 && (
                  <div className="flex items-center gap-1 text-white/80 text-sm mb-3">
                    <Languages className="h-4 w-4" />
                    <span className="truncate">
                      {guide.languages.slice(0, 2).join(", ")}
                      {guide.languages.length > 2 && ` +${guide.languages.length - 2}`}
                    </span>
                  </div>
                )}

                {/* Expertise */}
                {guide.expertise && guide.expertise.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.expertise.slice(0, 2).map((exp, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {exp}
                      </span>
                    ))}
                    {guide.expertise.length > 2 && (
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                        +{guide.expertise.length - 2}
                      </span>
                    )}
                  </div>
                )}

                {/* View Profile Button */}
                <div className="pt-4 border-t border-white/20">
                  <div className="text-center">
                    <span className="text-yellow-300 font-semibold text-sm group-hover:text-yellow-400 transition-colors">
                      View Profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-red-300">No top-rated guides available yet.</p>
          </div>
        )}

        {/* View All Button */}
        {guides.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/all-guides"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-300 text-gray-900 rounded-xl hover:bg-yellow-400 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              View All Guides
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
