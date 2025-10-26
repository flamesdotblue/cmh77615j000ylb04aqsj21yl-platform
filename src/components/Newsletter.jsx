import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 sm:p-12">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Join the THREADS list</h3>
            <p className="mt-2 text-neutral-600">Be the first to know about new drops, exclusive offers, and style stories.</p>
            <form
              className="mt-6 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing to THREADS!");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:flex-1 rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
              <button
                type="submit"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-neutral-800 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-neutral-500">We respect your privacy. Unsubscribe anytime.</p>
          </div>
          <div className="pointer-events-none select-none hidden md:block absolute -right-10 -bottom-10 opacity-20 rotate-6">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
              alt="Newsletter art"
              className="w-80 h-80 object-cover rounded-xl shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
