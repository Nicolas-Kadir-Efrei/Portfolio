"use client";
import { useState } from 'react';

export default function VeilleSection({ onBack }) {
  const [activeTab, setActiveTab] = useState('introduction');

  return (
    <section id="veille" className="min-h-screen w-full py-20 text-white">
      
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Veille Technologique</h2>
          
          <div className="bg-gradient-to-r from-purple-800/40 to-pink-600/40 p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2 text-white">Low-Code/No-Code : La Démocratisation du Développement Logiciel</h3>
                <p className="text-lg text-white/80 italic">Période de veille : 2023-2025</p>
              </div>
              <button 
                onClick={onBack}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300 flex items-center group ml-4 mt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour
              </button>
            </div>
            
            {/* Navigation des onglets */}
            <div className="flex flex-wrap border-b border-white/20 mb-6">
              <button 
                className={`px-4 py-2 ${activeTab === 'introduction' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('introduction')}
              >
                Introduction
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'evolution' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('evolution')}
              >
                Évolution
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'outils' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('outils')}
              >
                Outils
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'impact' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('impact')}
              >
                Impact
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'conclusion' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('conclusion')}
              >
                Conclusion
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'sources' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('sources')}
              >
                Sources
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'outils-utilises' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('outils-utilises')}
              >
                Outils utilisés
              </button>
            </div>
            
            {/* Contenu des onglets */}
            <div className="bg-white/10 p-6 rounded-lg">
              {activeTab === 'introduction' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Qu'est-ce que le Low-Code/No-Code ?</h4>
                  <p>
                    Les plateformes Low-Code/No-Code représentent une révolution dans le monde du développement logiciel. 
                    Elles permettent de créer des applications avec peu ou pas de code, grâce à des interfaces visuelles 
                    et des fonctionnalités de glisser-déposer. Cette approche démocratise la création d'applications en 
                    la rendant accessible aux non-développeurs.
                  </p>
                  <div className="bg-black/20 p-4 rounded-lg my-4">
                    <h5 className="font-semibold mb-2">Définitions :</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Low-Code</strong> : Plateformes qui nécessitent un minimum de codage manuel, généralement pour des fonctionnalités avancées ou personnalisées.</li>
                      <li><strong>No-Code</strong> : Plateformes qui ne nécessitent aucune connaissance en programmation, tout se fait via des interfaces visuelles.</li>
                    </ul>
                  </div>
                  <p>
                    Entre 2023 et 2025, ces technologies ont connu une adoption massive, transformant la façon dont les entreprises 
                    abordent le développement d'applications et réduisant significativement le temps et les coûts de développement.
                  </p>
                </div>
              )}
              
              {activeTab === 'evolution' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Évolution du Low-Code/No-Code (2023-2025)</h4>
                  
                  <div className="relative border-l-2 border-pink-400 pl-6 pb-2">
                    <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2023 : Adoption croissante</h5>
                    <p className="text-white/80">
                      Début de l'adoption massive par les entreprises de taille moyenne. Gartner prédit que d'ici fin 2023, 
                      plus de 50% des moyennes et grandes entreprises adopteront une plateforme low-code comme stratégie.
                    </p>
                  </div>
                  
                  <div className="relative border-l-2 border-pink-400 pl-6 pb-2">
                    <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2024 : Intégration de l'IA</h5>
                    <p className="text-white/80">
                      Les plateformes intègrent des capacités d'IA avancées, permettant de générer automatiquement du code 
                      à partir de descriptions en langage naturel et d'optimiser les applications créées.
                    </p>
                  </div>
                  
                  <div className="relative border-l-2 border-pink-400 pl-6">
                    <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2025 : Maturité et spécialisation</h5>
                    <p className="text-white/80">
                      Émergence de plateformes spécialisées par secteur d'activité. Le marché global du low-code atteint 
                      45,5 milliards de dollars selon les estimations de Forrester, avec une croissance annuelle de plus de 25%.
                    </p>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-purple-800/20 to-pink-600/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Statistiques clés :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>En 2023, 70% des nouvelles applications développées par les entreprises utilisaient des technologies low-code ou no-code</li>
                      <li>En 2024, le temps de développement moyen d'une application a été réduit de 65% grâce à ces plateformes</li>
                      <li>En 2025, 80% des entreprises non-technologiques disposent d'équipes de "citizen developers" utilisant des outils no-code</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'outils' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">Principaux Outils Low-Code/No-Code (2023-2025)</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-pink-300">Microsoft Power Platform</h5>
                      <p className="mb-2">Suite complète incluant Power Apps, Power Automate et Power BI.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Évolution 2023-2025 :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Intégration avancée avec l'IA de Microsoft Copilot</li>
                          <li>Capacités étendues de création d'applications mobiles</li>
                          <li>Part de marché : 28% en 2025</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-pink-300">Bubble</h5>
                      <p className="mb-2">Plateforme no-code pour créer des applications web complexes.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Évolution 2023-2025 :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Introduction de fonctionnalités Web3 et blockchain</li>
                          <li>Amélioration des performances avec le rendu côté serveur</li>
                          <li>Croissance utilisateurs : +300% entre 2023 et 2025</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-pink-300">Webflow</h5>
                      <p className="mb-2">Solution no-code pour la création de sites web professionnels.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Évolution 2023-2025 :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Lancement de Webflow Apps pour étendre les fonctionnalités</li>
                          <li>Outils avancés d'e-commerce et de CMS</li>
                          <li>Adoption par plus de 200 000 entreprises en 2025</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-pink-300">Mendix</h5>
                      <p className="mb-2">Plateforme low-code pour applications d'entreprise.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Évolution 2023-2025 :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Intelligence artificielle pour l'assistance au développement</li>
                          <li>Spécialisation dans les solutions IoT et industrie 4.0</li>
                          <li>Leader dans le secteur manufacturier et logistique</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-gradient-to-r from-purple-800/20 to-pink-600/20 rounded-lg">
                    <h5 className="font-semibold mb-2">Tendances émergentes :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Plateformes spécialisées par secteur (santé, finance, éducation)</li>
                      <li>Intégration native des technologies d'IA générative</li>
                      <li>Capacités de développement d'applications mobiles avancées</li>
                      <li>Outils de collaboration en temps réel pour les équipes hybrides</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'impact' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Impact sur le Monde Professionnel</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/10 p-5 rounded-lg">
                      <h5 className="font-bold text-lg mb-3 text-pink-300">Pour les Entreprises</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Réduction du temps de développement de 60-80%</li>
                        <li>Diminution des coûts de développement et de maintenance</li>
                        <li>Agilité accrue face aux changements du marché</li>
                        <li>Réduction de la dette technique</li>
                        <li>Démocratisation de l'innovation digitale</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-5 rounded-lg">
                      <h5 className="font-bold text-lg mb-3 text-pink-300">Pour les Professionnels IT</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Émergence du rôle de "citizen developer"</li>
                        <li>Évolution du rôle des développeurs vers l'architecture et la supervision</li>
                        <li>Nécessité de développer des compétences en intégration et personnalisation</li>
                        <li>Focus accru sur la gouvernance et la sécurité</li>
                        <li>Collaboration renforcée entre IT et métiers</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Études de cas (2023-2025)</h5>
                    
                    <div className="space-y-4">
                      <div>
                        <h6 className="font-semibold text-pink-200">Carrefour (2023)</h6>
                        <p className="text-white/80">Déploiement d'une plateforme low-code pour permettre aux équipes métiers de créer leurs propres applications de gestion. Résultat : 200+ applications internes créées en 18 mois, ROI de 300%.</p>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-pink-200">Société Générale (2024)</h6>
                        <p className="text-white/80">Utilisation de plateformes no-code pour accélérer la transformation digitale. Réduction du time-to-market de 70% pour les nouveaux services clients.</p>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-pink-200">SNCF (2025)</h6>
                        <p className="text-white/80">Création d'un centre d'excellence low-code permettant aux employés de développer des solutions pour améliorer l'expérience voyageur. Plus de 500 "citizen developers" formés.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Limites et défis :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Complexité de l'intégration avec les systèmes legacy</li>
                      <li>Risques liés à la sécurité et à la gouvernance des données</li>
                      <li>Difficultés de personnalisation pour des besoins très spécifiques</li>
                      <li>Dépendance potentielle envers les fournisseurs de plateformes</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'sources' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">Sources et Méthodologie</h4>
                  
                  <div className="bg-white/10 p-5 rounded-lg mb-6">
                    <h5 className="font-bold text-lg mb-3 text-pink-300">Méthodologie de veille</h5>
                    <p className="mb-4">
                      Cette veille technologique a été réalisée selon une méthodologie rigoureuse comprenant :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Analyse documentaire</strong> : Étude des rapports d'analystes, articles scientifiques et publications spécialisées</li>
                      <li><strong>Veille concurrentielle</strong> : Suivi des évolutions des principales plateformes du marché</li>
                      <li><strong>Entretiens avec des experts</strong> : Discussions avec des professionnels utilisant ces technologies</li>
                      <li><strong>Participation à des événements</strong> : Webinaires, conférences et salons professionnels</li>
                      <li><strong>Expérimentation</strong> : Tests pratiques de certaines plateformes pour évaluer leurs capacités</li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 p-5 rounded-lg">
                      <h5 className="font-bold text-lg mb-3 text-pink-300">Articles et Guides Pratiques</h5>
                      <ul className="space-y-3 pl-5">
                        <li className="flex items-start">
                          <span className="text-white/80 mr-2">•</span>
                          <div>
                            <span className="text-white/80">"Qu'est-ce que le low-code/no-code ? Définition et exemples", Journal du Net, 2023</span>
                            <a 
                              href="https://www.journaldunet.com/solutions/dsi/1498863-qu-est-ce-que-le-low-code-no-code/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                            >
                              Lire l'article
                            </a>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white/80 mr-2">•</span>
                          <div>
                            <span className="text-white/80">"8 Tendances Low-Code/No-Code en 2024", Startechup, 2024</span>
                            <a 
                              href="https://www.startechup.com/fr/blog/8-low-code-no-code-trends-in-2024/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                            >
                              Lire l'article
                            </a>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white/80 mr-2">•</span>
                          <div>
                            <span className="text-white/80">"Développement Low Code / No Code : avantages et inconvénients", Synapsys groupe, 2024</span>
                            <a 
                              href="https://synapsys-groupe.com/blog/developpement-low-code-no-code/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                            >
                              Lire l'article
                            </a>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white/80 mr-2">•</span>
                          <div>
                            <span className="text-white/80">"NoCode : Définition, Avantages, Outils… notre Guide !", Ecole Cube, 2024</span>
                            <a 
                              href="https://www.ecole.cube.fr/nocode-guide-complet" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                            >
                              Lire le guide
                            </a>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white/80 mr-2">•</span>
                          <div>
                            <span className="text-white/80">"No-code, low-code... Quels avantages et quels inconvénients pour ces solutions de développement simplifié", Usine Digitale, 2023</span>
                            <a 
                              href="https://www.usine-digitale.fr/article/no-code-low-code-quels-avantages-et-quels-inconvenients-pour-ces-solutions-de-developpement-simplifie.N1055904" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                            >
                              Lire l'article
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-5 rounded-lg">
                      <h5 className="font-bold text-lg mb-3 text-pink-300">Tutoriels et Vidéos</h5>
                      <ul className="space-y-3 pl-5">
                        <li className="flex items-start">
                          <span className="text-white/80 mr-2">•</span>
                          <div>
                            <span className="text-white/80">"Créer une application sans coder avec Bubble", Grafikart, 2023</span>
                            <a 
                              href="https://grafikart.fr/tutoriels/bubble-nocode-app-1216" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                            >
                              Voir le tuto
                            </a>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white/80 mr-2">•</span>
                          <div>
                            <span className="text-white/80">"Pourquoi le No-Code est un piège pour les startups", Underscore, 2024</span>
                            <a 
                              href="https://www.youtube.com/watch?v=qHPBB5lHSoI" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                            >
                              Voir la vidéo
                            </a>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white/80 mr-2">•</span>
                          <div>
                            <span className="text-white/80">"Apprendre à faire ton premier site no code sur Webflow - Tutoriel facile en français", Coriace | No-Code, 2023</span>
                            <a 
                              href="https://www.youtube.com/watch?v=IcCsRXxhfgU" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                            >
                              Voir le tuto
                            </a>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg mt-6">
                    <h5 className="font-bold text-lg mb-3 text-pink-300">Outils et Plateformes</h5>
                    <ul className="space-y-3 pl-6">
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Bubble - Plateforme no-code pour créer des applications web</span>
                          <a 
                            href="https://bubble.io/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Visiter
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Webflow - Création de sites web sans code</span>
                          <a 
                            href="https://webflow.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Visiter
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Airtable - Base de données collaborative visuelle</span>
                          <a 
                            href="https://airtable.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Visiter
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Microsoft Power Apps - Création d'applications métier</span>
                          <a 
                            href="https://powerapps.microsoft.com/fr-fr/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Visiter
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Zapier - Automatisation de tâches entre applications</span>
                          <a 
                            href="https://zapier.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-pink-600/40 hover:bg-pink-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Visiter
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  

                </div>
              )}
              
              {activeTab === 'conclusion' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Conclusion et Perspectives</h4>
                  
                  <p>
                    La période 2023-2025 a marqué un tournant décisif dans l'adoption des technologies low-code/no-code. 
                    Ces plateformes sont passées du statut de tendance émergente à celui de composante essentielle de la 
                    stratégie digitale des entreprises.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-800/20 to-pink-600/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Points clés à retenir :</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Le marché du low-code/no-code a atteint 45,5 milliards de dollars en 2025</li>
                      <li>L'intégration de l'IA a considérablement amélioré les capacités de ces plateformes</li>
                      <li>La démocratisation du développement a créé de nouveaux rôles et compétences</li>
                      <li>Les développeurs traditionnels se sont réorientés vers des tâches à plus forte valeur ajoutée</li>
                      <li>La collaboration entre équipes techniques et métiers s'est renforcée</li>
                    </ul>
                  </div>
                  
                  <h5 className="font-semibold mb-2">Perspectives d'avenir (post-2025) :</h5>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Convergence avec l'IA générative</strong> : Les plateformes intégreront davantage de capacités de génération automatique de code et d'applications à partir de descriptions en langage naturel.</li>
                    <li><strong>Spécialisation sectorielle</strong> : Émergence de plateformes dédiées à des secteurs spécifiques avec des composants et workflows pré-configurés.</li>
                    <li><strong>Intégration IoT et edge computing</strong> : Capacités accrues pour développer des applications connectées à l'Internet des Objets sans expertise technique approfondie.</li>
                    <li><strong>Évolution des compétences IT</strong> : Les professionnels IT se concentreront davantage sur l'architecture, la gouvernance et la sécurité plutôt que sur le codage pur.</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <h5 className="font-semibold mb-2 text-center">Mot de la fin</h5>
                    <p className="text-center italic">
                      "Le low-code/no-code ne remplace pas les développeurs, il les libère des tâches répétitives 
                      pour se concentrer sur l'innovation. Cette démocratisation du développement représente 
                      une opportunité majeure pour les entreprises qui sauront l'intégrer à leur stratégie digitale."
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold mb-2">Références :</h5>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-white/80">
                      <li>Gartner, "Low-Code Development Technologies Evaluation Guide", 2023</li>
                      <li>Forrester Research, "The State Of Low-Code Development Platforms", 2024</li>
                      <li>McKinsey Digital, "The business value of design", 2025</li>
                      <li>Harvard Business Review, "The Rise of the Citizen Developer", 2024</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'outils-utilises' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Outils utilisés pour cette veille technologique</h4>
                  
                  <div className="bg-gradient-to-r from-purple-800/20 to-pink-600/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Outils de veille et de recherche</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Feedly</strong> - Agrégateur de flux RSS pour suivre les publications spécialisées</li>
                      <li><strong>Twitter/X</strong> - Suivi des comptes d'experts et des hashtags spécialisés</li>
                      <li><strong>LinkedIn</strong> - Groupes professionnels et publications d'experts du secteur</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-800/20 to-pink-600/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Outils d'analyse et d'organisation</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Notion</strong> - Organisation des notes et des recherches</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-800/20 to-pink-600/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Plateformes testées</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Bubble.io</strong> - Plateforme no-code pour le développement d'applications web</li>
                      <li><strong>Webflow</strong> - Création de sites web sans code</li>
                      <li><strong>Microsoft Power Apps</strong> - Plateforme low-code de Microsoft</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <h5 className="font-semibold mb-2 text-center">Méthodologie</h5>
                    <p>
                      Cette veille a été réalisée selon une approche systématique combinant :
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Suivi quotidien des sources d'information spécialisées</li>
                        <li>Participation à des webinaires et conférences en ligne</li>
                        <li>Échanges avec des professionnels utilisant ces technologies</li>
                      </ul>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
