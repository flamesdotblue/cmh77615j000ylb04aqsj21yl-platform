import React from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-neutral-500 mb-3">
              New Season • SS25
            </p>
            <h1 className="font-extrabold text-4xl sm:text-5xl leading-tight">
              THREADS
            </h1>
            <p className="mt-4 text-neutral-600 max-w-prose">
              Discover a wide range of contemporary essentials designed for everyday style and comfort. Crafted with premium fabrics and timeless silhouettes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition"
              >
                Shop Collection <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 hover:border-neutral-900 hover:text-black transition"
              >
                Explore Bestsellers
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
                alt="Model wearing Threads apparel"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
