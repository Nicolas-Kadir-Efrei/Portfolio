"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AccueilSection from "@/components/accueil";
import AboutSection from "@/components/about";
import ParcoursSection from "@/components/parcours";
import ProjetsSection from "@/components/projets";

export default function Portfolio() {
  const [section, setSection] = useState("accueil");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const sectionId = entry.target.id;
            setSection(sectionId);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (newSection) => {
    setSection(newSection);
    setScrolling(true);
    document.getElementById(newSection).scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setScrolling(false), 1000);
  };

  return (
    <div className="flex relative min-h-screen overflow-x-hidden">
      <div 
        className="fixed inset-0 w-full h-full"
        style={{
          background: "linear-gradient(45deg, #8A2BE2, #FF69B4)",
          animation: "gradient 8s ease infinite",
          backgroundSize: "200% 200%",
          zIndex: -1,
        }}
      />
      <nav 
        className="fixed top-0 left-0 h-full p-4 text-white w-48 flex flex-col space-y-4 transition-all duration-500"
        style={{
          background: "linear-gradient(45deg, #8A2BE2, #FF69B4)",
          animation: "gradient 8s ease infinite",
          backgroundSize: "200% 200%",
          boxShadow: "0 0 20px rgba(138, 43, 226, 0.3)",
          backdropFilter: "blur(10px)",
          zIndex: 50,
        }}
      >
        {["accueil", "about", "parcours", "projets", "veille", "contact", "e5"].map((item) => (
          <Button
            key={item}
            onClick={() => handleNavigation(item)}
            className={`p-2 transition-all duration-300 transform hover:scale-105 ${
              section === item
                ? "bg-white/20 backdrop-blur-sm shadow-lg scale-105"
                : "hover:bg-white/10"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </nav>

      <main className="w-full ml-48">
        <AccueilSection />
        <AboutSection />
        <ParcoursSection />
        <ProjetsSection />
        <section id="veille" className="min-h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm">
          <h2 className="text-3xl text-white">Veilles</h2>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm">
          <h2 className="text-3xl text-white">Contact</h2>
        </section>
        <section id="e5" className="min-h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm">
          <h2 className="text-3xl text-white">Épreuve E5</h2>
        </section>
      </main>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          overflow-x: hidden;
        }

        :global(section) {
          opacity: 1;
          transform: none;
        }

        :global(section.visible) {
          animation: none;
        }
      `}</style>
    </div>
  );
}
