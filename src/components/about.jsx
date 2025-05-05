"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center">À Propos de Moi</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Personal Info */}
            <div className="space-y-6 bg-white/10 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Étudiant en BTS SIO SLAM</h3>
              <div className="space-y-4">
                <p className="text-lg">
                  [Votre présentation personnelle ici]
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Formation :</h4>
                  <p>BTS Services Informatiques aux Organisations</p>
                  <p>Option Solutions Logicielles et Applications Métiers (SLAM)</p>
                </div>
              </div>
            </div>

            {/* Right side - Skills */}
            <div className="space-y-6 bg-white/10 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-6">Compétences</h3>
              
              {/* Développement */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-xl text-pink-300">Développement</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML/CSS" className="w-12 h-12 mb-2" />
                    <span className="text-center">HTML/CSS</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-2" />
                    <span className="text-center">JavaScript</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-2" />
                    <span className="text-center">React</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 mb-2" />
                    <span className="text-center">Python</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12 mb-2" />
                    <span className="text-center">Java</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="/assets/sql-database-generic.svg" alt="SQL" className="w-12 h-12 mb-2" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://www.svgrepo.com/show/331760/sql-database-generic.svg';
                      }}
                    />
                    <span className="text-center">SQL</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="/assets/php.png" alt="PHP" className="w-12 h-12 mb-2" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg';
                      }}
                    />
                    <span className="text-center">PHP</span>
                  </div>
                </div>
              </div>
              
              {/* Outils & Méthodes */}
              <div>
                <h4 className="font-semibold mb-4 text-xl text-pink-300">Outils & Méthodes</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mb-2" />
                    <span className="text-center">Git</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-12 h-12 mb-2" />
                    <span className="text-center">VS Code</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://cdn-icons-png.flaticon.com/512/2620/2620735.png" alt="Méthode Agile" className="w-12 h-12 mb-2" />
                    <span className="text-center">Agile</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="/assets/neon.png" alt="Neon" className="w-12 h-12 mb-2" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://neon.tech/favicon/favicon-32x32.png';
                      }}
                    />
                    <span className="text-center">Neon</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="https://img.icons8.com/color/96/000000/test-tube.png" alt="Tests unitaires" className="w-12 h-12 mb-2" />
                    <span className="text-center">Tests unitaires</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="/assets/windsurf.png" alt="Windsurf" className="w-12 h-12 mb-2" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://img.icons8.com/fluency/96/000000/wind.png';
                      }}
                    />
                    <span className="text-center">Windsurf</span>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <img src="/assets/paint.png" alt="Paint.NET" className="w-12 h-12 mb-2" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://img.icons8.com/color/96/000000/paint-palette.png';
                      }}
                    />
                    <span className="text-center">Paint.NET</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section - Objectives */}
          <div className="mt-12 bg-white/10 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Objectifs Professionnels</h3>
            <p className="text-lg">
              [Vos objectifs professionnels et aspirations ici]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
