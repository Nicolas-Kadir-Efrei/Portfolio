"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AccueilSection from "@/components/accueil";
import AboutSection from "@/components/about";
import ParcoursSection from "@/components/parcours";
import ProjetsSection from "@/components/projets";
import VeilleSelector from "@/components/veilleSelector";
import E5Section from "@/components/e5";

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
    const element = document.getElementById(newSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id '${newSection}' not found`);
    }
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
        className="fixed top-0 left-0 h-full p-4 text-white w-64 flex flex-col transition-all duration-500 overflow-y-auto"
        style={{
          background: "linear-gradient(45deg, #8A2BE2, #FF69B4)",
          animation: "gradient 8s ease infinite",
          backgroundSize: "200% 200%",
          boxShadow: "0 0 20px rgba(138, 43, 226, 0.3)",
          backdropFilter: "blur(10px)",
          zIndex: 50,
        }}
      >
        {/* Profil */}
        <div className="flex flex-col items-center mb-6 mt-4">
          <div className="w-32 h-32 rounded-full border-4 border-white/30 overflow-hidden mb-4 shadow-lg hover:scale-105 transition-transform duration-300 bg-white/10">
            {/* Remplacez par votre photo */}
            <img 
              src="/assets/profile.jpg" 
              alt="Photo de profil" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/128?text=Photo';
              }}
            />
          </div>
          <h3 className="text-xl font-bold mb-1">Nicolas Kadir CIFTCI</h3>
          <p className="text-sm text-white/80 mb-3">kadirciftci.pro@gmail.com</p>
          
          {/* Boutons sociaux */}
          <div className="flex space-x-3 mb-6">
            <a 
              href="https://www.linkedin.com/in/nicolas-kadir-ciftci/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/Nicolas-Kadir-Efrei" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Séparateur */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
        
        {/* Navigation */}
        <div className="flex flex-col space-y-3">
          {["accueil", "à propos", "parcours", "projets", "veille", "e5", "BTS SIO"].map((item) => (
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
        </div>
      </nav>

      <main className="w-full ml-64">
        <AccueilSection />
        <AboutSection />
        <ParcoursSection />
        <ProjetsSection />
        <VeilleSelector />
        <E5Section />
        <section id="BTS SIO" className="min-h-screen w-full py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold text-center flex-grow">BTS SIO</h2>
              </div>
              
              <div className="space-y-8">
                {/* Présentation du BTS SIO */}
                <div className="bg-gradient-to-r from-purple-800/40 to-pink-600/40 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/20 pb-3">
                    Présentation de la formation
                  </h3>
                  <p className="mt-2 text-white/80 leading-relaxed mb-6">
                    Le BTS Services Informatiques aux Organisations (SIO) est une formation de niveau bac+2 qui prépare aux métiers de l'informatique. Cette formation se décline en deux options : SISR (Solutions d'Infrastructure, Systèmes et Réseaux) et SLAM (Solutions Logicielles et Applications Métiers).
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white/10 p-6 rounded-xl">
                      <h4 className="font-bold text-xl text-white mb-4">Option SISR</h4>
                      <p className="text-white/80 mb-4">
                        L'option SISR forme des professionnels capables de gérer et d'administrer le réseau d'une entreprise et d'en assurer la sécurité, la maintenance et le déploiement.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-white/80">
                        <li>Administration systèmes et réseaux</li>
                        <li>Cybersécurité</li>
                        <li>Virtualisation et Cloud Computing</li>
                        <li>Supervision et maintenance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-6 rounded-xl">
                      <h4 className="font-bold text-xl text-white mb-4">Option SLAM</h4>
                      <p className="text-white/80 mb-4">
                        L'option SLAM forme des développeurs capables de concevoir, développer, déployer et maintenir des solutions applicatives pour répondre aux besoins des organisations.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-white/80">
                        <li>Développement d'applications</li>
                        <li>Conception de bases de données</li>
                        <li>Intégration web et mobile</li>
                        <li>Méthodes agiles et DevOps</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Débouchés */}
                <div className="bg-gradient-to-r from-purple-800/40 to-pink-600/40 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/20 pb-3">
                    Débouchés professionnels
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 p-6 rounded-xl">
                      <h4 className="font-bold text-xl text-white mb-4">Métiers SISR</h4>
                      <ul className="list-disc pl-6 space-y-2 text-white/80">
                        <li>Administrateur systèmes et réseaux</li>
                        <li>Technicien support</li>
                        <li>Responsable sécurité</li>
                        <li>Technicien d'infrastructure</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-6 rounded-xl">
                      <h4 className="font-bold text-xl text-white mb-4">Métiers SLAM</h4>
                      <ul className="list-disc pl-6 space-y-2 text-white/80">
                        <li>Développeur d'applications</li>
                        <li>Développeur web et mobile</li>
                        <li>Intégrateur d'applications</li>
                        <li>Analyste programmeur</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-6 rounded-xl">
                      <h4 className="font-bold text-xl text-white mb-4">Poursuite d'études</h4>
                      <ul className="list-disc pl-6 space-y-2 text-white/80">
                        <li>Licence professionnelle</li>
                        <li>Bachelor informatique</li>
                        <li>École d'ingénieur</li>
                        <li>Master en informatique</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
