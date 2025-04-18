import React from 'react';
// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-300 text-stone-700">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre mí</h2>
        <div>
          <h3 className="text-xl font-semibold mb-4">Soy Joaquín Palandri</h3>
          <p className="text-stone-600 mb-4">
            Tengo 25 años y resido en Rosario, Argentina. Me considero un afortunado por ser contemporáneo a esta era tecnológica. En mi tiempo libre me gusta leer libros, ir al gimnasio, tocar la guitarra y jugar al fútbol. También disfruto mantenerme informado sobre las nuevas tecnologías de desarrollo que surgen o se actualizan.
          </p>

          <p className="text-stone-600 mb-4">
            "Soy desarrollador web y mobile con formación en Bioingeniería. Me especializo en crear aplicaciones, combinando la lógica de la ingeniería con un enfoque centrado en el usuario. Mi paso por la bioingeniería me dio una base sólida en tecnología y resolución de problemas, que hoy aplico al desarrollo de soluciones digitales."
          </p>


          <h4 className="text-lg font-semibold mb-2">Experiencia Académica</h4>
          <ul className="list-disc pl-5 text-stone-600">
            <li>Especialista en Ingeniería de Software, <a href="https://postgrado.info.unlp.edu.ar/distancia-especializacion-en-ingenieria-de-software/" target="_blank" className="text-blue-500">Universidad Nacional de La Plata</a> (En curso).</li>
            <li>Bioingeniero, <a href="https://estudia.uner.edu.ar/propuestas/bioingenieria/" target="_blank" className="text-blue-500">Universidad Nacional de Entre Ríos</a> (2024).</li>
          </ul>
          <h4 className="text-lg font-semibold mt-4 mb-2">Habilidades</h4>
          <ul className="list-disc pl-5 text-stone-600">
            <li> Programación en <i className="fab fa-js-square text-yellow-500"></i> JavaScript, <i className="fab fa-php text-blue-500"></i> PHP, <i className="fab fa-html5 text-orange-500"></i> HTML5, y <i className="fab fa-css3-alt text-blue-500"></i> CSS.</li>
            <li> Desarrollo de aplicaciones web y móviles con <i className="fab fa-angular text-red-500"></i> Angular y <i className="fab fa-react text-blue-500"></i> React.</li>
            <li> Conocimiento en <i className="fas fa-plug text-blue-500"></i> IoT, <i className="fab fa-aws text-orange-500"></i> AWS IoT Core y desarrollo de sistemas embebidos.</li>
            <li> Familiaridad con herramientas de diseño UI/UX como <i className="fab fa-figma text-purple-500"></i> Figma y <i className="fab fa-adobe text-red-500"></i> Adobe XD.</li>
          </ul>

        </div>

      </div>
    </section>
  );
}
