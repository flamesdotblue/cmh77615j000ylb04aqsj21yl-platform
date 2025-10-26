import React from "react";
import { Heart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative rounded-xl border border-neutral-200 overflow-hidden bg-white">
      <div className="aspect-[4/5] overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <button
        className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur shadow hover:bg-white"
        aria-label="Add to wishlist"
      >
        <Heart className="h-4 w-4" />
      </button>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-medium leading-snug">{product.title}</h3>
            <p className="text-sm text-neutral-500">{product.category}</p>
          </div>
          <span className="font-semibold">${product.price}</span>
        </div>
        <div className="mt-3 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-current" : ""}`} />
          ))}
        </div>
        <button className="mt-4 w-full rounded-lg bg-black text-white py-2 text-sm font-medium hover:bg-neutral-800 transition">
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
