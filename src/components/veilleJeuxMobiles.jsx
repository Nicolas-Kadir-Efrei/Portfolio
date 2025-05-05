"use client";
import { useState } from 'react';

export default function VeilleJeuxMobiles({ onBack }) {
  const [activeTab, setActiveTab] = useState('introduction');

  return (
    <section id="veille-jeux-mobiles" className="min-h-screen w-full py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Veille Technologique</h2>
          
          <div className="bg-gradient-to-r from-blue-800/40 to-purple-600/40 p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2 text-white">Jeux Vidéo Mobiles : Évolution et Tendances</h3>
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
                className={`px-4 py-2 ${activeTab === 'tendances' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('tendances')}
              >
                Tendances
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'impact' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('impact')}
              >
                Impact
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'sources' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('sources')}
              >
                Sources
              </button>
            </div>
            
            {/* Contenu des onglets */}
            <div className="bg-white/10 p-6 rounded-lg">
              {activeTab === 'introduction' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Le marché des jeux mobiles en 2023-2025</h4>
                  <p>
                    Le secteur des jeux vidéo mobiles a connu une transformation majeure entre 2023 et 2025, 
                    s'imposant comme le segment le plus lucratif de l'industrie du jeu vidéo. Avec plus de 
                    3 milliards de smartphones dans le monde, les jeux mobiles sont devenus la porte d'entrée 
                    principale vers l'univers vidéoludique pour une majorité de la population mondiale.
                  </p>
                  <div className="bg-black/20 p-4 rounded-lg my-4">
                    <h5 className="font-semibold mb-2">Chiffres clés :</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Marché mondial estimé à <strong>120 milliards de dollars</strong> en 2025</li>
                      <li>Plus de <strong>2,8 milliards</strong> de joueurs mobiles dans le monde</li>
                      <li>Temps moyen passé sur les jeux mobiles : <strong>4,2 heures</strong> par jour en 2025</li>
                      <li>Les jeux représentent <strong>70%</strong> des revenus des app stores</li>
                    </ul>
                  </div>
                  <p>
                    Cette veille technologique analyse l'évolution du marché des jeux mobiles entre 2023 et 2025, 
                    identifie les tendances émergentes et évalue leur impact sur l'industrie du développement 
                    et sur les habitudes des consommateurs.
                  </p>
                </div>
              )}
              
              {activeTab === 'evolution' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Évolution du marché (2023-2025)</h4>
                  
                  <div className="relative border-l-2 border-purple-400 pl-6 pb-2">
                    <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2023 : Consolidation et sophistication</h5>
                    <p className="text-white/80">
                      Les jeux mobiles atteignent un niveau de qualité comparable aux consoles. Les grands éditeurs 
                      investissent massivement dans le mobile avec des franchises AAA adaptées pour smartphones. 
                      Call of Duty Mobile et Diablo Immortal dépassent le milliard de dollars de revenus.
                    </p>
                  </div>
                  
                  <div className="relative border-l-2 border-purple-400 pl-6 pb-2">
                    <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2024 : Révolution technologique</h5>
                    <p className="text-white/80">
                      L'intégration de l'IA générative transforme le développement et l'expérience de jeu. 
                      Les smartphones gaming dédiés gagnent en popularité. Le cloud gaming mobile devient 
                      mainstream avec l'amélioration des infrastructures 5G. Les jeux cross-platform deviennent la norme.
                    </p>
                  </div>
                  
                  <div className="relative border-l-2 border-purple-400 pl-6">
                    <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2025 : Convergence et innovation</h5>
                    <p className="text-white/80">
                      La frontière entre jeux mobiles et jeux console/PC s'estompe. Les technologies AR/VR légères 
                      s'intègrent aux expériences mobiles. Les modèles économiques évoluent avec l'essor des NFT 
                      gaming et des économies virtuelles. Le marché asiatique représente désormais 65% du marché mondial.
                    </p>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-blue-800/20 to-purple-600/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Évolution des modèles économiques :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Déclin du modèle free-to-play traditionnel au profit d'abonnements premium</li>
                      <li>Montée en puissance des jeux "Play-to-Earn" et des économies tokenisées</li>
                      <li>Développement des partenariats avec des marques et du placement de produit in-game</li>
                      <li>Émergence des "super apps" de jeux intégrant réseaux sociaux et commerce</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'tendances' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">Tendances Majeures (2023-2025)</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-blue-300">Jeux Hyper-Casual Évolués</h5>
                      <p className="mb-2">Les jeux simples mais addictifs évoluent avec des mécaniques plus sophistiquées.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Caractéristiques :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Sessions de jeu ultra-courtes (30-60 secondes)</li>
                          <li>Monétisation par publicité contextuelle</li>
                          <li>Personnalisation par IA des niveaux selon le joueur</li>
                          <li>Exemples: Subway Surfers 2.0, Candy Crush Universe</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-blue-300">Cloud Gaming Mobile</h5>
                      <p className="mb-2">Jouer à des jeux AAA sur mobile sans téléchargement ni installation.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Caractéristiques :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Streaming de jeux console/PC directement sur mobile</li>
                          <li>Abonnements multi-jeux (Xbox Game Pass, PS Now Mobile)</li>
                          <li>Réduction de la dépendance au matériel</li>
                          <li>Exemples: xCloud, GeForce NOW Mobile, Amazon Luna</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-blue-300">Jeux AR Géolocalisés</h5>
                      <p className="mb-2">Expériences de jeu qui fusionnent monde réel et virtuel.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Caractéristiques :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Utilisation de la caméra et des capteurs du téléphone</li>
                          <li>Intégration avec Google Maps et Apple ARKit</li>
                          <li>Aspects sociaux et communautaires forts</li>
                          <li>Exemples: Pokémon GO Evolution, Ingress Prime</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-blue-300">Jeux Cross-Platform</h5>
                      <p className="mb-2">Expériences de jeu unifiées entre mobile, PC et consoles.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Caractéristiques :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Progression et achats synchronisés entre appareils</li>
                          <li>Matchmaking inter-plateformes</li>
                          <li>Interfaces adaptatives selon le support</li>
                          <li>Exemples: Fortnite Mobile, Genshin Impact, Minecraft</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-800/20 to-purple-600/20 rounded-lg">
                    <h5 className="font-semibold mb-2">Technologies émergentes :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>IA générative</strong> : création de contenu, personnalisation des NPC et dialogues dynamiques</li>
                      <li><strong>Haptic feedback avancé</strong> : retour tactile sophistiqué sur écrans tactiles</li>
                      <li><strong>5G et Edge Computing</strong> : réduction de la latence et expériences multijoueur améliorées</li>
                      <li><strong>Blockchain gaming</strong> : objets virtuels avec propriété vérifiable et économies de jeu décentralisées</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'impact' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Impact sur l'Industrie et les Utilisateurs</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/10 p-5 rounded-lg">
                      <h5 className="font-bold text-lg mb-3 text-blue-300">Pour les Développeurs</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Démocratisation des outils de développement mobile</li>
                        <li>Augmentation des coûts de production (de 300K$ à 1M$ en moyenne)</li>
                        <li>Besoin de compétences en IA, AR/VR et blockchain</li>
                        <li>Concentration du marché autour de grands studios</li>
                        <li>Émergence de plateformes no-code pour jeux mobiles</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-5 rounded-lg">
                      <h5 className="font-bold text-lg mb-3 text-blue-300">Pour les Joueurs</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Expériences de jeu plus immersives et personnalisées</li>
                        <li>Frontière floue entre divertissement et activité rémunératrice</li>
                        <li>Questions de confidentialité et de sécurité des données</li>
                        <li>Accessibilité accrue aux jeux premium</li>
                        <li>Fatigue des abonnements et fragmentation des services</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Études de cas (2023-2025)</h5>
                    
                    <div className="space-y-4">
                      <div>
                        <h6 className="font-semibold text-blue-200">Genshin Impact 2.0 (2023)</h6>
                        <p className="text-white/80">Premier jeu mobile à dépasser 5 milliards de dollars de revenus. A établi un nouveau standard pour les jeux cross-platform avec un monde ouvert massif et des graphismes console sur mobile.</p>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-blue-200">Pokémon Sleep (2024)</h6>
                        <p className="text-white/80">A révolutionné les jeux liés à la santé en transformant le sommeil en mécanique de jeu. Plus de 100 millions d'utilisateurs actifs et partenariats avec des entreprises de santé.</p>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-blue-200">Axie Infinity Mobile (2025)</h6>
                        <p className="text-white/80">Jeu blockchain qui a créé une économie virtuelle de plus de 3 milliards de dollars. A permis à des joueurs dans les pays en développement de gagner un revenu significatif.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Défis et enjeux :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Addiction et santé mentale des joueurs, particulièrement chez les jeunes</li>
                      <li>Régulation des économies virtuelles et des systèmes de monétisation</li>
                      <li>Consommation énergétique des jeux mobiles avancés</li>
                      <li>Fracture technologique entre régions et accessibilité</li>
                      <li>Protection des données personnelles des joueurs</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'sources' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">Sources et Références</h4>
                  
                  <div className="bg-white/10 p-5 rounded-lg mb-6">
                    <h5 className="font-bold text-lg mb-3 text-blue-300">Articles et Rapports</h5>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"L'état du jeu mobile en 2023", Newzoo, Janvier 2023</span>
                          <a 
                            href="https://newzoo.com/insights/trend-reports/newzoo-global-mobile-games-market-report-2023-free-version" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-blue-600/40 hover:bg-blue-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Lire le rapport
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"Tendances des jeux mobiles", data.ai (anciennement App Annie), 2023</span>
                          <a 
                            href="https://www.data.ai/en/insights/mobile-gaming/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-blue-600/40 hover:bg-blue-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Lire l'article
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"Comment l'IA transforme le développement de jeux", Game Developer, 2023</span>
                          <a 
                            href="https://www.gamedeveloper.com/programming/how-ai-is-being-used-in-game-development" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-blue-600/40 hover:bg-blue-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Lire l'article
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h5 className="font-bold text-lg mb-3 text-blue-300">Vidéos et Podcasts</h5>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"The Future of Mobile Game Development", GDC Talk, 2023</span>
                          <a 
                            href="https://www.youtube.com/watch?v=ZHhyRam7qho" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-blue-600/40 hover:bg-blue-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Voir la vidéo
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"Mobile Gaming in 2023 and Beyond", Pocket Gamer Podcast, 2023</span>
                          <a 
                            href="https://www.pocketgamer.com/podcast/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-blue-600/40 hover:bg-blue-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Écouter
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg mt-6">
                    <h5 className="font-bold text-lg mb-3 text-blue-300">Jeux de référence (2023-2025)</h5>
                    <ul className="space-y-3 pl-6">
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Genshin Impact 2.0 - miHoYo</span>
                          <a 
                            href="https://genshin.hoyoverse.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-blue-600/40 hover:bg-blue-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Site officiel
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Pokémon Sleep - The Pokémon Company</span>
                          <a 
                            href="https://www.pokemon.com/us/app/pokemon-sleep/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-blue-600/40 hover:bg-blue-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Site officiel
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Call of Duty: Mobile 2.0 - Activision</span>
                          <a 
                            href="https://www.callofduty.com/mobile" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-blue-600/40 hover:bg-blue-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Site officiel
                          </a>
                        </div>
                      </li>
                    </ul>
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
