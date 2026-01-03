'use client';

import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useTransition } from "react";
import { subscribeToNewsletter } from "@/services/newsletter/newsletter.service";

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    startTransition(async () => {
      const result = await subscribeToNewsletter(email);

      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setEmail('');

        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(result.message);

        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    });
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#c3f1ff] via-[#1e91b3] to-[#107e6b] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 backdrop-blur-md">
            <Mail className="h-8 w-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
            Get Travel Inspiration
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for exclusive deals, travel tips, and destination guides
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/80 bg-white/10 text-white placeholder-white/70 disabled:opacity-50 disabled:cursor-not-allowed"
              required
              disabled={isPending}
            />
            <button
              type="submit"
              disabled={isPending}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-green-500 bg-white/20 px-4 py-3 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
              <CheckCircle className="h-5 w-5 text-white" />
              <p className="text-sm font-medium text-white">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-500 bg-white/20 px-4 py-3 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="h-5 w-5 text-white" />
              <p className="text-sm font-medium text-white">{message}</p>
            </div>
          )}

          {status === 'idle' && (
            <p className="text-white/80 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
