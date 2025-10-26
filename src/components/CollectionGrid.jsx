import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Relaxed Fit Tee",
    category: "Essentials",
    price: 28,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Everyday Denim",
    category: "Denim",
    price: 64,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Classic Hoodie",
    category: "Outerwear",
    price: 72,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1520975693411-d2f23fd9e069?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Linen Shirt",
    category: "Summer",
    price: 58,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1520975867597-0f151f5b0a1f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Tailored Trousers",
    category: "Formal",
    price: 80,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Ribbed Tank Top",
    category: "Basics",
    price: 22,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1517646287270-a4c09496a7b5?q=80&w=1600&auto=format&fit=crop",
  },
];

const CollectionGrid = () => {
  return (
    <section id="collection" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Featured Collection</h2>
            <p className="text-neutral-600 mt-1">Hand-picked styles for the season</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button className="px-3 py-2 text-sm rounded-full border border-neutral-300 hover:border-neutral-900">
              All
            </button>
            <button className="px-3 py-2 text-sm rounded-full border border-neutral-300 hover:border-neutral-900">
              Men
            </button>
            <button className="px-3 py-2 text-sm rounded-full border border-neutral-300 hover:border-neutral-900">
              Women
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
