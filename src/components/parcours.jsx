"use client";
import { useState } from "react";
import Link from "next/link";

export default function ParcoursSection() {
  const [showSnakeGame, setShowSnakeGame] = useState(false);

  return (
    <section id="parcours" className="min-h-screen w-full py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-center flex-grow">
              Mon Parcours
            </h2>
          </div>

          {showSnakeGame ? (
            <div className="mb-8">
              <SnakeGame />
            </div>
          ) : (
            <div className="space-y-8">
              {/* Formation avec design amélioré */}
              <div className="bg-gradient-to-r from-purple-800/40 to-pink-600/40 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/20 pb-3">Formation</h3>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 bg-white/10 p-6 rounded-xl">
                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                      <div className="text-pink-300 font-bold text-lg bg-black/20 p-3 rounded-lg text-center w-full">
                        2023 - 2025
                      </div>
                      {/* Logo en dessous de la date */}
                      <div className="w-25 h-25 rounded-full bg-white/20 flex items-center justify-center">
                        <img src="./assets/EFREI.jpg" alt="Logo" className="w-3/4 h-3/4 rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-white">BTS SIO SLAM</h4>
                      <h3 className="text-pink-200 font-semibold mb-3">Efrei</h3>
                      <p className="mt-2 text-white/80 leading-relaxed">
                        Le BTS SIO option SLAM (Solutions Logicielles et
                        Applications Métiers) est une formation de deux ans qui
                        prépare les étudiants aux métiers du développement
                        informatique. Elle permet d'acquérir des compétences en
                        programmation, gestion de bases de données, conception
                        d'applications et analyse des besoins des entreprises.
                        Les étudiants apprennent à développer des logiciels sur
                        mesure, des sites web et des applications mobiles en
                        utilisant divers langages de programmation comme Java,
                        Python ou PHP. En plus des compétences techniques, la
                        formation inclut également la gestion de projet et la
                        sécurité des applications. Grâce à cette spécialisation,
                        les diplômés peuvent accéder à des postes tels que
                        développeur d'applications, analyste-programmeur ou
                        encore chef de projet junior, et évoluer dans des
                        secteurs variés comme les entreprises de services
                        numériques (ESN), les startups ou les grandes
                        entreprises.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-6 bg-white/10 p-6 rounded-xl">
                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                      <div className="text-pink-300 font-bold text-lg bg-black/20 p-3 rounded-lg text-center w-full">
                        2022 - 2023
                      </div>
                      {/* Logo en dessous de la date */}
                      <div className="w-25 h-25 rounded-full bg-white/20 flex items-center justify-center">
                        <img src="./assets/UGE.jpg" alt="Logo" className="w-3/4 h-3/4 rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-white">Licence de Sociologie</h4>
                      <h3 className="text-pink-200 font-semibold mb-3">Université Gustave Eiffel</h3>
                      <p className="mt-2 text-white/80 leading-relaxed">La licence de sociologie vise à développer chez les étudiants la capacité à mener une réflexion documentée et critique sur les phénomènes sociaux, en s'appuyant sur les concepts théoriques et les méthodes empiriques des sciences sociales.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expériences */}
              <div className="bg-gradient-to-r from-purple-800/40 to-pink-600/40 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/20 pb-3">
                  Expériences Professionnelles
                </h3>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 bg-white/10 p-6 rounded-xl">
                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                      <div className="text-pink-300 font-bold text-lg bg-black/20 p-3 rounded-lg text-center w-full">
                        2023-2024 [Alternant]
                      </div>
                      {/* Logo en dessous de la date */}
                      <div className="w-25 h-25 rounded-full bg-white/20 flex items-center justify-center">
                        <img src="./assets/DDP.jpg" alt="Logo" className="w-3/4 h-3/4 rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-white">Analyste / Développeur Junior</h4>
                      <h3 className="text-pink-200 font-semibold mb-3">Digital Data Performance</h3>
                      <p className="mt-2 text-white/80 leading-relaxed">[Description des responsabilités]</p>
                    </div>
                  </div>
                  
                  {/* Nouvelle expérience professionnelle */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 bg-white/10 p-6 rounded-xl">
                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                      <div className="text-pink-300 font-bold text-lg bg-black/20 p-3 rounded-lg text-center w-full">
                        2022-2023 [Stage]
                      </div>
                      {/* Logo en dessous de la date */}
                      <div className="w-25 h-25 rounded-full bg-white/20 flex items-center justify-center">
                      <img src="./assets/Stime.png" alt="Logo" className="w-3/4 h-3/4 rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-white">Développeur Junior</h4>
                      <h3 className="text-pink-200 font-semibold mb-3">Stime | Les Mousquetaires</h3>
                      <p className="mt-2 text-white/80 leading-relaxed">Le but du stage est de concevoir et développer une application SAP analytics cloud de contrôle de gestion</p>
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
