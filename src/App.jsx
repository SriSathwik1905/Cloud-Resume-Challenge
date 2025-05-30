import "./App.css";
import StarfallBackground from "@/components/layout/StarfallBackground";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/hero/Hero";

function App() {
  return (
    <div className="relative min-h-screen">
      <StarfallBackground />
      <Navbar />
      <div className="mt-16">
        <Hero />
      </div>
    </div>
  );
}

export default App;
