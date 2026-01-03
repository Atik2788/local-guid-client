import { Star, Quote, CloudCog } from "lucide-react";
import { getBestRandomReviews } from "@/services/review/review.service";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

export default async function Testimonials() {
  const response = await getBestRandomReviews();
  console.log("response", response)

  // Transform database reviews to match component format
  const testimonials =
    response.success && response.data?.length > 0
      ? response.data.map((review: any) => ({
          id: review._id,
          name: review.author?.name || "Anonymous Traveler",
          location: review.author?.location || "Verified Tourist",
          rating: review.rating,
          text: review.content || "Amazing experience with our local guide!",
          tour: review.tour?.title || "Local Tour",
          date: new Date(review.createdAt).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          }),
        }))
      : [];

  return (
    <section className="relative py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/tour3.jpg"
          alt="Testimonials Background"
          className="object-cover object-center"
          fill={true}   // <- fill explicitly true
          priority={true}
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            What Travelers Say
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Real experiences from real travelers around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial: any) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
