import React, { useState } from "react";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "New Arrivals", href: "#collection" },
    { label: "Men", href: "#collection" },
    { label: "Women", href: "#collection" },
    { label: "Accessories", href: "#collection" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md hover:bg-neutral-100"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="font-extrabold tracking-tight text-xl">
              THREADS
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-black transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition text-sm text-neutral-700">
              <Search className="h-4 w-4" />
              <span className="hidden md:inline">Search</span>
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-extrabold text-lg">THREADS</span>
              <button
                className="p-2 rounded-md hover:bg-neutral-100"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md hover:bg-neutral-100 text-neutral-800"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
