"use client";
import { useState } from "react";
import Link from "next/link";

export default function E5Section() {
  const [showPreview, setShowPreview] = useState(true);
  
  return (
    <section id="e5" className="min-h-screen w-full py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-center flex-grow">
              Épreuve E5 - BTS SIO
            </h2>
          </div>

          <div className="space-y-8">
            {/* Présentation de l'épreuve E5 */}
            <div className="bg-gradient-to-r from-purple-800/40 to-pink-600/40 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/20 pb-3">
                Présentation de l'épreuve E5
              </h3>
              <p className="mt-2 text-white/80 leading-relaxed mb-6">
                L'épreuve E5 du BTS SIO est une épreuve professionnelle qui évalue les compétences acquises 
                en situation professionnelle. Elle se base sur un tableau de synthèse qui récapitule les 
                différentes réalisations professionnelles effectuées pendant la formation et en entreprise, 
                ainsi que les compétences mises en œuvre pour chacune d'entre elles.
              </p>
              
              <div className="flex flex-col gap-6 mt-8">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="font-bold text-xl text-white mb-4">Tableau de synthèse</h4>
                  <p className="text-white/80 mb-6">
                    Le tableau de synthèse présente l'ensemble des réalisations professionnelles 
                    et les compétences associées selon les 6 blocs de compétences du référentiel :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                    <li>Gérer le patrimoine informatique</li>
                    <li>Répondre aux incidents et aux demandes d'assistance et d'évolution</li>
                    <li>Développer la présence en ligne de l'organisation</li>
                    <li>Travailler en mode projet</li>
                    <li>Mettre à disposition des utilisateurs un service informatique</li>
                    <li>Organiser son développement professionnel</li>
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <button 
                      onClick={() => setShowPreview(!showPreview)}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        {showPreview ? (
                          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        ) : (
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        )}
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {showPreview ? "Masquer le tableau" : "Afficher le tableau"}
                    </button>
                    
                    <a 
                      href="/documents/tbe5.xlsx" 
                      download
                      className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Télécharger
                    </a>
                  </div>
                  
                  {showPreview && (
                    <div className="space-y-4">
                      {/* Carte d'en-tête */}
                      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 text-black">
                        <div className="text-center font-bold text-xl mb-4 p-2 bg-gray-100 rounded-md">
                          BTS SERVICES INFORMATIQUES AUX ORGANISATIONS - SESSION 2023<br/>
                          Tableau de synthèse des réalisations professionnelles
                        </div>
                        <table className="w-full border-collapse text-sm">
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-2 font-bold">NOM et prénom : CIFTCI Nicolas Kadir Baran</td>
                              <td className="border border-gray-300 p-2 font-bold">N° candidat : 02444876918</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2 font-bold">Centre de formation : Efrei</td>
                              <td className="border border-gray-300 p-2 font-bold">
                                Option : <input type="checkbox" disabled /> SISR <input type="checkbox" checked disabled className="accent-gray-800" /> SLAM
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2 font-bold" colSpan="2">Adresse URL du portfolio : https://portfolio-nicolas-kadir.vercel.app/</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Tableau principal */}
                      <div className="bg-white rounded-lg overflow-auto shadow-xl border border-gray-200 p-4 text-black">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              <th rowSpan="2" className="border border-gray-300 p-2 text-left font-bold">Compétences mises en œuvre</th>
                              <th className="border border-gray-300 p-2 text-center font-bold">Gérer le patrimoine informatique</th>
                              <th className="border border-gray-300 p-2 text-center font-bold">Répondre aux incidents et aux demandes d'assistance et d'évolution</th>
                              <th className="border border-gray-300 p-2 text-center font-bold">Développer la présence en ligne de l'organisation</th>
                              <th className="border border-gray-300 p-2 text-center font-bold">Travailler en mode projet</th>
                              <th className="border border-gray-300 p-2 text-center font-bold">Mettre à disposition des utilisateurs un service informatique</th>
                              <th className="border border-gray-300 p-2 text-center font-bold">Organiser son développement professionnel</th>
                            </tr>
                            <tr className="bg-gray-100">
                              {/* Cette ligne est vide car les en-têtes sont fusionnés avec la ligne précédente */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-gray-200">
                              <td colSpan="7" className="border border-gray-300 p-2 font-bold bg-gray-300">Réalisations professionnelles<br/>(intitulé et date des documents et productions associés)</td>
                            </tr>
                            <tr className="bg-gray-200">
                              <td colSpan="7" className="border border-gray-300 p-2 font-bold bg-gray-300">Réalisation en cours de formation</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Application météo (React, React CSS, API OpenWeather)</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 01/09/2024 au 15/01/2025</div>
                                Application météorologique avec une API publique (Open Weather), nous avons pu développer le côté Frontend et intégrer correctement l'API pour afficher les données météorologiques selon la recherche de météo par ville et par pays.</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Application de création et de gestion de tournois avec interface user et admin (React, CSS, Node, PHP, MySQL, Bootstrap, TailwindCSS, Figma)</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 01/02/2025 au 15/05/2025</div>
                                Application de création et de gestion de tournois avec interface user et admin en Python, CSS, Next, Prisma, Botstrap. L'équipe a développé le côté Frontend et intégré les données venant du backend, d'équipe avec une gestion spatiale par capacité d'équipe, et l'utilisateur avec un système de notification, et de contact admin.</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Association de création et de gestion de tournois avec interface admin (Python, CSS, Node, Python, Bootstrap, Figma)</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 16/01/2025 au 15/05/2025</div>
                                Association de création et de gestion de tournois avec interface admin en Python, CSS, Next, Prisma, Botstrap. L'équipe avons développé le côté Frontend et intégré les données venant du backend. L'application possède une création de tournois, d'équipe (avec une gestion spatiale par capacité d'équipe), et l'utilisateur avec un système de notification et de messagerie admin.</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr className="bg-gray-200">
                              <td colSpan="7" className="border border-gray-300 p-2 font-bold bg-gray-300">Réalisations en milieu professionnel en cours de première année [Stage]</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Application de maintenance pour SAP (HTML, CSS, JS)</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 15/05/2024 au 14/06/2024</div>
                                Application de maintenance pour SAP analyse (PHP, HTML, CSS, JS), recherche de code dans les fichiers, mise en place d'un outil de SAP sur un bloc de données afin de déterminer la taille, le nombre de ligne de code présent etc...</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr className="bg-gray-200">
                              <td colSpan="7" className="border border-gray-300 p-2 font-bold bg-gray-300">Réalisations en milieu professionnel en cours de seconde année [Alternance]</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Création de formulaires de tickets incidents dans ServiceNow</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 05/10/24 au 10/12/24</div>
                                Création de formulaires de tickets incidents dans ServiceNow avec envoi de mails automatique</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Utilisation des API REST de ServiceNow pour l'intégration des données</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 20/11/24 au 20/12/24</div>
                                Utilisation des API REST de ServiceNow pour l'intégration des données de bases entreprises, assurances, etc.</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Gestion des CI dans ServiceNow - Incidents, cas vécus, Résolution Serrer</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 02/12/24 au 10/12/24</div>
                                Gestion des CI dans ServiceNow : matériels, serveurs, Windows Server</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Développement de scripts dans ServiceNow (Business Rules, UI Policies et Workflows)</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 18/01/25 au 24/02/25</div>
                                Développement de scripts dans ServiceNow (Business Rules, UI Policy) en JavaScript</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Intégration LDAP de ServiceNow et configuration du Workspace</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 05/02/25 au 05/03/25</div>
                                Intégration à la CMDB de ServiceNow et configuration de Workspace</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Démo et accompagnement au changement (ServiceNow)</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 15/03/25 au 23/03/25</div>
                                Démo des développements ServiceNow, accompagnement du changement auprès des tests</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2">
                                <div className="font-bold">Suivi Agile et mise en production (ServiceNow)</div>
                                <div className="text-xs text-gray-600 mb-1">Date : 27/03/25 au 24/04/25</div>
                                Suivi Agile et mise en production finale dans ServiceNow</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center"></td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                              <td className="border border-gray-300 p-2 text-center">X</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Compétences mises en œuvre */}
            <div className="bg-gradient-to-r from-purple-800/40 to-pink-600/40 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/20 pb-3">
                Compétences mises en œuvre
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="font-bold text-xl text-white mb-4">Réalisations en formation</h4>
                  <ul className="list-disc pl-6 space-y-3 text-white/80">
                    <li>Application météorologique avec API Open Weather</li>
                    <li>Application de gestion de tournois avec interface user et admin</li>
                    <li>Association de création et de gestion de tournois avec interface admin</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="font-bold text-xl text-white mb-4">Réalisations en entreprise</h4>
                  <ul className="list-disc pl-6 space-y-3 text-white/80">
                    <li>Application de maintenance pour SAP</li>
                    <li>Création de formulaires de tickets incidents dans ServiceNow</li>
                    <li>Utilisation des API REST de ServiceNow</li>
                    <li>Gestion des CI dans ServiceNow</li>
                    <li>Développement de scripts dans ServiceNow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}