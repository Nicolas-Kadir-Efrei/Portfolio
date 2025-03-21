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
              <h3 className="text-2xl font-semibold mb-4">Compétences</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Développement</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outils & Méthodes</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Méthode Agile</li>
                    <li>Base de données</li>
                    <li>Tests unitaires</li>
                  </ul>
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
