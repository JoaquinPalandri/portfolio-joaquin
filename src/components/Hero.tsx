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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center">
          ¡Hola!
          <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" 
          stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 ml-4">
            <path d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>

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
