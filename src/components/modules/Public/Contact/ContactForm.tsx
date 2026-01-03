"use client";

import { useActionState, useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { submitContact } from "@/services/contact/submitContact";
import InputFieldError from "@/components/shared/InputFieldError";

const inquiryTypes = [
  "General Inquiry",
  "Booking Support",
  "Become a Guide",
  "Partnership",
  "Technical Issue",
  "Feedback",
  "Other",
];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      setIsSubmitted(true);

      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setSelectedInquiryType("");
      setSubject("");
      setMessage("");

      setTimeout(() => setIsSubmitted(false), 5000);
    } else if (state && !state.success) {
      toast.error(state.message || "Please check the form for errors");
    }
  }, [state]);

  return (
    <section className="py-20 bg-[#a4c7de] relative overflow-hidden">
      {/* background blur blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Contact Support
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Let’s Start a Conversation
            </h2>
            <p className="text-gray-700">
              Share your questions or ideas — our team usually replies within 24 hours
            </p>
          </div>

          {/* Card */}
          <div
            className="bg-[#e9fafe] backdrop-blur-xl rounded-3xl border border-white/40
            shadow-2xl p-8 md:p-12 animate-slide-up"
          >
            {isSubmitted ? (
              <div className="text-center py-14 space-y-4">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thanks for reaching out. We’ll get back to you shortly.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel htmlFor="fullName">Full Name *</FieldLabel>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      className="h-11 focus:ring-2 focus:ring-primary/30"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      disabled={isPending}
                    />
                    <InputFieldError field="fullName" state={state} />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Email *</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-11 focus:ring-2 focus:ring-primary/30"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isPending}
                    />
                    <InputFieldError field="email" state={state} />
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel htmlFor="phoneNumber">
                      Phone (optional)
                    </FieldLabel>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="+880..."
                      className="h-11"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      disabled={isPending}
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Inquiry Type *</FieldLabel>
                    <Select
                      name="inquiryType"
                      value={selectedInquiryType}
                      onValueChange={setSelectedInquiryType}
                      disabled={isPending}
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Choose a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <Field>
                  <FieldLabel>Subject *</FieldLabel>
                  <Input
                    name="subject"
                    placeholder="Short summary of your message"
                    className="h-11"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={isPending}
                  />
                </Field>

                <Field>
                  <FieldLabel>Message *</FieldLabel>
                  <Textarea
                    name="message"
                    placeholder="Write your message here..."
                    className="min-h-36 resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isPending}
                  />
                </Field>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-12 text-base font-semibold
                  hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  {isPending ? "Sending..." : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
