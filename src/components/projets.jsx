"use client";
import Link from 'next/link';

export default function ProjetsSection() {
  return (
    <section id="projets" className="min-h-screen w-full py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Mes Projets</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Projet Card 1 */}
            <div className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 group">
              <div className="relative h-48 overflow-hidden">
                {/* Image placeholder - remplacer src avec votre image */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400"><img src="../assets/Snake.png" alt="" /></span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jeu Snake</h3>
                <p className="text-gray-300 mb-4">Le but du jeu est de diriger un serpent qui grandit et constitue ainsi lui-même un obstacle. Le jeu se termine lorsque le serpent se touche lui-même ou les bords de l'écran</p>
                
                {/* Technologies utilisées */}
                <div className="mb-4">
  <h4 className="text-sm font-semibold mb-2 text-pink-300">Technologies</h4>
  <div className="flex flex-wrap gap-2">
    {/* Remplacer ces div par vos icônes de technologies */}
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/ReactBootstrap.png" alt="ReactBootstrap" className="w-3/4 h-3/4" />
    </div>
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/HTML5.png" alt="HTML5" className="w-3/4 h-3/4" />
    </div>
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/JavaScript.png" alt="JavaScript" className="w-3/4 h-3/4" />
    </div>
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/CSS3.png" alt="CSS3" className="w-3/4 h-3/4" />
    </div>
  </div>
</div>

                {/* Liens */}
                <div className="flex gap-4">
                  <Link href="/Snake"> 
                    <button className="animated-btn">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>Accéder</span>
                    </button>
                  </Link>
                  <a href="https://github.com/Nicolas-Kadir-Efrei/Portfolio/tree/main/src/app/Snake" target="_blank" rel="noopener noreferrer" className="animated-btn bg-white/10 hover:bg-white/20">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Voir le Code</span>
                  </a  >
                </div>
              </div>
            </div>

            {/* Projet Card 2 */}
            <div className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400"><img src="../assets/Meteo.png" alt="" /></span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Site Météo</h3>
                <p className="text-gray-300 mb-4">Mon Premier site méteo avec React et API OpenWeatherMap</p>
                
                                {/* Technologies utilisées */}
                                <div className="mb-4">
  <h4 className="text-sm font-semibold mb-2 text-pink-300">Technologies</h4>
  <div className="flex flex-wrap gap-2">
    {/* Remplacer ces div par vos icônes de technologies */}
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/React.png" alt="React" className="w-3/4 h-3/4" />
    </div>
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/HTML5.png" alt="HTML5" className="w-3/4 h-3/4" />
    </div>
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/JavaScript.png" alt="JavaScript" className="w-3/4 h-3/4" />
    </div>
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/CSS3.png" alt="CSS3" className="w-3/4 h-3/4" />
    </div>
    <div className="w-15 h-15 rounded bg-white/20 flex items-center justify-center">
      <img src="../assets/TailWind.png" alt="TailWind" className="w-3/4 h-3/4" />
    </div>
  </div>
</div>
                
<div className="flex gap-4">
  <a href="https://nicolas-kadir-ciftci.vercel.app" target="_blank" rel="noopener noreferrer">
    <button className="animated-btn">
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </div>
      </div>
      <span>Ouvrir</span>
    </button>  
  </a>
  <a href="https://github.com/Nicolas-Kadir-Efrei/Meteonv" target="_blank" rel="noopener noreferrer" className="animated-btn bg-white/10 hover:bg-white/20">
    <div className="svg-wrapper-1">
      <div className="svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z"
          ></path>
        </svg>
      </div>
    </div>
    <span>Voir le Code</span>
  </a >
</div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
