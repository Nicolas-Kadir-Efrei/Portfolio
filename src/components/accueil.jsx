"use client"
export default function AccueilSection() {
  return (
    <section
      id="accueil"
      className="flex flex-col items-center justify-center min-h-screen w-full text-white"
    >
      <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
        <h1 className="text-5xl font-bold mb-6">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="text-xl mb-8">
          Découvrez mes projets et parcours professionnels.
        </p>
        <a 
          href="#projets"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Explorer mes Projets
        </a>
      </div>
    </section>
  );
}
