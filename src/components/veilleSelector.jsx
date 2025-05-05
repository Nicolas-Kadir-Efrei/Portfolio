"use client";
import { useState } from 'react';
import VeilleNoCode from './veille';
import VeilleJeuxMobiles from './veilleJeuxMobiles';
import VeilleStreaming from './veilleStreaming';

export default function VeilleSelector() {
  const [activeVeille, setActiveVeille] = useState(null);

  // Fonction pour revenir à la sélection des veilles
  const handleBack = () => {
    setActiveVeille(null);
  };

  // Si aucune veille n'est sélectionnée, afficher le sélecteur
  if (activeVeille === null) {
    return (
      <section id="veille" className="min-h-screen w-full py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Veilles Technologiques</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Carte pour la veille Low-Code/No-Code */}
              <div 
                className="bg-gradient-to-br from-purple-800/40 to-pink-600/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setActiveVeille('nocode')}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Low-Code / No-Code</h3>
                <p className="text-white/80 mb-4">
                  La démocratisation du développement logiciel et son impact sur l'industrie IT entre 2023 et 2025.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-pink-300">2023-2025</span>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300">
                    Consulter
                  </button>
                </div>
              </div>
              
              {/* Carte pour la veille Jeux Mobiles */}
              <div 
                className="bg-gradient-to-br from-blue-800/40 to-purple-600/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setActiveVeille('jeux')}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Jeux Vidéo Mobiles</h3>
                <p className="text-white/80 mb-4">
                  Évolution et tendances des jeux mobiles, technologies émergentes et nouveaux modèles économiques.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-blue-300">2023-2025</span>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300">
                    Consulter
                  </button>
                </div>
              </div>
              
              {/* Carte pour la veille Streaming */}
              <div 
                className="bg-gradient-to-br from-red-800/40 to-orange-600/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setActiveVeille('streaming')}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Plateformes de Streaming</h3>
                <p className="text-white/80 mb-4">
                  L'évolution des plateformes de streaming vidéo, innovations technologiques et nouveaux usages.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-red-300">2023-2025</span>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300">
                    Consulter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Sinon, afficher la veille sélectionnée avec un bouton de retour intégré
  return (
    <div className="relative">
      <div className="relative z-10">
        {activeVeille === 'nocode' && <VeilleNoCode onBack={handleBack} />}
        {activeVeille === 'jeux' && <VeilleJeuxMobiles onBack={handleBack} />}
        {activeVeille === 'streaming' && <VeilleStreaming onBack={handleBack} />}
      </div>
    </div>
  );
}
