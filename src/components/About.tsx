import React from 'react';
// src/components/About.jsx
export default function About() {
    return (
      <section id="about" className="py-20 bg-zinc-300 text-stone-700">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre mí</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Soy Joaquín Palandri</h3>
            <p className="text-stone-600 mb-4">
              Soy estudiante avanzado de Bioingeniería en la Universidad Nacional de Entre Ríos, con un gran interés en el desarrollo de soluciones tecnológicas aplicadas al sector de la salud.
            </p>
            <p className="text-stone-600 mb-4">
              Me apasiona la programación y las tecnologías emergentes, especialmente aquellas relacionadas con sistemas embebidos, IoT y la automatización en el área médica.
            </p>
            <p className="text-stone-600 mb-4">
              Además de mi formación académica, me he dedicado al desarrollo de aplicaciones web y móviles, y disfruto crear interfaces intuitivas para mejorar la experiencia del usuario.
            </p>
            <h4 className="text-lg font-semibold mb-2">Experiencia Académica</h4>
            <ul className="list-disc pl-5 text-stone-600">
              <li>Estudiante avanzado de Bioingeniería, Universidad Nacional de Entre Ríos (2024).</li>
              <li>Proyecto de tesis: "Desarrollo e implementación de un sistema de monitoreo remoto para equipos de ducha en cama".</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4 mb-2">Habilidades</h4>
            <ul className="list-disc pl-5 text-stone-600">
              <li>Programación en lenguajes como JavaScript, PHP, HTML5, CSS.</li>
              <li>Desarrollo de aplicaciones web y móviles con Angular y React.</li>
              <li>Conocimiento en IoT, AWS IoT Core y desarrollo de sistemas embebidos.</li>
              <li>Familiaridad con herramientas de diseño UI/UX (Figma, Adobe XD).</li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/200"
              alt="Joaquín Palandri"
              className="rounded-full w-40 h-40 object-cover border-4 border-zinc-600"
            />
          </div>
        </div>
      </div>
    </section>
    );
  }
  