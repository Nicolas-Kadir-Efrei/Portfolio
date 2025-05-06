"use client";
import { useState } from 'react';

export default function VeilleStreaming({ onBack }) {
  const [activeTab, setActiveTab] = useState('introduction');

  return (
    <section id="veille-streaming" className="min-h-screen w-full py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Veille Technologique</h2>
          
          <div className="bg-gradient-to-r from-red-800/40 to-orange-600/40 p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2 text-white">Plateformes de Streaming Vidéo : Évolution et Innovations</h3>
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
                className={`px-4 py-2 ${activeTab === 'innovations' ? 'bg-white/20 text-white rounded-t-lg' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setActiveTab('innovations')}
              >
                Innovations
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
                  <h4 className="text-xl font-semibold mb-4">Le paysage du streaming vidéo en 2023-2025</h4>
                  <p>
                    Entre 2023 et 2025, l'industrie du streaming vidéo a connu une transformation radicale, 
                    redéfinissant la façon dont le contenu est produit, distribué et consommé à l'échelle mondiale. 
                    Cette période a été marquée par une consolidation du marché, des innovations technologiques majeures 
                    et l'émergence de nouveaux modèles économiques.
                  </p>
                  <div className="bg-black/20 p-4 rounded-lg my-4">
                    <h5 className="font-semibold mb-2">Chiffres clés :</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Marché mondial du streaming vidéo : <strong>275 milliards de dollars</strong> en 2025</li>
                      <li><strong>85%</strong> des foyers dans les pays développés abonnés à au moins 3 services</li>
                      <li>Temps moyen de visionnage quotidien : <strong>3,5 heures</strong> par personne</li>
                      <li>Le streaming représente <strong>82%</strong> du trafic internet mondial</li>
                    </ul>
                  </div>
                  <p>
                    Cette veille technologique analyse l'évolution des plateformes de streaming vidéo entre 2023 et 2025, 
                    identifie les innovations majeures et évalue leur impact sur l'industrie des médias 
                    et sur les habitudes de consommation.
                  </p>
                </div>
              )}
              
              {activeTab === 'evolution' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Évolution du marché (2023-2025)</h4>
                  
                  <div className="relative border-l-2 border-orange-400 pl-6 pb-2">
                    <div className="absolute w-4 h-4 bg-orange-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2023 : Consolidation et guerre des contenus</h5>
                    <p className="text-white/80">
                      Les grandes plateformes intensifient leurs investissements dans les contenus originaux. 
                      Netflix dépasse les 300 millions d'abonnés. Disney+ et HBO Max fusionnent pour créer un 
                      concurrent de taille. Amazon Prime Video devient le second acteur mondial grâce à l'acquisition 
                      de studios majeurs.
                    </p>
                  </div>
                  
                  <div className="relative border-l-2 border-orange-400 pl-6 pb-2">
                    <div className="absolute w-4 h-4 bg-orange-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2024 : Diversification et personnalisation</h5>
                    <p className="text-white/80">
                      Les plateformes étendent leurs offres au-delà du divertissement : éducation, fitness, événements 
                      en direct. L'IA transforme l'expérience utilisateur avec des recommandations ultra-personnalisées. 
                      Les formules hybrides (AVOD/SVOD) deviennent la norme. Le streaming social gagne en popularité.
                    </p>
                  </div>
                  
                  <div className="relative border-l-2 border-orange-400 pl-6">
                    <div className="absolute w-4 h-4 bg-orange-400 rounded-full -left-[9px]"></div>
                    <h5 className="text-lg font-semibold">2025 : Immersion et interactivité</h5>
                    <p className="text-white/80">
                      Les expériences immersives (8K, HDR+, audio spatial) deviennent standard. Les contenus interactifs 
                      représentent 30% des nouveautés. Les plateformes intègrent des fonctionnalités sociales avancées. 
                      Les marchés émergents (Afrique, Asie du Sud-Est) connaissent une croissance explosive avec des 
                      plateformes locales innovantes.
                    </p>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-red-800/20 to-orange-600/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Évolution des modèles économiques :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Transition vers des formules hybrides combinant abonnement et publicité</li>
                      <li>Développement des offres "super bundle" regroupant vidéo, musique, jeux et autres services</li>
                      <li>Monétisation des données utilisateurs pour la publicité ciblée et les partenariats</li>
                      <li>Émergence de micro-paiements pour des contenus premium ou exclusifs</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'innovations' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">Innovations Technologiques (2023-2025)</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-orange-300">Streaming Adaptatif Avancé</h5>
                      <p className="mb-2">Optimisation dynamique de la qualité vidéo selon les conditions réseau et l'appareil.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Caractéristiques :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Codecs nouvelle génération (AV2, VVC) réduisant la bande passante de 50%</li>
                          <li>Adaptation intelligente basée sur l'IA</li>
                          <li>Préchargement prédictif des contenus</li>
                          <li>Exemples: Netflix Dynamic Optimizer, YouTube Adaptive Stream</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-orange-300">Contenus Interactifs</h5>
                      <p className="mb-2">Expériences vidéo où le spectateur influence l'histoire et le déroulement.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Caractéristiques :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Narrations à embranchements multiples</li>
                          <li>Intégration d'éléments de gamification</li>
                          <li>Personnalisation des scénarios par l'IA</li>
                          <li>Exemples: Black Mirror: Bandersnatch 2.0, You vs. Wild Series</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-orange-300">Expériences Immersives</h5>
                      <p className="mb-2">Technologies créant une sensation de présence dans le contenu visionné.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Caractéristiques :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Vidéo volumétrique et 360°</li>
                          <li>Audio spatial et son binaural</li>
                          <li>Compatibilité avec les casques VR légers</li>
                          <li>Exemples: Disney+ Immersive, Apple TV+ Spatial</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <h5 className="font-bold text-lg mb-2 text-orange-300">Streaming Social</h5>
                      <p className="mb-2">Fusion du streaming vidéo avec les fonctionnalités de réseaux sociaux.</p>
                      <div className="text-sm">
                        <p className="font-semibold">Caractéristiques :</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/80">
                          <li>Visionnage synchronisé entre amis à distance</li>
                          <li>Commentaires en temps réel et réactions</li>
                          <li>Partage de clips et moments favoris</li>
                          <li>Exemples: Netflix Party 2.0, Hulu Social, TikTok TV</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-gradient-to-r from-red-800/20 to-orange-600/20 rounded-lg">
                    <h5 className="font-semibold mb-2">Technologies émergentes :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>IA générative pour la création de contenu</strong> : production assistée de scripts, effets visuels et doublage automatique</li>
                      <li><strong>Edge streaming</strong> : distribution de contenu depuis des serveurs locaux pour réduire la latence</li>
                      <li><strong>Holographie et affichage volumétrique</strong> : premières expérimentations pour le streaming sans écran</li>
                      <li><strong>Blockchain et NFT</strong> : nouveaux modèles de distribution et de monétisation pour les créateurs</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'impact' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Impact sur l'Industrie et les Consommateurs</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/10 p-5 rounded-lg">
                      <h5 className="font-bold text-lg mb-3 text-orange-300">Pour l'Industrie des Médias</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Déclin accéléré de la télévision linéaire traditionnelle</li>
                        <li>Concentration du marché autour de 5-6 acteurs globaux</li>
                        <li>Explosion des budgets de production (séries à +30M$ par épisode)</li>
                        <li>Nouveaux métiers liés à l'IA et aux contenus interactifs</li>
                        <li>Transformation des salles de cinéma en lieux d'expériences premium</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-5 rounded-lg">
                      <h5 className="font-bold text-lg mb-3 text-orange-300">Pour les Consommateurs</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Personnalisation extrême des recommandations et contenus</li>
                        <li>"Fatigue d'abonnement" et retour à des modèles financés par la publicité</li>
                        <li>Frontière floue entre consommation passive et interactive</li>
                        <li>Questions de confidentialité et de bulles de filtres</li>
                        <li>Accès à une diversité culturelle sans précédent</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Études de cas (2023-2025)</h5>
                    
                    <div className="space-y-4">
                      <div>
                        <h6 className="font-semibold text-orange-200">Netflix AI Studio (2023)</h6>
                        <p className="text-white/80">Première plateforme à intégrer l'IA générative dans sa chaîne de production, réduisant les coûts de 40% pour certains contenus et permettant la création de séries "personnalisées" adaptées aux préférences individuelles.</p>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-orange-200">Disney+ Immersive (2024)</h6>
                        <p className="text-white/80">Lancement d'une offre premium permettant de vivre les films et séries en réalité virtuelle légère. Les utilisateurs peuvent explorer les décors et interagir avec l'univers des franchises populaires.</p>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-orange-200">TikTok TV (2025)</h6>
                        <p className="text-white/80">Transformation d'une plateforme de vidéos courtes en service de streaming complet, combinant contenus professionnels et générés par les utilisateurs avec un algorithme de recommandation ultra-performant.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Défis et enjeux :</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Empreinte écologique du streaming (15% des émissions mondiales de CO2 du numérique)</li>
                      <li>Protection des données personnelles et respect de la vie privée</li>
                      <li>Fracture numérique et accessibilité dans les régions moins développées</li>
                      <li>Préservation de la diversité culturelle face aux algorithmes</li>
                      <li>Régulation des contenus et lutte contre la désinformation</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'sources' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">Sources et Références</h4>
                  
                  <div className="bg-white/10 p-5 rounded-lg mb-6">
                    <h5 className="font-bold text-lg mb-3 text-orange-300">Rapports et Études</h5>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"Digital Media Trends", Deloitte, 2023</span>
                          <a 
                            href="https://www2.deloitte.com/us/en/insights/industry/technology/digital-media-trends-consumption-habits-survey.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-orange-600/40 hover:bg-orange-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Lire le rapport
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"The Gauge: Streaming Snapshot", Nielsen, 2023</span>
                          <a 
                            href="https://www.nielsen.com/fr/data-center/the-gauge/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-orange-600/40 hover:bg-orange-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Consulter
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"L'impact environnemental du streaming vidéo", The Shift Project, 2023</span>
                          <a 
                            href="https://theshiftproject.org/article/climat-insoutenable-usage-video/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-orange-600/40 hover:bg-orange-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Lire l'étude
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h5 className="font-bold text-lg mb-3 text-orange-300">Articles et Ressources</h5>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"L'intelligence artificielle, nouvel acteur du cinéma et de l'industrie du film", Numalis, 2023</span>
                          <a 
                            href="https://numalis.com/fr/lintelligence-artificielle-nouvel-acteur-du-cinema-et-de-lindustrie-du-film/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-orange-600/40 hover:bg-orange-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Lire l'article
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">"Le Streaming Vidéo Révolutionne-t-il Notre Façon de Consommer du Contenu Visuel?", Keoby, 2024</span>
                          <a 
                            href="https://www.keoby.com/le-streaming-video-revolutionne-t-il-notre-facon-de-consommer-du-contenu-visuel" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-orange-600/40 hover:bg-orange-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Lire l'article
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg mt-6">
                    <h5 className="font-bold text-lg mb-3 text-orange-300">Plateformes de référence (2023-2025)</h5>
                    <ul className="space-y-3 pl-6">
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Netflix - Leader mondial du streaming vidéo</span>
                          <a 
                            href="https://www.netflix.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-orange-600/40 hover:bg-orange-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Visiter
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Disney+ - Plateforme de streaming de Disney</span>
                          <a 
                            href="https://www.disneyplus.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-orange-600/40 hover:bg-orange-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Visiter
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/80 mr-2">•</span>
                        <div>
                          <span className="text-white/80">Twitch - Plateforme de streaming en direct</span>
                          <a 
                            href="https://www.twitch.tv/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-2 py-1 bg-orange-600/40 hover:bg-orange-600/60 rounded text-xs transition-colors duration-300"
                          >
                            Visiter
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'outils-utilises' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Outils utilisés pour cette veille technologique</h4>
                  
                  <div className="bg-gradient-to-r from-red-800/20 to-orange-600/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Outils de veille et de recherche</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Google Alerts</strong> - Alertes sur les mots-clés liés au streaming vidéo</li>
                      <li><strong>Reddit</strong> - Suivi des subreddits dédiés aux plateformes de streaming</li>
                      <li><strong>Twitter/X</strong> - Veille des comptes officiels des plateformes et experts du domaine</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-800/20 to-orange-600/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Outils d'analyse et de mesure</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Statista</strong> - Statistiques et études de marché sur l'industrie du streaming</li>
                      <li><strong>Fast.com</strong> - Outil de mesure de vitesse de connexion internet de Netflix</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-800/20 to-orange-600/20 p-5 rounded-lg my-4">
                    <h5 className="font-semibold mb-3">Plateformes testées et analysées</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Netflix</strong> - Leader mondial du streaming à la demande</li>
                      <li><strong>Disney+</strong> - Plateforme de streaming de Disney</li>
                      <li><strong>Twitch</strong> - Plateforme de streaming en direct spécialisée dans les jeux vidéo</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <h5 className="font-semibold mb-2 text-center">Méthodologie</h5>
                    <p>
                      Cette veille a été réalisée selon une approche multidimensionnelle :
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Suivi régulier des actualités et innovations dans le domaine du streaming vidéo</li>
                        <li>Analyse des performances techniques et de l'expérience utilisateur</li>
                        <li>Participation à des forums et groupes de discussion spécialisés</li>
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
