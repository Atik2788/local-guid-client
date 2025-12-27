"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How does LocalGuide work?",
    answer:
      "LocalGuide connects travelers with verified local guides. You choose a destination, select a guide, customize your experience, and book securely through our platform.",
  },
  {
    question: "Is it safe to book a local guide?",
    answer:
      "Yes. Every guide is identity-verified, reviewed by travelers, and monitored continuously to ensure safety, professionalism, and quality service.",
  },
  {
    question: "Can I customize my tour experience?",
    answer:
      "Absolutely. You can discuss your interests directly with the guide before booking and tailor the tour to match your schedule, pace, and preferences.",
  },
  {
    question: "What happens if my plans change?",
    answer:
      "Most tours offer flexible cancellation or rescheduling options. Exact policies are shown before booking so you can plan with confidence.",
  },
  {
    question: "How do payments and pricing work?",
    answer:
      "All payments are handled securely through LocalGuide. Prices are transparent with no hidden fees, and guides receive fair compensation for their services.",
  },
  {
    question: "How can I join as a local guide?",
    answer:
      "You can apply through our ‘Become a Guide’ page. After profile review and verification, you can start offering tours and earning on your own terms.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-[#88c5d2] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Help Center
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Got Questions? We’ve Got Answers
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about using LocalGuide
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300
                    ${
                      isOpen
                        ? "border-primary/40 shadow-lg bg-white"
                        : "border-gray-200 bg-white hover:shadow-md"
                    }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  >
                    <span className="font-semibold text-gray-900 pr-4 text-base md:text-lg">
                      {faq.question}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center
                        transition-transform duration-300
                        ${
                          isOpen
                            ? "bg-primary text-white rotate-180"
                            : "bg-gray-100 text-gray-600 group-hover:bg-primary/10"
                        }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center rounded-2xl p-10 bg-gradient-to-br from-primary/5 to-primary/10">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-xl font-semibold text-gray-900 mb-2">
              Didn’t find what you’re looking for?
            </p>
            <p className="text-gray-600 max-w-md mx-auto">
              Our support team is always ready to help you with personalized assistance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
