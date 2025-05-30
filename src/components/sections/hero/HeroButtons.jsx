import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function HeroButtons({ className = "" }) {
  return (
    <div
      className={`flex flex-wrap gap-4 justify-center md:justify-start ${className}`}
    >
      <Button variant="default" onClick={() => window.open("/resume.pdf")}>
        <Download className="mr-2" /> Resume
      </Button>
      <Button
        variant="outline"
        onClick={() => window.open("https://github.com/yourusername")}
      >
        <Github className="mr-2" /> GitHub
      </Button>
      <Button
        variant="outline"
        onClick={() => window.open("https://linkedin.com/in/yourusername")}
      >
        <Linkedin className="mr-2" /> LinkedIn
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <Mail className="mr-2" /> Let's Talk
      </Button>
    </div>
  );
}
