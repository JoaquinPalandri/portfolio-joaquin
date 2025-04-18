import React from 'react';

export default function Hero() {
    return (
      <section id='hero' className="h-screen flex flex-col justify-center items-center bg-zinc-300 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-700 mb-4">
          ¡Hola! Soy Joaquín Palandri
        </h1>
        <h2 className="text-xl md:text-2xl text-stone-600 mb-6">
          Desarrollador web | Bioingeniero
        </h2>
        <p className="text-stone-500 max-w-xl mb-8">
          Apasionado por la tecnología, el diseño y la salud. Actualmente enfocado en el desarrollo de aplicaciones web y proyectos tecnológicos aplicados a la ingeniería biomédica.
        </p>
        <a
          href="#projects"
          className="bg-stone-700 text-white px-6 py-2 rounded-full hover:bg-stone-800 transition"
        >
          Ver proyectos
        </a>
      </section>
    );
  }
  