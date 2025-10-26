import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CollectionGrid from "./components/CollectionGrid";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <CollectionGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
