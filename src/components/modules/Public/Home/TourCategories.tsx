import {
  Utensils,
  Camera,
  Landmark,
  Mountain,
  Palette,
  Music,
  ShoppingBag,
  Waves,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: Utensils,
    name: "Food & Wine",
    value: "FOOD",
    count: 156,
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Landmark,
    name: "History & Culture",
    value: "HISTORY",
    count: 203,
    color: "from-purple-400 to-indigo-500",
  },
  {
    icon: Mountain,
    name: "Adventure",
    value: "ADVENTURE",
    count: 98,
    color: "from-green-400 to-teal-500",
  },
  {
    icon: Camera,
    name: "Photography",
    value: "PHOTOGRAPHY", 
    count: 87,
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Palette,
    name: "Art & Design",
    value: "ART",
    count: 124,
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Music,
    name: "Music & Nightlife",
    value: "NIGHTLIFE",
    count: 76,
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: ShoppingBag,
    name: "Shopping",
    value: "SHOPPING",
    count: 92,
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Waves,
    name: "Beach & Water",
    value: "OTHER",
    count: 65,
    color: "from-cyan-400 to-blue-500",
  },
];

export default function TourCategories() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#c3f1ff] via-[#1e91b3] to-[#107e6b]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Find the perfect tour that matches your interests
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/explore?category=${category.value}`}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition`}
              >
                <category.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-yellow-300 transition-colors">
                {category.name}
              </h3>
              <p className="text-white/80 text-sm">{category.count} tours</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
