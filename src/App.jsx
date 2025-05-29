import "./App.css";
import StarfallBackground from "@/components/layout/StarfallBackground";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";

function App() {
  return (
    <div className="relative min-h-screen">
      <StarfallBackground />
      <Navbar />
      <div className="relative z-10 flex items-center justify-center h-screen">
        <Button variant="default" size="lg">
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default App;
