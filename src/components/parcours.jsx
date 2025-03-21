"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ParcoursSection() {
  const [showSnakeGame, setShowSnakeGame] = useState(false);

  return (
    <section id="parcours" className="min-h-screen w-full py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-center flex-grow">Mon Parcours</h2>

            
            
          </div>

          {showSnakeGame ? (
            <div className="mb-8">
              <SnakeGame />
            </div>
          ) : (
            <div className="space-y-8">
              {/* Formation */}
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-6">Formation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="min-w-[100px] text-pink-300">2023 - 2025</div>
                    <div>
                      <h4 className="font-semibold">BTS SIO SLAM</h4>
                      <p className="text-gray-300">[Nom de l'établissement]</p>
                      <p className="mt-2">[Description de la formation]</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="min-w-[100px] text-pink-300">20XX - 20XX</div>
                    <div>
                      <h4 className="font-semibold">[Formation précédente]</h4>
                      <p className="text-gray-300">[Établissement]</p>
                      <p className="mt-2">[Description]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expériences */}
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-6">Expériences Professionnelles</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="min-w-[100px] text-pink-300">[Période]</div>
                    <div>
                      <h4 className="font-semibold">[Poste]</h4>
                      <p className="text-gray-300">[Entreprise]</p>
                      <p className="mt-2">[Description des responsabilités]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="min-w-[100px] text-pink-300">[Année]</div>
                    <div>
                      <h4 className="font-semibold">[Nom de la certification]</h4>
                      <p className="mt-2">[Description ou niveau obtenu]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
