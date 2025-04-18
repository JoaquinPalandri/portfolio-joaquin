import React from 'react';

export default function Hero() {
  return (
    <section id='hero' className="h-screen flex flex-col md:flex-row justify-center
     items-center bg-zinc-900 text-center px-4 pt-20">
      {/* Columna de foto */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="img/img-hero.png"
          alt="Joaquín Palandri"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
        />
      </div>

      {/* Columna de texto */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¡Hola!
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Soy Joaquín Palandri
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-300 mb-6">
          Desarrollador web | Bioingeniero
        </h2>
        <p className="text-zinc-400 max-w-xl mb-8 italic ">
          "Soy desarrollador web/mobile con formación en Bioingeniería, lo que me aporta una
          mirada sistemática y orientada a la resolución de problemas complejos.
          Actualmente estudio una especialización en <strong>especialización en
            Ingeniería de Software</strong> para fortalecer mis habilidades en diseño,
          arquitectura, buenas prácticas y desarrollo a gran escala."
        </p>
        <a
          href="#projects"
          className="bg-white text-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-300 transition">
          Ver proyectos
        </a>
      </div>
    </section>
  );
}
