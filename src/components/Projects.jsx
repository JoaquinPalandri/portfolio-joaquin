import React from 'react';
// src/components/Projects.jsx
export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-stone-200 text-stone-700">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Proyecto 1"
                className="rounded-t-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sistema de Monitoreo Remoto</h3>
              <p className="text-stone-600 mb-4">
                Un sistema de monitoreo para equipos médicos en tiempo real, utilizando IoT y AWS IoT Core para recopilar y visualizar datos.
              </p>
              <a
                href="#"
                className="text-stone-700 font-semibold hover:text-stone-900 transition"
              >
                Ver más
              </a>
            </div>
            {/* Proyecto 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Proyecto 2"
                className="rounded-t-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Aplicación de Control de Salud</h3>
              <p className="text-stone-600 mb-4">
                Desarrollo de una app móvil para gestionar datos de salud, conectada a dispositivos IoT para control remoto de pacientes.
              </p>
              <a
                href="#"
                className="text-stone-700 font-semibold hover:text-stone-900 transition"
              >
                Ver más
              </a>
            </div>
            {/* Proyecto 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Proyecto 3"
                className="rounded-t-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Dashboard de Datos en Tiempo Real</h3>
              <p className="text-stone-600 mb-4">
                Creación de un dashboard interactivo que visualiza datos en tiempo real provenientes de sistemas embebidos.
              </p>
              <a
                href="#"
                className="text-stone-700 font-semibold hover:text-stone-900 transition"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  