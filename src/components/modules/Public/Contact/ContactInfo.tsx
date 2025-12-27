"use client";

import { IPlatformSettings } from "@/types/settings.interface";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactInfo({ settings }: { settings: IPlatformSettings }) {

  const contactDetails = [
    {
      icon: Mail,
      title: "Send Us an Email",
      subtitle: "Quick replies within 24 hours",
      details: [settings.contacts.supportEmail, settings.general.supportEmail],
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Phone,
      title: "Talk to Our Team",
      subtitle: "Friendly support always ready",
      details: [settings.contacts.phone, settings.contacts.supportPhone],
      color: "text-green-600",
      bg: "bg-green-100/60",
    },
    {
      icon: MapPin,
      title: "Our Office Location",
      subtitle: "Feel free to visit us",
      details: [settings.contacts.address],
      color: "text-blue-600",
      bg: "bg-blue-100/60",
    },
    {
      icon: Clock,
      title: "Working Hours",
      subtitle: "We respect your time",
      details: [settings.contacts.businessHours],
      color: "text-purple-600",
      bg: "bg-purple-100/60",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b bg-[#a4c7de]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Contact Information
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Multiple ways to reach us — choose what’s most convenient for you
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-gray-200 bg-white
                hover:border-primary/50 hover:shadow-xl transition-all duration-300
                hover:-translate-y-2"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-5
                  group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-500 mb-3">
                  {item.subtitle}
                </p>

                {/* Details */}
                <div className="space-y-1 mb-4">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Hover Hint */}
                <div className="flex items-center gap-1 text-xs text-primary opacity-0
                  group-hover:opacity-100 transition-opacity duration-300">
                  <span>Reach out now</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
