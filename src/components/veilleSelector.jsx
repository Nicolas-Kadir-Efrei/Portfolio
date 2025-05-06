"use client";
import { useState, useEffect } from 'react';
import VeilleNoCode from './veille';
import VeilleJeuxMobiles from './veilleJeuxMobiles';
import VeilleStreaming from './veilleStreaming';
import { motion, AnimatePresence } from 'framer-motion';

export default function VeilleSelector() {
  const [activeVeille, setActiveVeille] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fonction pour revenir à la sélection des veilles
  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveVeille(null);
      setIsAnimating(false);
    }, 300); // Durée de l'animation de sortie
  };
  
  // Fonction pour sélectionner une veille avec animation
  const selectVeille = (veille) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveVeille(veille);
      setIsAnimating(false);
    }, 300); // Durée de l'animation d'entrée
  };

  // Si aucune veille n'est sélectionnée, afficher le sélecteur
  if (activeVeille === null) {
    return (
      <section id="veille" className="min-h-screen w-full py-20 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Veilles Technologiques
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Carte pour la veille Low-Code/No-Code */}
              <motion.div 
                className="bg-gradient-to-br from-purple-800/40 to-pink-600/40 p-10 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer h-[32rem] flex flex-col justify-between"
                onClick={() => selectVeille('nocode')}
                whileHover={{ scale: 1.05, rotate: 3, boxShadow: '0 0 20px rgba(236, 72, 153, 0.7)' }}
                whileTap={{ scale: 0.95, rotate: -3 }}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 1.2, 
                  type: 'spring', 
                  stiffness: 200, 
                  damping: 15 
                }}

              >
                <h3 className="text-3xl font-bold mb-6 text-white">Low-Code / No-Code</h3>
                <p className="text-white/80 mb-6 text-xl leading-relaxed">
                  La démocratisation du développement logiciel et son impact sur l'industrie IT entre 2023 et 2025.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg text-pink-300 font-medium">2023-2025</span>
                  <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300 text-lg font-medium">
                    Consulter
                  </button>
                </div>
              </motion.div>
              
              {/* Carte pour la veille Jeux Mobiles */}
              <motion.div 
                className="bg-gradient-to-br from-blue-800/40 to-purple-600/40 p-10 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer h-[32rem] flex flex-col justify-between"
                onClick={() => selectVeille('jeux')}
                whileHover={{ scale: 1.05, rotate: -3, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
                whileTap={{ scale: 0.95, rotate: 3 }}
                initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.2, 
                  type: 'spring', 
                  stiffness: 200, 
                  damping: 15 
                }}

              >
                <h3 className="text-3xl font-bold mb-6 text-white">Jeux Vidéo Mobiles</h3>
                <p className="text-white/80 mb-6 text-xl leading-relaxed">
                  Évolution et tendances des jeux mobiles, technologies émergentes et nouveaux modèles économiques.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg text-blue-300 font-medium">2023-2025</span>
                  <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300 text-lg font-medium">
                    Consulter
                  </button>
                </div>
              </motion.div>
              
              {/* Carte pour la veille Streaming */}
              <motion.div 
                className="bg-gradient-to-br from-red-800/40 to-orange-600/40 p-10 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer h-[32rem] flex flex-col justify-between"
                onClick={() => selectVeille('streaming')}
                whileHover={{ scale: 1.05, rotate: 3, boxShadow: '0 0 20px rgba(239, 68, 68, 0.7)' }}
                whileTap={{ scale: 0.95, rotate: -3 }}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.4, 
                  type: 'spring', 
                  stiffness: 200, 
                  damping: 15 
                }}

              >
                <h3 className="text-3xl font-bold mb-6 text-white">Plateformes de Streaming</h3>
                <p className="text-white/80 mb-6 text-xl leading-relaxed">
                  L'évolution des plateformes de streaming vidéo, innovations technologiques et nouveaux usages.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg text-red-300 font-medium">2023-2025</span>
                  <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300 text-lg font-medium">
                    Consulter
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Sinon, afficher la veille sélectionnée avec un bouton de retour intégré
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          className="relative z-10"
          key={activeVeille}
          initial={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.1, y: -50, filter: 'blur(10px)' }}
          transition={{ duration: 1.1, ease: [0.16, 1.0, 0.3, 1.0] }}
        >
          {activeVeille === 'nocode' && <VeilleNoCode onBack={handleBack} />}
          {activeVeille === 'jeux' && <VeilleJeuxMobiles onBack={handleBack} />}
          {activeVeille === 'streaming' && <VeilleStreaming onBack={handleBack} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
